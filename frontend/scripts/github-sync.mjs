#!/usr/bin/env node

/**
 * Fetches all public repos from the MacAI GitHub organizations
 * and writes a curated JSON file to public/github-projects.json.
 *
 * Both the legacy org (McMasterAI, access lost) and the current org
 * (McMasterAI-Society) are synced so old and new projects both appear.
 *
 * Usage:
 *   node scripts/github-sync.mjs
 *
 * Env (optional):
 *   GITHUB_TOKEN — raises rate limit from 60 to 5 000 req/hr
 */

const ORGS = ['McMasterAI-Society', 'McMasterAI'];
const OUT_PATH = new URL('../public/github-projects.json', import.meta.url);

// Repos to exclude (meta repos, old website, templates, forks)
const EXCLUDE = new Set([
  'McMasterAI.github.io',
  'MacAI-Projects-Template',
  'wiki',
  'RadiologyandAI-MedicalZooPytorch', // fork
]);

async function fetchAllRepos(org) {
  const repos = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/orgs/${org}/repos?per_page=100&sort=updated&page=${page}`;
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
    org: repo.owner?.login ?? null,
    image: getProjectImage(repo),
    isArchived: repo.archived,
    isFork: repo.fork,
  };
}

function getProjectImage(repo) {
  const repoName = repo.name;
  // Mapping of repo names to local image filenames (case-insensitive checks)
  const mapping = {
    'covidash': 'CoviDash.png',
    'isolate': 'Isolate.png',
    'macchat': 'MacChat.png',
    'noteflow': 'Note Organizer.png',
    'organoid-detection-and-classification': 'Organoid Classification and Detection.png',
    'pianai': 'PianAI.png',
    'post_study_project': 'Post Study Prompt.png',
    'projectx-2021': 'ProjectX.png',
    'radiology-and-ai': 'RadiologyAI.png',
    'brain_radiology_2022': 'RadiologyAI.png',
    'second-brain': 'SecondBrain.png',
    'stylegan': 'StyleGan.png',
    'broker_project': 'The Broker Project.png',
    'traffictracker': 'Traffic Tracker.png',
    'walker-agent': 'Walker Agent.png',
    'autonomous-vehicle': 'Autonomous Vehicle (1).png'
  };

  const localFile = mapping[repoName.toLowerCase()];
  if (localFile) {
    return `/projects/${localFile}`;
  }

  // Fallback to GitHub Open Graph image for the repo's actual owner
  const owner = repo.owner?.login ?? ORGS[0];
  return `https://opengraph.githubassets.com/1/${owner}/${repoName}`;
}

async function main() {
  const raw = [];

  for (const org of ORGS) {
    console.log(`Fetching repos from github.com/orgs/${org}...`);
    const orgRepos = await fetchAllRepos(org);
    console.log(`  Found ${orgRepos.length} repos in ${org}.`);
    raw.push(...orgRepos);
  }

  // Dedupe by repo id in case a project was transferred between orgs
  const seen = new Set();
  const unique = raw.filter((r) => {
    const key = r.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const projects = unique
    .filter((r) => !r.fork && !EXCLUDE.has(r.name))
    .map(transformRepo)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  console.log(`  Kept ${projects.length} projects (excluded forks, templates, meta repos).`);

  const { writeFileSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const outPath = fileURLToPath(OUT_PATH);

  const payload = {
    syncedAt: new Date().toISOString(),
    orgs: ORGS,
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
