# FED-HUB / AI Agent Library

A long-form, animated, editorial storefront for a fictional FED-HUB publishing imprint. It is intentionally built as a dependency-free static site so it can be pushed directly to GitHub and published with GitHub Pages.

## What is inside

- `index.html` — the complete storefront experience
- `support.html` — support tab/page with PayPal, GitHub Sponsors, Ko-fi, Buy Me a Coffee, NOWPayments, Stripe, and GitFed newsletter signup
- `support.css` — support page visual system
- `styles.css` — responsive visual system, animated constellation, book covers, motion, and reduced-motion support
- `app.js` — book reader modals, category filters, prompt copy interaction, cursor orb, and scroll reveals
- `books/` — three matching Markdown field books about AI, creativity, and the FED-HUB way of working
- `manus-routes.json` — route manifest for the single-page experience

## Run locally

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Copy the contents of this folder into the repository root.
3. Push to the default branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`.
5. Save. GitHub will serve `index.html` as the landing page.

No build step, package manager, API keys, or backend are required.

## Design notes

FED-HUB uses an editorial / experimental publishing direction: paper texture, oversized Instrument Serif headlines, DM Mono metadata, three acid-soft book covers, a moving constellation, a horizontal principle ticker, modal reading rooms, and a dark ritual card. It is deliberately not a standard SaaS landing page.

The book examples are original sample copy and can be replaced with your own Markdown manuscripts without changing the front-end.


## Access and upload behavior

The interface models the FED-HUB product rule: the AI access agent automatically applies a free or discounted path to every book. The contributor lane is presented as an approved-session upload lane: approved users can upload `.md` manuscripts without a second editorial approval step, while unapproved visitors can browse but cannot upload.

For a production deployment, replace the static `#uploadForm` handler in `app.js` with your authenticated upload endpoint and set `window.FED_HUB_APPROVED_USER = true` from a server-issued approved-user session claim. For a visual approved-session preview, open the page with `?approved=1`; remove that demo path in production.


## Support page

Open `support.html` directly or use the **Support** tab in the main navigation. It includes the supplied Fedpromptly payment and newsletter embeds. Payment actions open third-party checkout flows; no payment details are handled by the static site.


## GitHub promotion kit

The repository now includes `promotional.html`, GitHub Pages workflows, funding metadata, social assets, issue templates, project docs, contact details, and a support footer kit. Payment embeds are age-gated before they are revealed.


## Repository visuals

- `social-image.png` — 1280×640 GitHub social preview
- `social-image.svg` — editable social preview source
- `favicon.svg` — FED-HUB page favicon
- `promotional.html` — neon GitHub promotion page

Check out Muse, your personal AI agent. 
Code: 5F2V31
https://muse.ai/join
