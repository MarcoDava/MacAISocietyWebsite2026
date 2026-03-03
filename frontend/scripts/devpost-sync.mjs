import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import * as cheerio from 'cheerio';

const DEVPOST_ORG_URL =
  process.env.DEVPOST_ORG_URL || 'https://YOUR-ORG.devpost.com';

function log(message, ...args) {
  // eslint-disable-next-line no-console
  console.log(`[devpost-sync] ${message}`, ...args);
}

async function readExistingPayload(outputPath) {
  try {
    const content = await fs.readFile(outputPath, 'utf8');
    return JSON.parse(content);
  } catch {
    return { projects: [], lastUpdated: null };
  }
}

function normalizeText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function extractProjectsFromHtml(html, baseUrl) {
  const $ = cheerio.load(html);
  const projects = [];

  // Try multiple selector patterns to be resilient to Devpost layout changes
  const candidates = new Set();

  $('[href*="/software/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const url = new URL(href, baseUrl).toString();
    candidates.add(url);
  });

  $('.software-item, .software-list-item, .cp-project-card').each((_, el) => {
    const link = $(el).find('a[href*="/software/"]').first().attr('href');
    if (!link) return;
    const url = new URL(link, baseUrl).toString();
    candidates.add(url);
  });

  for (const devpostUrl of candidates) {
    const id = devpostUrl.split('/software/')[1] || devpostUrl;

    const linkEl =
      $(`a[href$="${id}"]`).first() ||
      $(`a[href*="/software/${id}"]`).first();

    const card =
      linkEl.closest('.software-item, .software-list-item, .cp-project-card') ||
      linkEl.parent();

    const name =
      normalizeText(card.find('.software-title, .title, h3, h2').first().text()) ||
      normalizeText(linkEl.text());

    const tagline = normalizeText(
      card
        .find(
          '.software-tagline, .tagline, .challenge-description, .cp-project-card__tagline'
        )
        .first()
        .text()
    );

    const description = tagline;

    const imgSrc =
      card.find('img').first().attr('src') ||
      card.find('img').first().attr('data-src') ||
      null;
    const imageUrl = imgSrc ? new URL(imgSrc, baseUrl).toString() : null;

    const team = null;
    const technologies = null;
    const eventName =
      normalizeText(
        card
          .find(
            '.software-subtitle, .subtitle, .cp-project-card__hackathon-name'
          )
          .first()
          .text()
      ) || null;

    const createdAt = null;

    if (!name && !tagline) continue;

    projects.push({
      id,
      name: name || id,
      tagline,
      description,
      imageUrl,
      devpostUrl,
      team,
      technologies,
      eventName,
      createdAt,
    });
  }

  return projects;
}

async function main() {
  const here = path.dirname(new URL(import.meta.url).pathname);
  const outputPath = path.resolve(here, '../public/devpost-projects.json');

  log('Starting sync from %s', DEVPOST_ORG_URL);

  const existing = await readExistingPayload(outputPath);

  if (!DEVPOST_ORG_URL || DEVPOST_ORG_URL.includes('YOUR-ORG')) {
    log(
      'DEVPOST_ORG_URL is not configured. Using existing payload and exiting.'
    );
    return;
  }

  let response;
  try {
    response = await fetch(DEVPOST_ORG_URL);
  } catch (error) {
    log('Failed to fetch Devpost org page. Keeping existing payload.', error);
    return;
  }

  if (!response.ok) {
    log(
      'Non-200 response from Devpost (%s). Keeping existing payload.',
      response.status
    );
    return;
  }

  const html = await response.text();
  const projects = extractProjectsFromHtml(html, DEVPOST_ORG_URL);

  if (!projects.length) {
    log(
      'Parsed 0 projects from Devpost. Keeping existing payload to avoid wiping data.'
    );
    return;
  }

  const payload = {
    projects,
    lastUpdated: new Date().toISOString(),
  };

  await fs.writeFile(outputPath, JSON.stringify(payload, null, 2), 'utf8');

  log('Wrote %d projects to %s', projects.length, outputPath);
}

main().catch((error) => {
  log('Uncaught error during sync. Keeping existing payload.', error);
  process.exitCode = 1;
});

