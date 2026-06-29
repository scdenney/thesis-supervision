# Thesis & Research Supervision Website

## Overview
Jekyll + GitHub Pages site for Dr. Steven Denney's thesis and research supervision across four Leiden University programs: BAIS (BA), BAKS (BA), MAAS (MA), MAIR (MA). Live at https://scdenney.github.io/thesis-supervision/

## Tech Stack
- Jekyll with `jekyll-theme-cayman` (custom layout overrides Cayman entirely)
- Custom SCSS with a warm academic-paper palette: deep navy `#001158` header/footer (Leiden brand anchor), navy-charcoal `#21283A` headings, slate-blue `#34557A` links, warm near-black `#2B2B2F` body text on a warm-paper `#F4F2EC` background, white cards with warm hairline borders + warm low-contrast shadows. Muted bronze `#8A6A3B` is the light-surface accent (rules/underlines/active borders, used sparingly) and brass `#C2A877` is the accent on the navy header. All colors are tokens in `:root`; the method-card SVG line-art (in `assets/js/site.js`) is hand-tinted to match — keep it warm if you touch it. (History: started warm gold → went Leiden-blue → now warm paper; don't reintroduce bright pale-blue panels.)
- Small progressive JavaScript layer for mobile navigation, page table-of-contents behavior, and method routing
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
assessment-standards/index.md — Assessment standards (sidebar layout)
methods/index.md            — Methods guide with interactive chooser and method cards
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
- `sources/` is gitignored — supervisor-side reference PDFs and markdown conversions (copyrighted)
- Color variables defined in `:root` in `assets/css/style.scss`
- Program facts (word count, citation style, deadline) live in `_data/programs.yml` — the single source of truth read by the landing-page snapshot and each program page. Edit facts there, not inline.
- Methods page uses a small JavaScript chooser plus static fallback cards
- Nav has three dropdowns — Programs, Guide, and Methods (a mega-menu); all use the `.nav-dropdown` pattern. Under Methods → "Corpus" there is one page, Building a Corpus (corpus-design methods). The GenAI rules live on the Ethics & AI page.
- AI/code workflow tooling (the former "AI & Code" page, starter prompts, the Corpus Wizard) has been extracted to a git-ignored `ai-for-research-export/` folder, staged for the separate **AI for Research** site (https://github.com/scdenney/ai-for-research). It is not published here; the methods site keeps only corpus-design methods and the Ethics GenAI policy. When that site is live, link to it from Methods/Ethics.
