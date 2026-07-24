# Profile social list + standalone CV page

## Goal

Replace the icon-only social row under the About-page profile photo with a
vertical "icon + text" list (Email, GitHub, LinkedIn, Google Scholar),
modeled after https://aniruddhabora.github.io/. Shrink the profile photo to
make clean room for the list. Move the CV off the social-icon row entirely
and onto its own nav-linked page that embeds the PDF.

## Non-goals

- No change to the navbar's own social icons (`_includes/header.liquid`) —
  `site.enable_navbar_social` is already `false`, so this is moot in
  practice, but the header include itself is untouched.
- No change to which platforms are tracked in `_data/socials.yml` beyond
  removing `cv_pdf` — no new platforms (e.g. ORCID) are added, even though
  the reference site has more; user asked for exactly these four.
- Not reviving the old standalone `layout: cv` page/sidebar-TOC
  architecture described in `CLAUDE.md`'s "Known loose ends" — the new CV
  page is a plain `layout: page` page that embeds the PDF, nothing more.

## Data changes

`_data/socials.yml`: remove the `cv_pdf` key. Remaining keys are
`email`, `github_username`, `linkedin_username`, `scholar_userid` — these
match the exact literal key names the vendored `jekyll-socials` gem
requires (see commit `89e59a0`), so leave their spelling untouched.

## New include: `_includes/profile_socials.liquid`

Renders exactly 4 rows, in this fixed order: Email, GitHub, LinkedIn,
Google Scholar. Reads values from `site.data.socials` but does **not** call
the `{% social_links %}` plugin tag — the plugin only emits a bare
`<a title="...">` with no visible text node, and the auto-generated title
text (derived from the yml key, e.g. "Github username") isn't a clean
label. Instead this include hardcodes the 4 rows with:

- icon markup using the same icon classes the plugin itself uses, so
  visuals stay consistent with the rest of the site's icon usage:
  - Email: `<i class="fa-solid fa-envelope"></i>`
  - GitHub: `<i class="fa-brands fa-github"></i>`
  - LinkedIn: `<i class="fa-brands fa-linkedin"></i>`
  - Google Scholar: `<i class="ai ai-google-scholar"></i>` (academicons,
    already loaded via `assets/css/academicons.min.css` in
    `_includes/head.liquid`)
- a visible `<span>` text label ("Email", "GitHub", "LinkedIn", "Google
  Scholar")
- an `href` built the same way the plugin builds it for these platforms:
  - Email: `mailto:{{ site.data.socials.email }}`
  - GitHub: `https://github.com/{{ site.data.socials.github_username }}`
  - LinkedIn: `https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}`
  - Google Scholar: `https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}`

Each row is one `<a>` wrapping both the icon and the label, so the whole
row is clickable, not just the icon.

## Layout change: `_layouts/about.liquid`

Inside the existing `{% if page.social %}` block, replace
`<div class="contact-icons">{% social_links %}</div>` with
`<div class="contact-list">{% include profile_socials.liquid %}</div>`.
The `.contact-note` div below it (rendering `site.contact_note`) is
unchanged.

## Styling: `_sass/_base.scss`

Within the existing `.profile` / `.social` block (around line 206–247):

- **Photo**: cap the profile image to a fixed max-width (~160px),
  centered, replacing the current full-column (`width: 100%` of the ~30%
  column) sizing. Applies to both circular and non-circular variants.
- **List**: new `.contact-list` styles — vertical flex column, each row
  (`.contact-list-item` or similar) is icon + label with a small fixed-width
  icon column so labels align, comfortable row gap (~0.5–0.75rem), link
  color inherits body text color by default and switches to
  `var(--global-hover-color)` on hover, matching the hover convention used
  elsewhere in `_base.scss` (e.g. `.post-description a:hover`).
- The old `.contact-icons` rule (font-size 2rem, icon-only sizing) is
  removed since nothing references that class anymore after the layout
  change.

## New page: `_pages/cv.md`

```yaml
---
layout: page
title: cv
permalink: /cv/
nav: true
nav_order: 3
---
```

Nav order 3 places it after Publications (nav_order 2), before the
search/dark-mode toggle. Body contains:

- An `<iframe>` pointing at `/assets/pdf/CV.pdf` (via `relative_url`),
  responsive width (100%) and a fixed-ish height (~80vh) so it's usable
  without a separate CV layout/CSS file.
- A plain "Download CV" link below the iframe as a fallback for
  mobile/browsers that render embedded PDFs poorly.

No new SCSS partial is needed for this page — it can lean on existing
`.post` / `.container` spacing from `_layouts/page.liquid`.

## Testing

- `bundle exec jekyll build` to catch template errors.
- `bundle exec jekyll serve` and visually check in browser:
  - About page: photo size, list renders 4 rows with correct icons/labels/
    links, light + dark mode, mobile-width breakpoint (list shouldn't
    wrap awkwardly).
  - `/cv/`: nav tab appears in the right position, PDF loads in the
    iframe, download link works.
