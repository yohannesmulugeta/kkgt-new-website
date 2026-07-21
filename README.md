# KKGT New Website

Professional testing website for KKGT Import Export, published directly through GitHub Pages.

## Live website

https://yohannesmulugeta.github.io/kkgt-new-website/

## Published architecture

The active preview is a zero-dependency static single-page website served directly from `main / (root)`. It does not require Vite, React, GSAP, Framer Motion or an application server to run.

- `index.html` — published application shell and testing-safe metadata
- `404.html` — direct-route recovery for GitHub Pages
- `standalone/site.css` — core responsive design system
- `standalone/audit-fixes.css` — final motion, mobile and accessibility refinements
- `standalone/site-loader.js` — one valid browser entry point
- `standalone/site-1.js` to `site-4.js` — page, routing and interaction source modules
- `standalone/image-data-1.js` to `image-data-4.js` — generated local illustrative visuals
- `standalone/images/kkgt-logo.svg` — local vector website logo
- `scripts/verify.mjs` — zero-dependency publication and syntax verification

The earlier React/Vite prototype remains in `src/` as design-development reference, but it is not loaded by the live GitHub Pages preview.

## Generated visual set

The repository includes local generated visuals for:

- Homepage Ethiopian coffee hero
- Company/agricultural operations
- Green coffee export
- Agrochemical distribution
- Coffee farming
- Oilseeds and pulses
- Sustainability and farmer-support storytelling
- Coffee quality inspection
- Contact-page background
- Yirgacheffe, Sidama, Limmu, Lekempti and Djimmah origin storytelling

Every illustrative image is labelled in the interface. These assets are not documentary evidence of a KKGT farm, facility, employee, certificate or completed project.

## Included audit improvements

- Fixed the blank GitHub Pages deployment
- Added a valid single browser entry point for the split static source
- Removed dependence on the old WordPress image server
- Connected generated local visuals correctly
- Reduced page length and removed heavy scroll pinning
- Added lightweight requestAnimationFrame-based hero movement
- Replaced simulated product packaging with neutral catalogue cards
- Removed simulated certificates
- Added a real 404 experience and direct-route recovery
- Added accessible mobile-menu focus trapping, Escape handling and inert background content
- Added keyboard focus styles, skip link and reduced-motion support
- Added active-page `aria-current` state
- Added unique page titles, descriptions, canonical URLs and Open Graph URLs
- Added responsive layouts for desktop, tablet and mobile
- Added searchable agrochemical filters with `aria-pressed` states
- Expanded buyer inquiry fields for country and estimated quantity
- Made the testing contact form open an email draft instead of falsely reporting a submission
- Added testing-safe `robots.txt` and a complete route sitemap
- Removed unused and unpinned deployment dependencies
- Added automated static publication and JavaScript verification

## Verify locally

```bash
npm run check
```

No dependency installation is required.

## Important content status

This remains a testing website. Contact details, company history, coffee specifications, commodity specifications, agrochemical technical information, certification details, leadership information and documentary claims must be confirmed by KKGT before an official production launch.
