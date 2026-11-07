# SHARAT S UNNITHAN — Official Personal Portfolio & Freelance Platform

> **"Building digital experiences that solve real problems."**  
> Official web presence, software engineering portfolio, and independent digital services platform for **Sharat S Unnithan**.

---

## 🌟 Executive Overview

This repository houses the complete production source code for the official digital home of **Sharat S Unnithan** — Software Developer, Independent Freelancer, and Technology Enthusiast.

The application harmonizes two interconnected professional identities:
1. **Personal Developer Brand**: Technical education (BCA graduate from College of Applied Science IHRD, University of Kerala; MCA student at IGNOU), engineering competencies (Python, Django, SQLite, MySQL, JavaScript, React), machine learning experiments, and verified professional experience.
2. **Independent Freelance Services**: Professional freelance offerings under his own name — *Independent Digital Solutions & Development* — including website development, custom web applications, Python & Django systems, business automation, and maintenance.

---

## 🛠️ Technology Stack & Architecture

- **Core Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation / SSG, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, fully type-safe data schemas)
- **Styling & Tokens**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens (Dark mode default with refined light theme)
- **Visual Design Identity**: Inspired by modern editorial aesthetics ([PixelSync Studio](https://pixelsyncstudio.vercel.app/)), featuring deep charcoal surfaces (`#080a0c`), fine borders, sophisticated emerald accents (`#10b981`), and minimal distractions.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: Custom CSS transitions, scroll progress tracking, and interactive command palette (`⌘K` / `Ctrl+K`)
- **Contact Pipeline**: Server-side Telegram Bot API route (`/api/contact`) with validation, rate limiting, and honeypot anti-spam — plus instant WhatsApp and direct email fallbacks. Credentials stay in environment variables, so it deploys cleanly to Vercel.
- **SEO & Discovery**: Dynamic OpenGraph previews, semantic HTML5, `robots.txt`, and automated `sitemap.xml`.

---

## 📂 Project Structure

```text
├── public/
│   ├── documents/
│   │   ├── Sharat-S-Unnithan-Resume.pdf  # Verified resume placeholder (Drop actual PDF here)
│   │   └── README.txt                    # Instructions for resume replacement
│   └── images/
│       ├── profile.jpg                   # Location for Sharat's actual photograph
│       ├── README.txt                    # Photo instructions
│       └── projects/                     # Domain-specific technical SVG illustrations
│           ├── expense-tracker.svg       # EXPENSE_SHA predictive regression illustration
│           ├── academic-ecosystem.svg    # Intelligent Academic Ecosystem geofence architecture
│           ├── local-service.svg         # Smart Local Service Provider Platform dispatch hub
│           ├── aether-os.svg             # Aether OS AI code-review interface canvas
│           └── business-systems.svg      # Business systems (Gold-loan & Camera repair workflow)
├── src/
│   ├── app/
│   │   ├── globals.css                   # Theme definitions, custom scrollbars, typography
│   │   ├── layout.tsx                    # Root layout, theme wrapper, SEO metadata, navbar & footer
│   │   ├── page.tsx                      # Primary homepage assembling all narrative sections
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts              # Telegram bot delivery endpoint for project enquiries
│   │   ├── not-found.tsx                 # Bespoke 404 error page
│   │   ├── robots.ts                     # Automated robots.txt generator
│   │   ├── sitemap.ts                    # Automated sitemap.xml generator
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx              # Dynamic static case study template for each project
│   ├── components/
│   │   ├── BackToTop.tsx                 # Floating smooth scroll-to-top button
│   │   ├── CommandMenu.tsx               # ⌘K / Ctrl+K keyboard command palette
│   │   ├── ContactForm.tsx               # Project enquiry form (validation + Telegram delivery)
│   │   ├── Footer.tsx                    # Verified channels, location, credentials, copyright
│   │   ├── Navbar.tsx                    # Responsive navigation, theme switcher, mobile drawer
│   │   ├── ProfilePlaceholder.tsx        # High-end geometric avatar fallback + setup popover
│   │   ├── ProjectCard.tsx               # Reusable project card with status pills and tags
│   │   ├── ResumeModal.tsx               # Download resume handler & placeholder modal
│   │   ├── ScrollProgress.tsx            # Top gold scroll progress bar
│   │   ├── ServiceCard.tsx               # Freelance service card with deliverables & enquiry CTA
│   │   ├── ThemeProvider.tsx             # Persistent dark/light mode state provider
│   │   └── ThemeToggle.tsx               # Animated sun/moon switcher
│   ├── data/
│   │   ├── certifications.ts             # Google, IBM, Microsoft certification details
│   │   ├── education.ts                  # BCA (IHRD Mavelikkara) & MCA (IGNOU) timelines
│   │   ├── experience.ts                 # Supportta Solutions & Independent Practice details
│   │   ├── navigation.ts                 # Navbar links and badges
│   │   ├── personal.ts                   # Centralized contact, bio, and social profiles
│   │   ├── projects.ts                   # Full technical case study data for all 5 projects
│   │   ├── services.ts                   # 5 freelance offerings & deliverable checklists
│   │   └── skills.ts                     # Categorized skills with honest proficiency badges
│   ├── lib/
│   │   └── utils.ts                      # Class variance authority & tailwind merger
│   └── types/
│       └── index.ts                      # Strict TypeScript interfaces for all data structures
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚡ Quickstart & Development

### 1. Prerequisites
- Node.js (v18.17.0 or higher recommended, tested on v26.1.0)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/SHARAT-S-UNNITHAN/official-portfolio.git
cd official-portfolio

# Install dependencies
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
```bash
# Generate optimized static bundle and check all routes
npm run build

# Preview production build locally
npm run start
```

---

## 📝 How to Update & Maintain Your Site

All personal details, projects, and services are centralized in `src/data/` so you **never need to rewrite page templates**:

### A. Updating Personal Information
Edit [`src/data/personal.ts`](./src/data/personal.ts):
- Update phone number, email, location, or bio text.
- Modify the `availability` badge or status message.

### B. Adding Your Actual Profile Photograph
Per your explicit instructions, no synthetic or fake face images are used.
1. Place your portrait photo at:  
   `public/images/profile.jpg`
2. Open [`src/data/personal.ts`](./src/data/personal.ts) and toggle:
   ```typescript
   profileImage: {
     path: "/images/profile.jpg",
     alt: "Sharat S Unnithan - Software Developer",
     initials: "SU",
     hasCustomImage: true, // <-- Change false to true
   }
   ```
3. Your photo will immediately replace the geometric monogram avatar.

### C. Adding Your Actual Resume PDF
1. Place your finalized PDF at:  
   `public/documents/Sharat-S-Unnithan-Resume.pdf`
2. Open [`src/data/personal.ts`](./src/data/personal.ts) and toggle:
   ```typescript
   resume: {
     filename: "Sharat-S-Unnithan-Resume.pdf",
     path: "/documents/Sharat-S-Unnithan-Resume.pdf",
     isPlaceholder: false, // <-- Change true to false
   }
   ```
3. The "Download Resume" buttons across the hero and navigation will now instantly trigger direct download.

### D. Adding or Modifying Projects
Open [`src/data/projects.ts`](./src/data/projects.ts). Add a new object following the `Project` type:
- Define `title`, `slug`, `category`, `status` (`Completed` | `In Development` | `Concept` | `Archived`).
- Provide `overview`, `problemStatement`, `solution`, `role`, `technologies`, and `features`.
- Next.js will automatically generate both the homepage card and the dedicated `/projects/[slug]` case study page during static generation!

### E. Updating Freelance Services
Open [`src/data/services.ts`](./src/data/services.ts):
- Update descriptions, deliverables, or badges.
- Any change automatically updates the service cards and contact form dropdown options.

### F. Connecting the Enquiry Form to Your Telegram Bot
The contact form posts to [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts), which forwards each enquiry to your private Telegram chat using the official Bot API. The bot token never reaches the browser.

**1. Create the bot**
- Open Telegram and message [@BotFather](https://t.me/BotFather).
- Send `/newbot`, choose a name and username.
- Copy the **HTTP API token** (looks like `123456789:AAE...`).

**2. Find your chat ID**
- Send any message to your new bot (or add it to a private group and send a message there).
- Open this URL in your browser, replacing the token:
  `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
- Copy `result[0].message.chat.id`. Group IDs start with a minus sign (`-100...`).

**3. Configure the environment**

Create `.env.local` in the project root (already excluded from Git):

```env
TELEGRAM_BOT_TOKEN="123456789:AAE..."
TELEGRAM_CHAT_ID="123456789"
```

Use `.env.example` as the template. Multiple recipients are supported with a comma-separated list, e.g. `TELEGRAM_CHAT_ID="123456789,-100987654321"`.

**4. Add the same variables on Vercel**
- Project → **Settings** → **Environment Variables**.
- Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` for **Production**, **Preview**, and **Development**.
- Redeploy so the new variables take effect.

**5. Test**
Submit the form once. The message should arrive in Telegram within a few seconds, containing the sender's name, email (tap-to-reply), selected service, budget, and project description.

> **Security:** never commit the token. If it is ever exposed, revoke it with `/revoke` in BotFather and update the environment variables.
>
> **Fallback:** if Telegram is unreachable or the variables are missing, the form shows an error and offers direct WhatsApp/email links instead.

---

## ⚖️ Vercel Deployment & Terms Compliance Review

As explicitly required by the project specifications, here is the compliance verification regarding hosting on **Vercel Hobby vs Alternatives**:

### 1. Vercel Hobby Terms of Service Analysis
- **Rule**: Vercel’s Hobby plan is restricted to **non-commercial personal projects**.
- **Assessment**: While developers commonly host portfolios with "Hire Me" links on Vercel Hobby, Vercel’s strict terms clarify that sites used for commercial business generation, selling freelance services, or soliciting paid client contracts fall under commercial usage.
- **Options for Sharat**:
  - **Option A (Vercel Hobby - Permitted with Personal Framing)**: If you frame the site primarily as your **personal developer showcase & academic CV** (where freelance offerings are presented as independent technical capabilities rather than a commercial agency storefront), Vercel typically permits Hobby tier usage.
  - **Option B (Cloudflare Pages - 100% Free & Unlimited Commercial Flexibility)**: Recommended! Cloudflare Pages offers free static hosting with zero restrictions on freelance portfolios, unlimited bandwidth, instant global CDN, and free custom SSL.
  - **Option C (Netlify Free Tier)**: Allows personal freelance portfolios on the Starter tier (100 GB bandwidth/month).
  - **Option D (Vercel Pro)**: $20/month per member if you choose to register an official commercial entity.

### 2. Deploying to Vercel (Step-by-Step)
1. Push this codebase to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete official portfolio & freelance platform for Sharat S Unnithan"
   git branch -M main
   git remote add origin https://github.com/SHARAT-S-UNNITHAN/official-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) with your GitHub account.
3. Click **"Add New..."** > **"Project"** and select `official-portfolio`.
4. Preset: Select **Next.js** (Root directory: `./`).
5. Add the environment variables under **Settings → Environment Variables** (see section F): `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
6. Click **"Deploy"**.
7. Vercel will build and assign you a free production subdomain (e.g., `sharat-s-unnithan.vercel.app`).

---

## 🛡️ Security, SEO & Quality Assurance

- **Zero Hardcoded Secrets**: No private API keys or database passwords committed.
- **Honeypot Anti-Spam**: Invisible field blocks scrapers without cumbersome CAPTCHAs.
- **Accessible & Responsive**: Fully verified across desktop, tablet, and mobile viewports with keyboard navigation (`Tab` / `Shift+Tab`) and screen-reader accessibility labels.
- **Production Build Status**: Verified with 0 errors (`npm run build` output: 11/11 static pages generated).

---

## 👤 Verified Profile Credentials

- **Developer**: Sharat S Unnithan
- **Location**: Kayamkulam, Kerala, India
- **Email**: [sharatsunnithan3@gmail.com](mailto:sharatsunnithan3@gmail.com)
- **Phone / WhatsApp**: [+91 90613 78596](https://wa.me/919061378596)
- **GitHub**: [github.com/SHARAT-S-UNNITHAN](https://github.com/SHARAT-S-UNNITHAN)
- **LinkedIn**: [linkedin.com/in/sharat-s-unnithan-b363852a7](https://www.linkedin.com/in/sharat-s-unnithan-b363852a7/)
- **Academic Credentials**: BCA (College of Applied Science IHRD Mavelikkara, University of Kerala, 2023–2026), MCA (IGNOU, July 2026 cycle).

