# souravdutta24.github.io

Personal academic homepage for **Sourav Dutta** (Research Associate, Oden Institute, UT Austin) — live at [souravdutta24.github.io](https://souravdutta24.github.io).

Built with [Jekyll](https://jekyllrb.com/) on a trimmed, hand-vendored copy of [al-folio](https://github.com/alshedivat/al-folio) **v0.16.3**. Deployed automatically via GitHub Actions on every push to `master`.

## Structure

Everything lives on a single page (`/`) plus a full publications list, assembled from:

| Section              | Source                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| About                 | `_pages/about.md` (bio, education, interests)                                                 |
| Work Experience       | `_data/work_experience.yml`, rendered via `_includes/work_experience.liquid`                    |
| News                  | `_news/*.md` collection                                                                       |
| Selected Publications | `_bibliography/papers.bib` (entries marked `selected=true`); full list at `/publications/`     |
| Contact               | Social icons in `_data/socials.yml` + `contact_note` in `_config.yml`                          |

Design tokens and intent are documented in [DESIGN.md](DESIGN.md) and [PRODUCT.md](PRODUCT.md).

## Local development

```bash
brew install ruby imagemagick
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/`. See [CLAUDE.md](CLAUDE.md) for the full setup notes, content-editing guide, and known loose ends.

## Credit

Based on [al-folio](https://github.com/alshedivat/al-folio), available under the [MIT License](LICENSE).
