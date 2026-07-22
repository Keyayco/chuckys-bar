# Chuckys Bar — Website

An award-caliber, handcrafted website for **Chuckys Bar** (Ferndale, Randburg).
Vanilla **HTML5 · CSS3 · JavaScript (ES6)** — no frameworks, no build step.

## Structure
```
chuckys-bar/
├── index.html         Home
├── about.html         Story
├── menu.html          Full menu
├── events.html        Quiz, DJs, live music, karaoke
├── gallery.html       Photo grid
├── contact.html       Contact + booking + map
├── privacy.html       Privacy policy
├── 404.html           Not found
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── css/styles.css     Design system + all page styles
├── js/main.js         Loader, nav, cursor glow, reveals, parallax, magnetic buttons
└── assets/            Photography
```

## Design system
- Background `#090909` · Surface `#111111`
- Accent `#C89128` · Highlight `#F4C542`
- White `#F7F7F7` · Muted `#999999`
- Display: **Bebas Neue** · Body: **Inter** (Google Fonts)

## Features
- Fullscreen cinematic hero with parallax and warm ambient glow
- Sticky glass navigation with animated logo dot and hover underline
- Mobile hamburger with animated menu reveal
- Cursor glow, magnetic buttons, scroll-reveal animations
- Signature dish showcase with bunny chow legend
- Weekly events grid with mouse-follow highlight
- Editorial masonry gallery
- Auto-highlighted current-day opening hours
- Embedded Google Map
- SEO metadata, Open Graph tags, JSON-LD `BarOrPub` schema
- `robots.txt` + `sitemap.xml`
- Fully responsive (desktop → tablet → mobile)

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
npx serve .
# or
python3 -m http.server
```

## Deploy
Upload the entire folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, shared hosting). No build step required.

---
© Chuckys Bar · Units 3 & 4, Phoenix Centre, Malibongwe Drive, Ferndale, Randburg · +27 82 666 0319
