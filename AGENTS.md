# Thesis & Research Supervision Website

> Durable rules and orientation only. Session state lives in `HANDOFF.md` (newest entry on top, append-only). Prose conventions follow the `sci-edit` skill (writing-toolkit); only local exceptions are listed here.


## Overview
Jekyll + GitHub Pages site for Dr. Steven Denney's thesis and research supervision across four Leiden University programs: BAIS (BA), BAKS (BA), MAAS (MA), MAIR (MA). Live at https://scdenney.github.io/thesis-supervision/

## Tech Stack
- Jekyll with `jekyll-theme-cayman` (custom layout overrides Cayman entirely)
- Custom SCSS with a warm academic-paper palette: deep navy `#001158` header/footer (Leiden brand anchor), navy-charcoal `#21283A` headings, slate-blue `#34557A` links, warm near-black `#2B2B2F` body text on a light warm-paper `#F8F6F1` background, white cards with opaque `#DAD6CD` hairline borders and no resting shadows. Muted bronze `#8A6A3B` is the light-surface accent (kickers, rules, used sparingly) and brass `#C2A877` is the accent on the navy header. Type: Source Serif 4 for h1/h2 and the site title, Source Sans 3 for body, UI and h3/h4 (Google Fonts, loaded in `_layouts/default.html`); body 17px. All colors are tokens in `:root`. The 2026 "handbook refresh" is a single override layer at the end of `assets/css/style.scss` (flat 6px cards, no hover lifts; nav marks the current section with a brass underline and brass-tinted label; dropdowns are compact panels with a brass hover bar; the sidebar TOC's brass marker follows the section in view via `assets/js/site.js`); edit there before touching older rules. The method-card SVG line-art (in `assets/js/site.js`) is hand-tinted to match and shown small, without its tinted frame. (History: warm gold → Leiden-blue → warm paper → handbook refresh; don't reintroduce bright pale-blue panels, chips, or hover animations.)
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
ethics/index.md             — Ethics: ethics review, Faculty GenAI guidelines, integrity (sidebar layout)
ai-policy/index.md          — Working with AI: stance, evidence (inline-SVG figures), and the supervision AI policy (sidebar layout)
assessment-standards/index.md — Assessment standards (sidebar layout)
methods/index.md            — Methods guide with interactive chooser and method cards
methods/puzzles-and-questions.md, literature-review.md, analytical-framework.md — "Foundations": the deep versions of Getting Started Steps 1, 3, and 4 (sidebar layout)
methods/llms-and-compute.md — When an LLM or GPU is needed, what may be uploaded, routes, and the request form (sidebar layout)
methods/qualitative/*.md    — One page per qualitative method (there is no qualitative hub page)
methods/quantitative/index.md — All computational methods on one page (sidebar layout); other files in this folder are redirect stubs
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
- MAAS: up to 15,000 words (excl. footnotes and bibliography, per 2026-27 prospectus), discipline-appropriate citation style
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
- Nav has three dropdowns — Programs, Guide, and Methods (a mega-menu); all use the `.nav-dropdown` pattern. Under Methods → "Corpus" there is one page, Building a Corpus (corpus-design methods). The Faculty GenAI guidelines live on the Ethics page; the supervisor's own AI policy is the separate "Working with AI" nav item (`ai-policy/`).
- Moved pages keep their old URL as a stub: set `layout: redirect` and `redirect_to: /new/path/#anchor` in the front matter. Do not delete a published URL without one.
- The home page route lists the Getting Started steps by name. If a step changes, update both.
- Getting Started stays short and links to the Foundations pages. Put depth on those pages, not in the steps.
- The Foundations pages are general guidance for all programs. Keep course-specific rules, such as MAIR assignment rules, on the program page and in Brightspace.
- Site-wide stance on rationale: a gap is a starting point and the puzzle is the rationale, with a lower bar at BA level. Official rubric wording (BAIS page and PDF) is left as it is.
- Eelco van der Maat's MAIR materials are cited and paraphrased, never reproduced. Do not publish the in-class statement sets or their keys, which are marked not for distribution. The practice set on the Literature Review page is separate and draws on Paglayan (2026).
- The Corpus and LLM Request is a template builder on `methods/llms-and-compute.md`. Its button opens an email to Steven with Chris Handy in cc (`data-email-to`, `data-email-cc`), so no form data passes through a third party. Never publish the AI2 hostname.
- AI/code workflow tooling (the former "AI & Code" page, starter prompts, the Corpus Wizard) has been extracted to a git-ignored `ai-for-research-export/` folder, staged for the separate **AI for Research** site (https://github.com/scdenney/ai-for-research). It is not published here; the methods site keeps only corpus-design methods and the Ethics GenAI policy. When that site is live, link to it from Methods/Ethics.
