# Joel in Action (JIA) — Official Website

> **Live site:** [joelinaction.tech](https://joelinaction.tech)

A fully custom, multi-page website for **Joel in Action (JIA)** — a Zanzibar-based ICT consultancy delivering software development, network infrastructure, digital systems, and graphics design across East Africa and beyond.

---

## 🖥️ Preview

| Page | Description |
|---|---|
| `index.html` | Homepage — hero, services overview, process, stats |
| `about.html` | Company story, values, skills & tech stack |
| `solutions.html` | Deep-dive into Software Dev, Network & Digital Systems |
| `services.html` | Full service catalogue + engagement models |
| `portfolio.html` | Filterable project showcase |
| `contact.html` | Contact form + FAQ |

---

## ⚡ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no frameworks, no build step required
- **Fonts** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) via Google Fonts

**Zero dependencies. No npm. No bundler. Just drop and deploy.**

---

## 🎨 Design

- **Theme:** Cyber blue + electric green on near-black
- **Style:** Dark, professional tech aesthetic with medium-intensity glow effects
- **Fully responsive** — mobile, tablet, desktop
- **Animations:** Scroll-reveal, counter animation, sticky nav on scroll

---

## 📁 File Structure

```
joelinaction/
├── index.html          # Homepage
├── about.html          # About page
├── solutions.html      # Solutions page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── style.css           # Global stylesheet (all pages)
├── main.js             # Nav scroll, reveal animations, contact form
├── components.js       # Shared nav + footer (injected into every page)
└── README.md
```

---

## 🚀 Deployment

### Option 1 — Static hosting (recommended)
Upload all files to any static host:
- [Netlify](https://netlify.com) — drag and drop the folder
- [Vercel](https://vercel.com) — `vercel deploy`
- [GitHub Pages](https://pages.github.com) — enable in repo settings
- Any cPanel / file manager hosting

### Option 2 — GitHub Pages (this repo)
1. Go to **Settings → Pages**
2. Set source to `main` branch, `/ (root)`
3. Your site will be live at `https://<username>.github.io/<repo-name>`

### Option 3 — Custom domain
Point your domain's DNS to your host, upload files to the public root directory.

> No build step required — the site works as plain static files out of the box.

---

## ✏️ Customisation

### Update contact details
Edit `components.js` — the footer email, phone, and location are defined there and shared across all pages.

### Change colours
All colours are CSS variables at the top of `style.css`:

```css
:root {
  --navy:    #050d12;   /* Background */
  --accent:  #00f0a0;  /* Electric green — primary accent */
  --blue:    #0af;     /* Cyber blue — glow + gradients */
}
```

### Add a portfolio project
In `portfolio.html`, copy any `.portfolio-card` block and update the emoji, title, tags, description, and `data-cat` attribute (`web`, `network`, `systems`, or `design`).

### Add/remove nav links
Edit the `NAV_HTML` and `FOOTER_HTML` strings in `components.js` — changes apply to all pages automatically.

---

## 📬 Contact

| Channel | Details |
|---|---|
| Email | [info@joelinaction.tech](mailto:info@joelinaction.tech) |
| Phone / WhatsApp | +255 773 013 475 |
| GitHub | [@pyjoek](https://github.com/pyjoek) |
| Location | Zanzibar, Tanzania |

---

## 📄 License

© 2025 Joel in Action (JIA). All rights reserved.

This repository is for the official JIA website. Please do not redistribute or use this design commercially without permission.