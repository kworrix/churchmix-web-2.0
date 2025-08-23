# PraiseMix — Landing Site (Next.js + Tailwind)

This is a clean, responsive starter with Home, About, Contact and a header with your logo.

## Quick Start (Local)
```bash
npm install
npm run dev
# then open http://localhost:3000
```

## Deploy (Vercel)
1. Push this folder to a new GitHub repo (e.g., `praisemix-landing`).
2. In Vercel: Add New → Project → Import from GitHub → Deploy.
3. Root Directory: leave blank (your `pages` folder is at the repo root).

## Deploy (Netlify)
If Vercel is unavailable:
- Build command: `npm run build`
- Publish directory: `.next`
- Add `@netlify/plugin-nextjs` via a `netlify.toml` if prompted.

## Where to put your logo
Place your logo at `public/praisemix.jpg`. The header already references this path.
If you change the filename, update `/pages/_app.js` accordingly.
