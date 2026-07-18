# souravdutta24.github.io

Personal academic website for Sourav Dutta (Research Fellow, Oden Institute, UT Austin). Built with Jekyll on a trimmed, hand-vendored copy of [al-folio](https://github.com/alshedivat/al-folio) **v0.16.3** — not a submodule, not the current v1.x line.

## Design context

`PRODUCT.md` (register, audience, purpose, brand personality) and `DESIGN.md` (color/type/elevation/component tokens, extracted from the actual CSS in use) capture the site's design intent for the [impeccable](https://github.com/pbakaus/impeccable) design skill and any future design work. Read them before making visual changes.

## Why v0.16.3, not v1.x

al-folio v1.0 split the theme into external RubyGems (`al_folio_core`, `al_folio_cv`, `al_folio_distill`, …) styled with Tailwind; customizing it means overriding files that live inside a gem. v0.16.3 is fully self-contained — every layout, include, Sass partial, and bibliography rule is a plain file in this repo. Do not attempt to "upgrade" to v1.x; it would mean a full rebuild, not a version bump.

## Sections in scope

Only five sections exist: **About, Work Experience, News, Selected Publications, Contact** — all on one page. Everything else al-folio ships (Blog, Teaching, Projects, Distill posts, Books, Repositories, Profiles, the dropdown-nav demo) was deleted outright — not hidden from nav, the files are gone. Don't re-add them without deciding you actually want that section back (and re-vendoring the relevant files from upstream al-folio v0.16.3).

There used to be a standalone `/experience/` page (`_pages/cv.md`, `layout: cv`) with its own left-sidebar TOC and a CV-pdf download link. It was folded into the homepage as a plain "Work Experience" section and the page/layout/includes were deleted outright (same convention as the other removed sections) — don't re-add `layout: cv` or `_includes/cv/*` without deciding you want that whole standalone-page architecture back.

| Section                                                       | File(s)                                                                                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| About / Work Experience / News / Selected Publications / Contact | `_pages/about.md` (single page, `layout: about`, permalink `/`)                                                        |
| Work Experience                                               | `_data/work_experience.yml` (flat list: `institution`, `title`, `year`, optional `location`), rendered via `_includes/work_experience.liquid` |
| News                                                           | `_news/*.md` collection, rendered via `_includes/news.liquid`                                                            |
| Publications                                                   | `_bibliography/papers.bib` (jekyll-scholar), full list at `/publications/`, `selected={true}` entries also show on About |
| Social links / contact                                        | `_data/socials.yml`, `contact_note` in `_config.yml`                                                                     |

## Adding content

**News item**: add a file to `_news/`, e.g. `_news/2027-01-15-new-paper.md`:

```markdown
---
layout: post
date: 2027-01-15 12:00:00-0000
inline: true
related_posts: false
---

Announcement text here, [links](https://example.com) work.
```

Use `12:00:00` (noon), not midnight — a midnight UTC timestamp can roll back a day once Jekyll converts it to local display time. `about.md`'s `announcements.limit: 5` caps the homepage teaser; `/news/` always shows all of them.

**Publication**: add a BibTeX entry to `_bibliography/papers.bib`. Useful custom fields (see `_layouts/bib.liquid`): `abbr` (venue badge), `selected={true}` (show on homepage), `preview={path/in/assets/img/...}` (thumbnail), `pdf`/`code`/`poster`/`slides`/`website`/`video`/`arxiv`/`doi` (link buttons/badges). Don't fabricate volume/issue/page numbers you're not sure of — omit the field rather than guess; the DOI/arXiv link is authoritative.

**Work Experience entry**: add an entry to `_data/work_experience.yml` (`institution`, `title`, `year`, optional `location`). No bullet/description list — the section is intentionally just institution + title + dates.

## Local preview

System Ruby on this machine (2.6.10) is too old for al-folio's Gemfile. Use Homebrew Ruby:

```bash
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"   # add to shell profile to persist
gem install bundler
bundle install
```

ImageMagick is required (not optional) — `imagemagick.enabled: true` in `_config.yml` generates responsive `.webp` variants at build time and the build errors without it: `brew install imagemagick`.

Then:

```bash
bundle exec jekyll serve
```

and open `http://localhost:4000/`. Run `bundle exec jekyll build` alone to catch template/config errors without starting a server.

## Deploy

Push to `master` → `.github/workflows/deploy.yml` builds with Jekyll and deploys via `actions/deploy-pages` (not al-folio's documented `gh-pages` branch-push method). Pull requests trigger the same build job as a check but skip the deploy job.

**One-time manual step** (already done, but if it ever gets reset): repo → Settings → Pages → Build and deployment → Source must be **"GitHub Actions"**, not "Deploy from a branch". al-folio's own README assumes the branch method — don't follow it on this point.

## Known loose ends

- Other workflows al-folio ships (`broken-links.yml`, `broken-links-site.yml`, `codeql.yml`, `deploy-docker-tag.yml`, `deploy-image.yml`, `docker-slim.yml`, `lighthouse-badger.yml`, `prettier*.yml`, `update-citations.yml`, `update-tocs.yml`) were left untouched, vendored as-is. `update-citations.yml` (scheduled 3x/week) will fetch real Google Scholar citation counts for `scholar_userid: tJV7jW8AAAAJ` into `_data/citations.yml` if left enabled — currently that file is an empty stub. Review/prune the rest if they get noisy in the Actions tab.
- `_sass/_teachings.scss` is still imported by `assets/css/main.scss` even though the Teaching section was deleted — harmless dead CSS, not cleaned up.
- The old site had a contact form; it's not present here (al-folio's Contact section is social icons + `contact_note` only, no form backend).
- No `TODO(content)` placeholders remain — all content (bio, education, experience, news, publications, socials, CV, photo) was pulled from the retired Wowchemy site's real data, not placeholders.
