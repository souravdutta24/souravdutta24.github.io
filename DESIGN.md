---
name: souravdutta24.github.io
description: Academic homepage for Sourav Dutta — restrained, credential-forward, al-folio-based
colors:
  academic-violet: "#b509ac"
  night-cyan: "#2698ba"
  paper: "#ffffff"
  ink: "#000000"
  ink-black: "#1c1c1d"
  soft-grey: "#e8e8e8"
  muted: "#828282"
  muted-text-light-mode: "#5c5c5c"
  muted-text-dark-mode: "#a8a8a8"
  card-dark: "#212529"
  highlight: "#b71c1c"
typography:
  display:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: normal
  body:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  meta:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  eyebrow:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
  label:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  sm: "2px"
  md: "4px"
  full: "50%"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "3rem"
components:
  button-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.38rem 1.6rem"
  venue-badge:
    backgroundColor: "{colors.academic-violet}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0.25rem 0.5rem"
  nav-link:
    textColor: "{colors.ink}"
  nav-link-hover:
    textColor: "{colors.academic-violet}"
---

# Design System: The Scholar's Desk

## 1. Overview

**Creative North Star: "The Scholar's Desk"**

Nothing on this page performs; everything is load-bearing. The system is built for a single, recurring visitor moment — someone landing from a citation, a conference program, or a referral, scanning quickly for who this person is, what they've published, and how to reach them. Density is low, whitespace is generous, and the one accent color is spent almost entirely on links and interactive state — never on decoration.

This inherits al-folio's stock Bootstrap/MDB foundation nearly unmodified: flat surfaces by default, and Material-derived elevation (`z-depth-*`) used sparingly and only where it has a real job — the profile photo, a publication thumbnail. The system explicitly rejects marketing-site register: no hero sections, no gradient accents, no card-grid feature tiles, no big CTAs. A visitor should never wonder whether they landed on a product or a person's record of work.

One deliberate departure from the original al-folio/MDB default: **Public Sans** replaces Roboto as the site's single typeface, and headings carry real weight (600–700) instead of MDB's stock thin-300 Material look. Roboto was a framework default inherited unmodified, not a chosen brand voice — indistinguishable from any Bootstrap/MDB site — and thin-300 headings gave "display" and "headline" almost no weight contrast against 400 body text. Public Sans (designed for U.S. federal government communications, built for clarity in official documents) reads as credential-forward and authoritative without introducing a second family or any color/decoration — it's still a One-Typeface system, just a more deliberate and more confident one.

**Key Characteristics:**

- One accent color, spent almost entirely on text links and hover/active state.
- Flat by default; shadow appears only where it does real work (photo, thumbnails).
- Single typeface (Public Sans), weight does the hierarchy work, not a font pairing.
- Bootstrap/MDB primitives used close to stock — no custom component language layered on top.

## 2. Colors

A near-monochrome page (black ink on white paper) with a single accent that swaps hue between light and dark mode rather than just inverting lightness.

### Primary

- **Academic Violet** (`#b509ac`): the one accent color in light mode. Used for every link, the active nav-item underline, hover states, and the venue badge (JCP / MCA / SI / …) on each publication. Spent on text and small UI, never as a fill or background.
- **Night Cyan** (`#2698ba`): the same accent role in dark mode. Not a darkened Academic Violet — a genuinely different hue swap, so the accent stays legible and distinct against the dark-mode ink-black background.

### Neutral

- **Paper** (`#ffffff`): light-mode background.
- **Ink** (`#000000`): light-mode body text.
- **Ink Black** (`#1c1c1d`): dark-mode background; also the light-mode footer background (the footer is a deliberate tonal inversion of the page).
- **Soft Grey** (`#e8e8e8`): dark-mode body text; also the dark-mode footer background (inverse of Ink Black, mirroring the light-mode footer inversion).
- **Muted** (`#828282`): the shared base gray — feeds the footer/distill-app-color roles and the dark-mode body-text tint (`$grey-color-light`, lightness+40%), but is **not** used directly for muted *text*: at 3.84:1 on white and ~4.4:1 on Ink Black it fails WCAG AA for body-size text (4.5:1). Muted text uses two derived shades instead (see below).
- **Muted Text — Light Mode** (`#5c5c5c`, `$muted-text-color-light` = Muted darkened 15%): secondary/de-emphasized text in light mode — institution names under a degree, post-meta/post-tags, the contact note under the social icons. ~6.7:1 on Paper.
- **Muted Text — Dark Mode** (`#a8a8a8`, `$muted-text-color-dark` = Muted lightened 15%): the same role in dark mode. ~7:1 on Ink Black.
- **Card Dark** (`#212529`): dark-mode surface for card-shaped containers.

### Named Rules

**The One Accent Rule.** Exactly one non-neutral color is live on the page at any time (Academic Violet or Night Cyan, never both). It marks interactivity — links, hover, active nav — and nothing else. Category badges, buttons, and borders stay neutral.

## 3. Typography

