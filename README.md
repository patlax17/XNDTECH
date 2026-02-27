# XNDR Technology — Agency Website

> Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deploy-ready for Vercel.

---

## 🚀 Quick Start

```bash
cd xndr-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂 Project Structure

```
xndr-site/
├── public/
│   └── images/
│       └── logo.png          ← Replace with your actual logo
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Home page (/)
│   │   ├── work/page.tsx      ← Portfolio page (/work)
│   │   ├── pricing/page.tsx   ← Pricing page (/pricing)
│   │   ├── contact/page.tsx   ← Contact page (/contact)
│   │   ├── layout.tsx         ← Root layout (fonts + SEO)
│   │   └── globals.css        ← Global styles + utilities
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── home/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Process.tsx
│   │       ├── FeaturedWork.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       └── HomeCTA.tsx
│   └── data/
│       └── projects.ts        ← ✏️ Edit your portfolio here
```

---

## ✏️ How to Edit Portfolio Projects

Open `src/data/projects.ts`. Each project follows this shape:

```ts
{
  slug: "my-project",           // Unique ID (URL-safe)
  title: "Client Name — Site",  // Displayed as card title
  description: "Short blurb",   // 1–2 sentences
  tags: ["Landing Page", "SEO"], // Used for filter buttons
  liveUrl: "https://...",        // 🔗 Real URL (shown as "Live Site" button)
  repoUrl: "https://github.com/...", // 🔗 GitHub URL (set "" to hide button)
  year: 2025,
  // image: "/images/my-project.png", // Optional: uncomment & add real image
}
```

**To add a new project:**
1. Copy an existing entry in the array
2. Fill in your real data
3. Add a thumbnail (optional):
   - Save image to `public/images/your-image.png`
   - Set `image: "/images/your-image.png"` in the project object

---

## 🔗 Replace All Placeholder URLs

Search for `// 🔗 REPLACE` throughout the codebase. Key spots:

| File | What to Replace |
|------|-----------------|
| `src/components/Navbar.tsx` | Calendly booking link |
| `src/components/Footer.tsx` | Calendly link + social URLs |
| `src/components/home/Hero.tsx` | Calendly link |
| `src/components/home/Process.tsx` | Calendly link |
| `src/components/home/HomeCTA.tsx` | Calendly link |
| `src/app/pricing/page.tsx` | Calendly links (x3) |
| `src/app/contact/page.tsx` | Calendly link + social URLs |
| `src/components/ContactForm.tsx` | Formspree URL + email address |

**Quick global search:**
```bash
grep -r "🔗 REPLACE" src/
```

---

## 📬 Setting Up the Contact Form (Formspree)

1. Go to [https://formspree.io](https://formspree.io) and create a **free account**
2. Click **New Form** → give it a name → copy the **Form Endpoint URL**
   - It looks like: `https://formspree.io/f/xabcdefg`
3. Open `src/components/ContactForm.tsx`
4. Replace `FORMSPREE_URL` at the top with your real URL

The form will now send submissions directly to your email — no backend needed.

---

## ☁️ Deploying to Vercel

1. **Push to GitHub** (create a new private repo):
   ```bash
   cd xndr-site
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/xndr-site.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) → **Add New Project**
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy** — done!

3. **Add custom domain:**
   - In Vercel dashboard → your project → **Settings → Domains**
   - Add your domain (e.g. `xndrtechnology.com`)
   - Follow the DNS instructions (add a CNAME or A record at your registrar)

---

## 🎨 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | `#5B7FFF` | Primary accent, CTAs |
| `brand-bg` | `#0A0B0F` | Dark background |
| `brand-surface` | `#111318` | Card/section backgrounds |
| `brand-border` | `#1E2330` | Borders |
| `brand-text` | `#E8EAF0` | Primary text |
| `brand-muted` | `#6B7280` | Secondary/placeholder text |

Change colors in `tailwind.config.ts` → `theme.extend.colors.brand`.

---

## 📦 Tech Stack

- **[Next.js 14](https://nextjs.org)** — App Router, server components, metadata API
- **[TypeScript](https://typescriptlang.org)** — Type-safe data and components
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first styling
- **[Formspree](https://formspree.io)** — No-backend contact form
- **[Vercel](https://vercel.com)** — Zero-config deployment

---

## 📄 License

Private project — XNDR Technology. All rights reserved.
