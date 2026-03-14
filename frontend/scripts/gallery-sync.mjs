#!/usr/bin/env node

/**
 * Fetches images from a Cloudinary folder and writes gallery.json to public/.
 *
 * Usage:
 *   CLOUDINARY_CLOUD_NAME=xxx CLOUDINARY_API_KEY=xxx CLOUDINARY_API_SECRET=xxx \
 *   node scripts/gallery-sync.mjs
 *
 * If no env vars are set, generates a placeholder gallery.json
 * so the frontend always has data to work with.
 */

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

// Folders in Cloudinary to scan (create these in your dashboard)
const FOLDERS = [
  { folder: 'macai/workshops', event: 'Workshops' },
  { folder: 'macai/machacks', event: 'MacHacks' },
  { folder: 'macai/cucai', event: 'CUCAI' },
  { folder: 'macai/general', event: 'General' },
];

async function fetchCloudinaryFolder(folder) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expression: `folder:${folder} AND resource_type:image`,
      max_results: 500,
      sort_by: [{ created_at: 'desc' }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Cloudinary error for ${folder}: ${res.status}`);
  }

  const data = await res.json();
  return data.resources || [];
}

function transformImage(resource, event) {
  const thumbUrl = resource.secure_url.replace(
    '/upload/',
    '/upload/w_800,h_600,c_fill,q_auto,f_auto/'
  );
  const fullUrl = resource.secure_url.replace(
    '/upload/',
    '/upload/q_auto,f_auto/'
  );

  return {
    id: resource.asset_id || resource.public_id,
    src: fullUrl,
    thumb: thumbUrl,
    caption: resource.context?.custom?.caption || '',
    event,
    year: new Date(resource.created_at).getFullYear(),
    width: resource.width,
    height: resource.height,
  };
}

function generatePlaceholders() {
  return [
    { id: '1', src: '', thumb: '', caption: 'Students collaborating at a workshop.', event: 'Workshops', year: 2025, width: 800, height: 600 },
    { id: '2', src: '', thumb: '', caption: 'MacHacks 2023 — team presenting their project.', event: 'MacHacks', year: 2023, width: 800, height: 600 },
    { id: '3', src: '', thumb: '', caption: 'CUCAI 2025 project showcase.', event: 'CUCAI', year: 2025, width: 800, height: 600 },
    { id: '4', src: '', thumb: '', caption: 'Keynote and networking at MacHacks.', event: 'MacHacks', year: 2023, width: 800, height: 600 },
    { id: '5', src: '', thumb: '', caption: 'Hands-on coding session.', event: 'Workshops', year: 2025, width: 800, height: 600 },
    { id: '6', src: '', thumb: '', caption: 'Award ceremony and celebration.', event: 'MacHacks', year: 2023, width: 800, height: 600 },
  ];
}

async function main() {
  const { writeFileSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const outPath = fileURLToPath(new URL('../public/gallery.json', import.meta.url));

  let images = [];

  if (CLOUD_NAME && API_KEY && API_SECRET) {
    console.log('Syncing gallery from Cloudinary...');
    for (const { folder, event } of FOLDERS) {
      try {
        const resources = await fetchCloudinaryFolder(folder);
        console.log(`  ${folder}: ${resources.length} images`);
        images.push(...resources.map((r) => transformImage(r, event)));
      } catch (err) {
        console.error(`  Error fetching ${folder}:`, err.message);
      }
    }
  } else {
    console.log('No Cloudinary credentials found — writing placeholder gallery.');
    images = generatePlaceholders();
  }

  const payload = {
    syncedAt: new Date().toISOString(),
    count: images.length,
    images,
  };

  writeFileSync(outPath, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${outPath} (${images.length} images)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
