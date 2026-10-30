# renanbastos.dev

Personal website of Renan Bastos: experience, projects, open source contributions and articles, in English, Portuguese and Spanish.

Next.js (App Router, static export) + Tailwind CSS. No backend.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm build        # static site in ./out
pnpm start        # serve ./out over HTTP
```

Open `./out` through a server (`pnpm start`, nginx). Opening `out/index.html` straight from disk (`file://`) loads no JavaScript, so the language switch and the article filter do nothing.

## Content

- `src/content/data.ts`: experience, projects, open source PRs and articles
- `src/i18n/dictionaries.ts`: interface copy in `en`, `pt` and `es`

## Deploy (Dokploy)

Create an application with build type **Dockerfile**. The image builds the static export and serves it with nginx on port 80 (`nginx.conf`), which also redirects the old Hugo URLs (`/about`, `/posts`, `/blog`, ...) to the matching section.

```bash
docker build -t renanbastos.dev .
docker run --rm -p 8080:80 renanbastos.dev
```
