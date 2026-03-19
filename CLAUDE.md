# Thesis Supervision Website

## Overview
Jekyll + GitHub Pages site for Dr. Steven Denney's thesis supervision across four Leiden University programs: BAIS (BA), BAKS (BA), MAAS (MA), MAIR (MA). Live at https://scdenney.github.io/thesis-supervision/

## Tech Stack
- Jekyll with `jekyll-theme-cayman` (custom layout overrides Cayman entirely)
- Custom SCSS with "Rushmore Academic" color scheme (deep plum, warm teal, burnished gold)
- No JavaScript — static Markdown pages with HTML/CSS for interactivity (`<details>`/`<summary>`)
- `kramdown: parse_block_html: true` required in `_config.yml` for markdown inside HTML blocks

## Site Structure
```
index.md                    — Landing page with program cards
getting-started/index.md    — 5-step interactive guide (details/summary)
bais/index.md               — BAIS program page (sidebar layout)
baks/index.md               — BAKS program page (points to thesis seminar site)
maas/index.md               — MAAS program page (sidebar layout)
mair/index.md               — MAIR program page (sidebar layout)
ethics/index.md             — Ethics & policies (sidebar layout)
shared-standards/index.md   — Shared assessment criteria (sidebar layout)
```

## PDF Documents
Each program has a student-facing PDF compiled from LaTeX, with staff-only content removed:
- `bais/BAIS_Thesis_Guidelines.{tex,pdf}` (7pp)
- `maas/MAAS_Thesis_Protocol.{tex,pdf}` (4pp)
- `mair/MAIR_Thesis_Guidelines.{tex,pdf}` (5pp)
- `ethics/Code of Ethics...pdf` (kept as-is, external formal document)

To rebuild PDFs: `cd <dir> && pdflatex <file>.tex && pdflatex <file>.tex`

## Key Details
- BAIS: 10,000 words ±10%, Chicago (supervisor picks notes-bib or author-date)
- BAKS: 10,000 words ±10%, Chicago Notes-Bibliography specifically
- MAAS: 12,000–15,000 words (incl. footnotes/refs, excl. appendices), discipline-appropriate citation style
- MAIR: 15,000 hard max (incl. ALL elements, no margin), one consistent reference style
- All programs: 5 assessment criteria (Knowledge, Application, Conclusions, Communication, Learning Skills)
- BAKS students are directed to the separate thesis seminar site for seminar materials

## Conventions
- Pages with substantial content use the `.page-layout` grid (sidebar TOC + content)
- Program pages follow a consistent template; check existing pages before modifying
- PDF filenames use underscores (no spaces) for clean URLs
- `temp_ignore/` is gitignored — staging area for private materials
- Color variables defined in `:root` in `assets/css/style.scss`
