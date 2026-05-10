# MacroPage — Tech Studio Website

> Built with Next.js 14, Tailwind CSS, Framer Motion, MongoDB, Sanity CMS, deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, CSS Variables (theme system) |
| Animations | Framer Motion |
| Database | MongoDB (via Mongoose) |
| CMS | Sanity.io |
| Email | Resend |
| Hosting | Vercel (frontend), MongoDB Atlas (DB) |
| CDN/Security | Cloudflare |
| CI/CD | GitHub Actions |

---

## Project Structure

```
macropage/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (ThemeProvider, Navbar, Footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── work/page.tsx
│   │   ├── contact/page.tsx    # Contact form
│   │   └── api/
│   │       └── contact/route.ts  # Email API (Resend)
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   └── sections/           # HeroSection, WorkSection, etc.
│   ├── lib/
│   │   ├── mongodb.ts          # DB connection
│   │   └── sanity.ts           # CMS client + queries
│   ├── types/index.ts
│   └── styles/globals.css
├── .github/workflows/deploy.yml
├── .env.local.example
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Step-by-Step Setup

### Step 1 — Clone & Install

```bash
git clone https://github.com/yourusername/macropage.git
cd macropage
npm install
```

### Step 2 — Environment Variables

```bash
cp .env.local.example .env.local
# Ab .env.local file open karo aur apni values fill karo
```

### Step 3 — MongoDB Setup

1. [MongoDB Atlas](https://cloud.mongodb.com) par free account banao
2. New cluster create karo (M0 free tier)
3. Database user banao (username + password)
4. Network access mein `0.0.0.0/0` allow karo (ya Vercel IPs)
5. Connection string copy karo → `.env.local` mein `MONGODB_URI` mein paste karo

```
mongodb+srv://macropage:<password>@cluster0.xxxxx.mongodb.net/macropage
```

### Step 4 — Sanity CMS Setup

```bash
# Sanity CLI install karo
npm install -g @sanity/cli

# Project init karo
cd sanity/
sanity init

# Dashboard: https://sanity.io/manage
# Project ID copy karo → .env.local mein paste karo
```

**Schemas add karo** (sanity/schemas/):
- `project.ts` — Work section ke liye
- `service.ts` — Services ke liye

```bash
sanity deploy  # Studio deploy karo
```

### Step 5 — Resend Email Setup

1. [resend.com](https://resend.com) par account banao
2. Domain verify karo (macropage.in)
3. API key banao → `.env.local` mein paste karo

### Step 6 — Local Development

```bash
npm run dev
# http://localhost:3000 par dekho
```

### Step 7 — Deploy to Vercel

```bash
# Vercel CLI se deploy
npm install -g vercel
vercel login
vercel --prod
```

**Ya GitHub se automatic deploy:**

1. GitHub par repo push karo
2. [vercel.com](https://vercel.com) → "Import Project" → GitHub repo select karo
3. Environment variables add karo (Vercel dashboard mein)
4. Deploy!

### Step 8 — Cloudflare Setup

1. [cloudflare.com](https://cloudflare.com) par domain add karo
2. DNS records Cloudflare par point karo
3. SSL/TLS → Full (Strict) mode enable karo
4. Speed → Optimization → Auto Minify enable karo

### Step 9 — GitHub Actions CI/CD

Repository Settings → Secrets mein yeh add karo:

```
VERCEL_TOKEN          (Vercel account settings se)
VERCEL_ORG_ID         (vercel.json ya project settings se)
VERCEL_PROJECT_ID     (Vercel project settings se)
MONGODB_URI
RESEND_API_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_SITE_URL  = https://macropage.in
```

Ab har `main` push par automatic deploy hoga!

---

## Commands

```bash
npm run dev       # Development server start karo
npm run build     # Production build
npm run start     # Production server locally
npm run lint      # ESLint check
```

---

## Customization Guide

### Theme Colors
`src/styles/globals.css` mein `:root` aur `.dark` variables change karo.

### Add New Service
`src/components/sections/ServicesSection.tsx` mein `services` array mein add karo.

### Add New Project
Sanity Studio se add karo — automatically website par show hoga.

### Change Fonts
`src/styles/globals.css` mein Google Fonts import change karo aur `tailwind.config.ts` update karo.

---

## Contact

MacroPage · Aligarh, UP, India  
hello@macropage.in
