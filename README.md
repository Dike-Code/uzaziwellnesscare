# Uzazi Wellness Care — Website

Static HTML/CSS/JS site for **uzaziwellnesscare.com**. Designed for direct upload to any static host (Hostinger, Netlify, Vercel, S3, GitHub Pages, etc.). No build step required.

---

## Site Map (22 pages)

```
/                                          Home
/about/                                    About Us
/services/                                 Services overview
/services/prenatal-pregnancy-care/         Prenatal Care
/services/birth-preparation/               Birth Preparation
/services/postnatal-recovery/              Postnatal Recovery
/services/infant-feeding-lactation/        Infant Feeding & Lactation
/services/mental-health/                   Mental Health
/services/maternal-nutrition/              Maternal Nutrition
/services/womens-wellness/                 Women's Wellness
/care-packages/                            Care Packages
/mamas-corner/                             Mama's Corner community hub
/mamas-corner/blog/                        Blog index
/mamas-corner/blog/fourth-trimester/       Article: The fourth trimester
/mamas-corner/blog/when-feelings-wont-lift/ Article: Mental health
/mamas-corner/blog/judgment-free-feeding/  Article: Feeding
/mamas-corner/blog/birth-plan-that-bends/  Article: Birth prep
/mamas-corner/blog/rest-is-not-a-reward/   Article: Rest
/mamas-corner/blog/for-partners-how-to-show-up/ Article: Partners
/contact/                                  Contact
/privacy-policy/                           Privacy Policy
/terms-of-service/                         Terms of Service
```

---

## Tech Stack

- **Pure HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no npm
- **Fonts**: Loaded from Fontshare CDN (Zodiak serif + General Sans)
- **Icons**: Inline SVG (no external icon library)
- **Forms**: Use `mailto:info@uzaziwellnesscare.com` as a fallback — see "Forms" section below to upgrade
- **Theme**: Light/dark mode toggle persisted in localStorage (`app.js`)

---

## Deployment Instructions

### Option 1: Hostinger (or any cPanel host)

1. Connect to the hosting account via File Manager or FTP
2. Navigate to `public_html/` (or the document root for uzaziwellnesscare.com)
3. **Delete or back up** any existing files in that folder
4. Upload **all contents** of this folder (not the folder itself) — preserve the directory structure exactly
5. Verify `index.html` is at the root and the site loads at https://uzaziwellnesscare.com

### Option 2: Netlify / Vercel / Cloudflare Pages

- Drag-and-drop deploy: drop this folder onto the dashboard
- Or connect via Git: push these files to a repo, point the host at the repo root
- No build command needed — set output directory to `/`

### Option 3: AWS S3 + CloudFront

- Upload all files to an S3 bucket configured for static website hosting
- Set `index.html` as the index document
- Use CloudFront in front for HTTPS + caching
- Configure DNS to point uzaziwellnesscare.com → CloudFront

### File hosting requirements

- Server must serve `.html` files with `Content-Type: text/html`
- All internal links use **explicit `index.html`** paths (e.g. `/about/index.html`) so the site works on hosts that don't auto-serve directory indexes. Most hosts handle either format fine.

---

## Forms — IMPORTANT

The contact form (`/contact/`) and newsletter form (`/mamas-corner/`) currently use **`mailto:` actions** as a graceful fallback. When a visitor submits, their email client opens with the form data pre-filled, addressed to `info@uzaziwellnesscare.com`.

**This works but isn't ideal for production.** Recommended upgrades:

### Recommended: Connect to a form backend

Replace the `<form action="mailto:...">` attributes with one of these:

- **Formspree** (easiest, free tier): change action to `https://formspree.io/f/YOUR_FORM_ID`
- **Netlify Forms** (if hosting on Netlify): add `data-netlify="true"` to the form tag
- **EmailJS** (client-side): integrate JS SDK
- **Custom backend**: PHP `mail()`, Node endpoint, etc., posting to `info@uzaziwellnesscare.com`

The success message containers (`#contact-success`, etc.) are already wired and will continue to work after swapping the backend.

### Newsletter integration (later)

The newsletter form is currently mailto-based. When ready to scale, connect it to **Mailchimp**, **Buttondown**, **ConvertKit**, or similar — replace the form `action` URL with the provider's signup endpoint.

---

## Pending Updates (waiting on client)

- **Phone number** — to be added to footer + Contact page
- **WhatsApp number** — to be added as a click-to-chat button (suggest top banner + Contact page CTA)

When you receive these, search the codebase for the comment markers or just add the phone/WhatsApp into:
- `contact/index.html` → "Reach us directly" card
- All footers → next to the email line in the "About" column
- Optional floating WhatsApp button: add to `app.js` or include as inline script in `index.html`

---

## Brand & Design Tokens

All colors, typography, and spacing live in CSS variables at the top of `style.css` (`:root` and `[data-theme="dark"]` blocks). Edit there to retheme the entire site.

- **Primary green (Uzazi)**: `--primary: #0F3431`
- **Accent terracotta**: `--accent` / `--accent-strong`
- **Sage**: used in gradients and quote borders
- **Body font**: General Sans (Fontshare)
- **Display/headings**: Zodiak serif (Fontshare)

---

## Social Links

Configured in every footer:
- **Instagram**: https://www.instagram.com/uzaziwellnesscare
- **Facebook**: https://www.facebook.com/share/1BCBESFna3/

To update, search-and-replace these URLs across all `*.html` files (they appear identically in 22 footers).

---

## Service Coverage

Sections on the homepage and Contact page advertise care delivered **across Kenya** — Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, Naivasha, Thika, Karen, Kiambu and surrounding areas. Edit `index.html` (`.service-area-band` section) and `contact/index.html` (Where we serve card) when adding/removing cities.

---

## Browser Support

Tested on modern Chrome, Safari, Firefox, Edge. Requires:
- CSS custom properties
- `aspect-ratio` (Safari 15+)
- ES6 (used in `app.js`)

No IE11 support.

---

## Asset Inventory

- `assets/logo-full.png`, `logo-full-light.png`, `logo-mark.png` — brand logos
- `assets/favicon-32.png`, `favicon-64.png`, `favicon-180.png` — favicons + Apple touch icon
- `assets/photos/` — 13 branded service & team photos
- `assets/photos/blog/` — 6 article cover photos

All photos are AI-generated for brand consistency. Replace with real photography when available — keep filenames identical for zero code changes.

---

## Contact

Site owner: Uzazi Wellness Care · info@uzaziwellnesscare.com
