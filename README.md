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
- Pricing cards are now managed from `data/pricing.json`.
- Transformation gallery items are now managed from `data/transformations.json`.
- Canonical URLs are now set as root-relative paths so the site is safer to deploy directly on Netlify without placeholder-domain SEO issues.
- After your first live Netlify URL is final, you can optionally generate a domain-specific `sitemap.xml` using that final domain.

## Editing content

- To edit pricing, open `data/pricing.json`.
- To add a pricing plan, duplicate one object in `data/pricing.json` and update its text, price, bullets, and CTA.
- To remove a pricing plan, delete its object from `data/pricing.json`.
- `showOnHome` controls whether the plan also appears on the home page preview.
- `featured: true` highlights a pricing card visually.

- To add a transformation photo, place the image file in `assets/images/transformations/` and add a new object to `data/transformations.json`.
- To edit a transformation item, update its `image`, `alt`, or `caption` fields in `data/transformations.json`.
- To remove a transformation item, delete its object from `data/transformations.json` and optionally remove the unused image file.
- Both pricing and transformation files support separate `en` and `hi` text, so you can keep both languages in sync from one place.

## Run

Open `index.html` in a browser or serve the folder with any static server.
