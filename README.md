# NEXONS GROUP

Company site for **NEXONS GROUP** — operational software for Pakistan and worldwide.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Cloudflare Pages (static export → `*.pages.dev`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Go live (Cloudflare Pages, free, no card)

1. Push this repo to GitHub: [Nexon-Solutions-Groups/nexon_web](https://github.com/Nexon-Solutions-Groups/nexon_web)
2. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) — stay on the **Free** plan
3. **Workers & Pages → Create application → Pages tab → Import an existing Git repository**
4. Select `nexon_web`
5. Project name: `nexonsgroups` (URL: `https://nexonsgroups.pages.dev` if available)
6. Framework preset: **Next.js (Static HTML Export)**
7. Build command: `npx next build`
8. Build output directory: `out`
9. Save and Deploy

Do not add Workers Paid, R2, or a payment method.

## Scripts

- `npm run dev` — local Next.js
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint
