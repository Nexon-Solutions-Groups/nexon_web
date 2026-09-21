# NEXONS GROUP

Company site for **NEXONS GROUP** — operational software for Pakistan and worldwide.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Go live (Cloudflare, free, no card)

1. Push this repo to GitHub: [Nexon-Solutions-Groups/nexon_web](https://github.com/Nexon-Solutions-Groups/nexon_web)
2. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) with email only — stay on the **Free** plan
3. **Workers & Pages → Create → Import a repository** → connect GitHub → select `nexon_web`
4. Cloudflare will build with OpenNext and publish a `*.workers.dev` URL

Do not add Workers Paid, R2, or a payment method.

## Scripts

- `npm run dev` — local Next.js
- `npm run build` — production Next.js build
- `npm run preview` — Cloudflare Workers runtime locally
- `npm run deploy` — deploy to Cloudflare from your machine (needs `npx wrangler login`)
- `npm run lint` — ESLint
