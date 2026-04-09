# MacAI Society Website 2026

McMaster AI Society website with a MacHacks hackathon sub-site. Deployed on Vercel. All source code lives in `frontend/`.

## Commands

```bash
cd frontend
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run lint         # ESLint check
npm run sync:github  # Sync GitHub org projects → public/github-projects.json
npm run sync:gallery # Sync Cloudinary gallery  → public/gallery.json
npm run sync:all     # Run both syncs
```

IMPORTANT: Always `cd frontend` before running any npm command — there is no package.json at the root.

## Tech Stack

- **React 19 + TypeScript 5** via **Vite 7**
- **Tailwind CSS v4** — configured via `@theme {}` in `src/index.css`, NOT a `tailwind.config.js`
- **Shadcn/ui** (New York style) + **Radix UI** for components
- **React Router DOM 7** for routing
- **Motion (Framer Motion) 12** for animations
- **Three.js + @react-three/fiber + @react-three/drei** for 3D
- **Cloudinary** for image delivery
- **Formspree** (`xbdzagdr`) for form submissions

## Architecture

```
frontend/src/
├── Pages/       # One file per route
├── Components/  # Shared components; ui/ contains Shadcn components
├── data/        # Static TS data files (team, partners, machacks config)
├── lib/utils.ts # cn() helper only
├── App.tsx      # All route definitions live here
└── index.css    # Global styles + ALL design tokens (@theme block)
```

**Path alias:** `@/` → `src/`

## Code Style

- Use the `@/` alias for all internal imports — never use relative `../` paths
- Components use PascalCase filenames; utilities use camelCase
- Use `cn()` from `@/lib/utils` for conditional className merging
- Prefer `motion` components from `motion/react` for any new animations
- TypeScript strict mode is on — no `any`, no unused variables

## Design System

All tokens are in `src/index.css` inside `@theme {}`. Use Tailwind utility classes with these custom tokens:

**Main site colors:** `macai-deep` (#1800AD), `macai-teal` (#1CB1E3), `macai-cyan` (#3DDFF5), `macai-offwhite` (#F0F4F4), `macai-cta` (#E00064)

**Reusable classes:** `.btn-cta`, `.btn-secondary`, `.card-lift`

**Fonts:** Montserrat (headings), Roboto (body) — loaded via Google Fonts in `index.html`

## Critical Gotchas

- **MacHacks dark theme is fully isolated** — `MacHacks.tsx` has its own color set (`#060606` bg, dark charcoals, magenta accents). Do not apply main site colors to it.
- **Tailwind v4 has no config file** — adding new theme tokens goes in the `@theme {}` block in `index.css`, not a config file.
- **Adding Shadcn components:** `npx shadcn@latest add <component>` — they land in `src/Components/ui/`.
- **Gallery shuffle is date-stable** — the randomization is seeded by date intentionally; don't replace it with `Math.random()`.
- **Public JSON files are auto-generated** — `github-projects.json` and `gallery.json` in `/public` are overwritten by sync scripts. Do not hand-edit them.
- **CI sync commits use `[skip ci]`** — this prevents infinite CI loops on auto-sync commits.

## Routing

| Route | Page | Notes |
|---|---|---|
| `/` | `Home.tsx` | Main landing page |
| `/machacks` | `MacHacks.tsx` | Hackathon page — dark theme |
| `/projects` | `Projects.tsx` | GitHub projects, filterable |
| `/team` | `Team.tsx` | Exec + advisory board |
| `/about` | `AboutUs.tsx` | Mission + history |
| `/partnerships` | `Partnerships.tsx` | Sponsors + inquiry form |
| `/gallery` | `Gallery.tsx` | Event photos, filterable |
| `/contact` | `Contact.tsx` | Contact form |

## Data to Update for New Events

When updating for a new MacHacks or changing sponsors/team:
1. `src/data/machacks-config.ts` — date, location, schedule, sponsors, FAQ
2. `src/data/partners.ts` — current/past sponsors
3. `src/data/team.ts` — executive team + advisory board

## Deployment

- Platform: **Vercel** — config in `frontend/vercel.json`
- Contact email: `info@mcmasterai.ca`
- Formspree form ID: `xbdzagdr` (used by both Contact and Partnerships forms)

## Redesign Spec (2026)

    ### Goals
    Transform the site from a static MacHacks landing page into a full MacAI Society hub: future-focused, energetic,
    community-driven, credible, approachable.

    ### Brand Rules
    - **Colors:** `#1800AD` (deep blue), `#1CB1E3` (teal), `#3DDFF5` (cyan), `#A7C2C3`, `#F0F4F4` (off-white), `#E00064`
     (CTA pink — use sparingly)
    - **Fonts:** Montserrat (headings), Roboto (body)
    - **Tone:** Plain language, benefit-focused, trustworthy — no buzzwords or fear-based hooks
    - **Logo:** No warping, rotating, or recoloring

    ### UX Patterns (apply site-wide)
    - Cards lift on hover; buttons lift/recolor on hover
    - Stats count up (e.g. "1000+ Members")
    - Full-width hero per page: headline + CTA left, visual right
    - Generous whitespace, card-based grouping, minimal nav
    - Fully responsive; alt text on images

    ### Pages

    **Home**
    1. Hero: "Building the Future of AI at McMaster." / "Canada's next generation of AI innovators…"
    2. Social proof stats: X+ Members, X+ Speakers, 1 Flagship Hackathon, X+ Workshops, X+ Sponsors
    3. What We Offer: Workshops, Hackathons, Networking cards
    4. Upcoming Events: MacHacks countdown to March 21 2026 + Register CTA
    5. Member Spotlight: rotating "Why I joined MacAI" profiles
    6. Pathway Quiz: 3–5 questions → recommends workshops/projects/mentoring → Join CTA
    7. CTAs: Join the Society, Explore MacHacks 2026, Get Involved, Partner With Us

    **Projects**
    - Dynamic grid: CUCAI 2025 + 2026 projects (name, description, tech stack, thumbnail)
    - Click → modal with details, video demo, GitHub link, team profiles
    - Filters: year, AI domain, difficulty (micro-animation on filter)
    - Contribute CTA → application form / community link

    **Partnerships**
    - Highlight new 2026 sponsors with appreciation copy
    - Show current + all past sponsors (organized by year)
    - Professional logo grid, growth narrative
    - "Interested in collaborating?" CTA → contact form

    **MacHacks**
    - Hero: MacHacks 2026, confirmed date March 21 2026, location/theme teaser
    - Countdown timer + bold "Register for MacHacks 2026" CTA (email sign-up until form live)
    - Schedule/workshops: accordion or cards, filter by beginner/advanced, hover micro-animations
    - Past MacHacks (2021–2023): compact cards → Devpost links, attendee stats, success stories
    - Sponsors: all past + current by year; sponsor CTA
    - FAQ accordion (eligibility, cost, team size, what to bring)
    - **NOTE:** Remove all "Spring 2025" copy — that event did not happen

    **Gallery**
    - Curated mosaic grid (mixed aspect ratios), not a photo dump
    - Hover zoom / parallax effects
    - Filters: event + year
    - Click → modal with caption/story
    - Embed short video highlight reels

    **Contact & Footer**
    - Simple form: name, email, message (with validation)
    - Embedded McMaster map
    - Social icons (Instagram, LinkedIn, etc.)
    - Footer links: accessibility statement, privacy policy, terms of service

    ### Inspiration Sites
    - https://aiclub.stanford.edu/
    - https://www.degrootecommerce.ca/
    - https://www.rcarecords.com/
    - https://bruno-simon.com/