**Body Font:** Public Sans (weights 400–700, italic 400), loaded via Google Fonts (`_config.yml`'s `google_fonts.url.fonts`), with a system sans-serif fallback (`-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`) applied via `--global-font-family` in `_sass/_base.scss`.

**Character:** One typeface carries the whole page. Hierarchy is built entirely from weight and size, not from a display/body pairing. Public Sans was chosen over Roboto (the inherited MDB/Bootstrap default) because it's designed for clarity in official/institutional documents — it reads as credential-forward and authoritative rather than as generic SaaS/startup type, without breaking the single-family system. Roboto and Roboto Slab are no longer loaded.

### Hierarchy

- **Display** (weight 700, `clamp(2rem, 1.6rem + 1.8vw, 2.75rem)`, line-height 1.2, letter-spacing -0.01em): the name/title at the top of the About page (`<h1 class="post-title">`). Fluid per brand-register convention; bounded to a 1.375× min/max ratio so it never "shouts."
- **Headline** (weight 600, 2rem, line-height 1.25): section headings — News, Selected Publications (`.page-section-heading`).
- **Body** (weight 400, 1rem, line-height 1.5): bio prose, publication metadata, news items. Kept close to Bootstrap's 65–75ch comfortable measure inside the `.clearfix` content column.
- **Meta** (weight 400, 0.875rem, line-height 1.4): secondary/de-emphasized prose — post-meta, post-tags, post-description, CV secondary lines. Formalizes a size that was already repeated ad hoc across the codebase.
- **Eyebrow** (weight 700, 0.875rem, uppercase, letter-spacing 0.05em): the Education/Interests micro-headings (`.section-subheading`). Shares Meta's size, differentiated by weight/case/tracking rather than a one-off size (was 0.95rem, an undocumented outlier).
- **Label** (weight 500, 0.75rem, letter-spacing 0.02em): venue badges, button text (uppercase, per Bootstrap's `.btn` default), institution captions under a degree.

### Named Rules

**The One-Typeface Rule.** Every weight on the page is Public Sans. If a new component needs a second typeface to feel distinct, that's a sign it doesn't belong on this page.

**The Weight-Carries-Authority Rule.** Display and Headline are set in 700/600, not a thin Material-style 300 — a deliberate correction from the original MDB default, which gave headings almost no weight contrast against 400 body text. Confidence comes from weight, not from color or size alone.

## 4. Elevation

Flat by default. Shadow is structural, not ambient — it appears only on the two places where a raised surface has a real physical read: the circular profile photo and publication preview thumbnails. Everywhere else (buttons, badges, nav, cards) is explicitly flattened.

### Shadow Vocabulary

- **z-depth-1** (`box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)`): the profile photo and publication preview images. The only two elements allowed to visually lift off the page.
- **z-depth-0** (`box-shadow: none`): explicitly applied to publication link buttons (DOI / arXiv / Code) to override MDB's default button shadow. The flattening is deliberate, not an oversight.

### Named Rules

**The Flat-By-Default Rule.** MDB's Material components ship a shadow by default; this system turns it off everywhere except the photo and thumbnails. If a new button or card looks "lifted," it's wrong — flatten it with `z-depth-0`.

## 5. Components

### Buttons

- **Shape:** 2px radius (`.125rem`), from MDB's stock `.btn`.
- **Publication link buttons** (DOI / arXiv / Code / Poster / …): `.btn .btn-sm .z-depth-0` — small (padding `0.38rem 1.6rem`, `0.64rem` uppercase text), no shadow, no color fill; sits flush against the page background. Several sit in a row under each publication entry.
- **Hover / Focus:** underline + Academic Violet/Night Cyan text, matching link treatment — buttons read as styled links, not filled CTAs.

### Badges

- **Venue badge** (abbr, e.g. "JCP", "MCA"): `.badge.rounded.w-100` — fills the width of its column, 4px radius, sits to the left of a publication's title/authors/venue block. The one place a filled-color background is acceptable, since it's functioning as a category tag, not a call-to-action.

### Cards / Containers

- **Corner Style:** 4px radius (`.25rem`), Bootstrap default.
- **Border:** 1px solid `rgba(0,0,0,.125)` in light mode.
- **Background:** Paper in light mode, Card Dark in dark mode.
- **Shadow Strategy:** none by default (see Elevation) — cards read as content groupings, not raised panels.

### Navigation

- **Style:** fixed-top, single row, right-aligned links (about / publications / experience), a `ctrl k` search trigger, and a light/dark toggle. Text-only — no button chrome on nav items.
- **Active/hover:** Academic Violet or Night Cyan text, no background pill or underline-on-rest — the color change alone signals state.
- **Mobile:** collapses to a hamburger toggle (Bootstrap navbar-toggler) at the same fixed-top position.

### News List (signature component)

A borderless table (`table-sm table-borderless`), not a card list — each row is a date (left column, 20% width) and an announcement (right column, may contain inline links). On the About page it's capped at a fixed height (`320px`) with `overflow-y: auto` once there are more than 3 items; the full, uncapped list lives at `/news/`. No dividers between rows, no shadow, no card wrapper — it reads as a dense reading list, not a UI widget.

## 6. Do's and Don'ts

### Do:

- **Do** spend the single accent color (Academic Violet / Night Cyan) on links, hover, and active nav state only.
- **Do** keep buttons flat (`z-depth-0`) — they should read as styled text links, not filled CTAs.
- **Do** let weight (700 display, 600 headline, 400 body, 500 label) carry hierarchy inside the single Public Sans family.
- **Do** use the Muted Text tokens (`$muted-text-color-light` / `$muted-text-color-dark`), not the raw `$grey-color`/`Muted`, for any new de-emphasized text — the raw value fails WCAG AA at body size.
- **Do** reserve shadow (`z-depth-1`) for the profile photo and publication thumbnails only.

### Don't:

- **Don't** add a second display typeface. A single well-weighted Public Sans family carries the whole page — reach for weight/size/spacing before reaching for a second font.
- **Don't** introduce hero sections, gradient accents, card-grid feature tiles, or marketing-style CTAs — this is a research record, not a product landing page (per PRODUCT.md's anti-references).
- **Don't** fill buttons or cards with the accent color as a background; the One Accent Rule reserves it for text/interactive state.
- **Don't** add drop shadows to nav, buttons, or badges "for depth" — flat is the deliberate default; shadow is earned, not ambient.
