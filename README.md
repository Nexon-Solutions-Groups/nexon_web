# NEXONS GROUP

Company site for **NEXONS GROUP** — operational software for Pakistan and worldwide.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Static export for **Netlify** (`*.netlify.app`) or Cloudflare

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Go live on Netlify (free, no card)

1. Sign up at [app.netlify.com](https://app.netlify.com) with **GitHub** (the account that can open `Nexon-Solutions-Groups/nexon_web`)
2. **Add new site → Import an existing project → GitHub**
3. Select **nexon_web**
4. Site name: `nexonsgroups` (URL: `https://nexonsgroups.netlify.app` if available)
5. Build command: `npx next build`
6. Publish directory: `out`
7. Deploy

Stay on the **Free** / Hobby plan. Do not add a credit card.

The repo already includes `netlify.toml`, so Netlify can fill those fields itself.
