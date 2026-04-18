# The Brother's Gym Website

Static multi-page website for The Brother's Gym in Darbhanga.

## Pages

- `index.html`
- `about.html`
- `pricing.html`
- `contact.html`

## Notes

- Shared sections are loaded dynamically from `components/`.
- Public business details used here are based on the available listing data for address, timings, map coordinates, photos, and review metadata.
- To activate real call and WhatsApp buttons, update `phoneRaw`, `whatsappRaw`, and `phoneDisplay` inside `assets/js/main.js`.
- Canonical URLs are now set as root-relative paths so the site is safer to deploy directly on Netlify without placeholder-domain SEO issues.
- After your first live Netlify URL is final, you can optionally generate a domain-specific `sitemap.xml` using that final domain.

## Run

Open `index.html` in a browser or serve the folder with any static server.
