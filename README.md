# HEALIX — Modern Healthcare Ecosystem Website

> **"Better Health Begins Here."**

A premium, production-ready corporate showcase and portfolio website for **HEALIX** — a modern healthcare ecosystem connecting **Pharmacy**, **Laboratory Diagnostics**, and **Clinical Care** through a trusted, human-centered experience.

---

## 1. Project Identity & Purpose

Healix is intentionally a **portfolio / brand showcase website**. It presents the Healix vision, service capabilities, case studies, and healthcare insights.

### Included in Version 1:
- Brand presentation & Healix X visual identity system
- Pharmacy showcase (advisory care, safety protocols, wellness supplies)
- Laboratory & Diagnostics showcase (ISO quality standards, clear biomarker reports)
- Clinics showcase (primary family care, unhurried consultations)
- Healthcare ecosystem storytelling & 3-step care journey
- Interactive Portfolio / Case Studies with category filtering
- Health & Wellness Insights magazine with structured takeaways
- Contact inquiry form with client/server Zod validation & anti-spam honeypot
- Dynamic Sitemap (`/sitemap.xml`) & Robots (`/robots.txt`)
- JSON-LD Structured Data for search engines
- Responsive design across mobile (320px+), tablet, and desktop (1920px+)
- Accessibility (WCAG compliant keyboard focus, skip-to-content link, `prefers-reduced-motion` support)

### Strictly Excluded in Version 1:
- Shopping cart or medicine checkout
- Prescription uploads or purchasing
- Patient accounts or electronic health records (EHR)
- Real appointment booking
- Fake doctor profiles, testimonials, awards, or medical claims

The application architecture is modular and extensible, allowing future integration of real CMS backends, patient portals, and e-commerce modules when required.

---

## 2. Technology Stack

- **Framework**: Next.js 15 (App Router with Server Components & TypeScript)
- **Styling**: Vanilla CSS tokens & Tailwind CSS v4
- **Typography**: Manrope (Primary Sans-Serif) & Inter (Fallback)
- **Animation**: Framer Motion 12 (with `prefers-reduced-motion` checks)
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form, Zod, `@hookform/resolvers`

---

## 3. Brand & Design Tokens

Logo colors and brand palette:
- **Primary Healix Green**: `#075A46`
- **Secondary Healix Green**: `#0E745B`
- **Healix Lime Accent**: `#94D126`
- **Soft Background**: `#F5FAF7`
- **Pale Green Accent**: `#E8F4EE`
- **Dark Text**: `#10231E`
- **Border**: `#DCEAE4`

---

## 4. Routes Overview

| Route | Page Purpose |
|---|---|
| `/` | Storytelling Homepage (15 complete sections) |
| `/about` | Brand Mission, Vision, Philosophy, Values & Future |
| `/services` | Ecosystem Overview, Value Props & Synergy |
| `/pharmacy` | Pharmacy Pillar Showcase (Advisory & Safety) |
| `/laboratory` | Laboratory Diagnostics Showcase (Testing Clarity) |
| `/clinics` | Clinical Care Showcase (Human-centered Care) |
| `/portfolio` | Interactive Gallery with Category Filters |
| `/portfolio/[slug]` | Detailed Case Study & Status Disclaimers |
| `/insights` | Health Journal with Category Filters |
| `/insights/[slug]` | Article View, Key Takeaways & Content Advisory |
| `/contact` | Inquiry Form & Contact Details |
| `/api/contact` | Server-Side Validation & Anti-Spam API |
| `/privacy` | Data Governance & Privacy Policy |
| `/terms` | Terms & Conditions |
| `/not-found` | Branded 404 Error Page |

---

## 5. Getting Started

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build & Launch
```bash
npm run build
npm run start
```

---

## 6. Environment Variables

Create `.env.local` based on `.env.example`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Healix

NEXT_PUBLIC_CONTACT_EMAIL=contact@healix.health
NEXT_PUBLIC_CONTACT_PHONE=+1 (800) 555-HEALIX

NEXT_PUBLIC_GA_ID=
RESEND_API_KEY=
```

---

## 7. Folder Structure

```text
healix-website/
├── app/
│   ├── about/
│   ├── services/
│   ├── pharmacy/
│   ├── laboratory/
│   ├── clinics/
│   ├── portfolio/
│   │   └── [slug]/
│   ├── insights/
│   │   └── [slug]/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   ├── api/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── cards/
│   ├── forms/
│   ├── insights/
│   ├── layout/
│   ├── navigation/
│   ├── portfolio/
│   └── ui/
├── data/
│   ├── articles.ts
│   ├── projects.ts
│   └── services.ts
├── public/
│   └── logo/
└── README.md
```

---

## 8. Deployment

This project is fully ready for deployment on **Vercel**:
1. Push repository to GitHub/GitLab.
2. Import project into Vercel.
3. Configure `NEXT_PUBLIC_SITE_URL` in environment variables.
4. Deploy!
