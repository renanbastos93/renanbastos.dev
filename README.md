# renanbastos.dev

Personal website of Renan Bastos: experience, projects, open source contributions and articles, in English, Portuguese and Spanish.

Next.js (App Router, static export) + Tailwind CSS. No backend.

## Develop

```bash
npm install
npm run dev         # http://localhost:3000
npm run typecheck
npm run build && npm start
```

## Content

- `src/content/data.ts`: experience, projects, open source PRs and articles
- `src/i18n/dictionaries.ts`: interface copy in `en`, `pt` and `es`

## Deploy (Dokploy)

Create an application with build type **Railpack** (`railpack.json` pins the Node provider). Railpack runs `npm run build` and `npm start`, so the app listens on port 3000. Old Hugo URLs (`/about`, `/posts`, `/blog`, ...) redirect to the matching section via `redirects()` in `next.config.ts`.
