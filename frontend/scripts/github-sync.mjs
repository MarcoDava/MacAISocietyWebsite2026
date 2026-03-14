#!/usr/bin/env node

/**
 * Fetches all public repos from the McMasterAI GitHub organization
 * and writes a curated JSON file to public/github-projects.json.
 *
 * Usage:
 *   node scripts/github-sync.mjs
 *
 * Env (optional):
 *   GITHUB_TOKEN — raises rate limit from 60 to 5 000 req/hr
 */

const ORG = 'McMasterAI';
const OUT_PATH = new URL('../public/github-projects.json', import.meta.url);

// Repos to exclude (meta repos, old website, templates, forks)
const EXCLUDE = new Set([
  'McMasterAI.github.io',
  'MacAI-Projects-Template',
  'wiki',
  'RadiologyandAI-MedicalZooPytorch', // fork
]);

async function fetchAllRepos() {
  const repos = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/orgs/${ORG}/repos?per_page=100&sort=updated&page=${page}`;
    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'MacAI-Website-Sync',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(url, { headers });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    if (data.length === 0) break;
    repos.push(...data);
    page++;
  }

  return repos;
}

function transformRepo(repo) {
  const createdYear = new Date(repo.created_at).getFullYear();
  return {
    id: String(repo.id),
    name: repo.name,
    description: repo.description || 'A MacAI project.',
    language: repo.language || 'Other',
    topics: repo.topics || [],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    year: createdYear,
    updatedAt: repo.updated_at,
    url: repo.html_url,
    homepage: repo.homepage || null,
    isArchived: repo.archived,
    isFork: repo.fork,
  };
}

async function main() {
  console.log(`Fetching repos from github.com/orgs/${ORG}...`);
  const raw = await fetchAllRepos();
  console.log(`  Found ${raw.length} total repos.`);

  const projects = raw
    .filter((r) => !r.fork && !EXCLUDE.has(r.name))
    .map(transformRepo)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  console.log(`  Kept ${projects.length} projects (excluded forks, templates, meta repos).`);

  const { writeFileSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const outPath = fileURLToPath(OUT_PATH);

  const payload = {
    syncedAt: new Date().toISOString(),
    org: ORG,
    count: projects.length,
    projects,
  };

  writeFileSync(outPath, JSON.stringify(payload, null, 2));
  console.log(`  Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
