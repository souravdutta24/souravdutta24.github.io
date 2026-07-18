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
  card-dark: "#212529"
  highlight: "#b71c1c"
typography:
  display:
    fontFamily: "Roboto, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: normal
  headline:
    fontFamily: "Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: normal
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  label:
    fontFamily: "Roboto, sans-serif"
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

This inherits al-folio's stock Bootstrap/MDB foundation nearly unmodified: a single sans typeface (Roboto) at light weight for headings, flat surfaces by default, and Material-derived elevation (`z-depth-*`) used sparingly and only where it has a real job — the profile photo, a publication thumbnail. The system explicitly rejects marketing-site register: no hero sections, no gradient accents, no card-grid feature tiles, no big CTAs. A visitor should never wonder whether they landed on a product or a person's record of work.

**Key Characteristics:**

- One accent color, spent almost entirely on text links and hover/active state.
- Flat by default; shadow appears only where it does real work (photo, thumbnails).
- Single typeface (Roboto), weight does the hierarchy work, not a font pairing.
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
- **Muted** (`#828282`): secondary/de-emphasized text in both modes — institution names under a degree, the contact note under the social icons, timestamps.
- **Card Dark** (`#212529`): dark-mode surface for card-shaped containers.

### Named Rules

**The One Accent Rule.** Exactly one non-neutral color is live on the page at any time (Academic Violet or Night Cyan, never both). It marks interactivity — links, hover, active nav — and nothing else. Category badges, buttons, and borders stay neutral.

## 3. Typography

**Body Font:** Roboto (weights 300–700), with a system sans-serif fallback.

**Character:** One typeface carries the whole page. Hierarchy is built entirely from weight and size, not from a display/body pairing — Roboto Slab is loaded (Google Fonts) but not actually applied anywhere; treat it as unused, don't reach for it.

### Hierarchy

- **Display** (weight 300, 2.5rem, line-height 1.2): the name/title at the top of the About page (`<h1 class="post-title">`).
- **Headline** (weight 300, 2rem, line-height 1.25): section headings — News, Selected Publications.
- **Body** (weight 400, 1rem, line-height 1.5): bio prose, publication metadata, news items. Kept close to Bootstrap's 65–75ch comfortable measure inside the `.clearfix` content column.
- **Label** (weight 500, 0.75rem, letter-spacing 0.02em): venue badges, button text (uppercase, per Bootstrap's `.btn` default), the Education/Interests subheadings (0.95rem, weight 700, uppercase).

### Named Rules

**The One-Typeface Rule.** Every weight on the page is Roboto. If a new component needs a second typeface to feel distinct, that's a sign it doesn't belong on this page.

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
- **Do** let weight (300 for headings, 400 body, 500 label) carry hierarchy inside the single Roboto family.
- **Do** reserve shadow (`z-depth-1`) for the profile photo and publication thumbnails only.

### Don't:

- **Don't** add a second display typeface. Roboto Slab is loaded but unused — leave it that way rather than "activating" it for a new heading style.
- **Don't** introduce hero sections, gradient accents, card-grid feature tiles, or marketing-style CTAs — this is a research record, not a product landing page (per PRODUCT.md's anti-references).
- **Don't** fill buttons or cards with the accent color as a background; the One Accent Rule reserves it for text/interactive state.
- **Don't** add drop shadows to nav, buttons, or badges "for depth" — flat is the deliberate default; shadow is earned, not ambient.
