# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only React SPA (McMaster AI Society Website). All code lives under `frontend/`.

### Quick reference

| Action | Command | Working directory |
|--------|---------|-------------------|
| Install deps | `npm install` | `frontend/` |
| Dev server | `npm run dev` | `frontend/` |
| Lint | `npm run lint` | `frontend/` |
| Build | `npm run build` | `frontend/` |

- The dev server (Vite) runs on **port 5173** by default.
- There is no backend, database, or Docker dependency. The entire app is a static React SPA served by Vite.
- The `@/` path alias maps to `./src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
- `npm run build` runs `tsc -b` (TypeScript type-check) then `vite build`. Use this as the full correctness check before committing.
- The README recommends running `npm run lint`, `npm run build`, and `npm audit fix` before committing.
