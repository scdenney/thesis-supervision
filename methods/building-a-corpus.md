---
layout: default
title: Building a Corpus
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#what-is-a-corpus">What Is a Corpus?</a></li>
<li><a href="#planning-your-corpus">Planning Your Corpus</a></li>
<li><a href="#collection-methods">Collection Methods</a>
<ul>
<li><a href="#databases-and-archives">Databases & Archives</a></li>
<li><a href="#web-sources-and-apis">Web Sources & APIs</a></li>
<li><a href="#multilingual-corpora">Multilingual Corpora</a></li>
</ul>
</li>
<li><a href="#organizing-your-corpus">Organizing Your Corpus</a></li>
<li><a href="#using-computational-tools">Using Computational Tools</a></li>
<li><a href="#structuring-your-thesis">Structuring Your Thesis</a></li>
<li><a href="#common-pitfalls">Common Pitfalls</a></li>
<li><a href="#key-readings">Key Readings</a></li>
<li><a href="#related-methods">Related Methods</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Building a Corpus

A corpus is the body of texts your analysis rests on. Decide deliberately what belongs in it and record how you collected it, in enough detail for the methodology chapter. A weak corpus damages everything that follows, because careful analysis cannot repair vague selection criteria or a missing search record later.

---

## What Is a Corpus?

A **corpus** (plural *corpora*) is a bounded collection of texts assembled for analysis according to explicit criteria. You should be able to explain and justify its composition. "All the articles I found" is not a corpus.

It could be a set of news articles, policy documents, legislation, speeches, social media posts, reports from NGOs or think tanks, court rulings, interview transcripts, or parliamentary proceedings. The important thing is that there is a rationale behind your choice of texts, closely tied to your research question.

<div class="info-box" markdown="1">

**Corpus vs. sample.** A corpus is the complete set of texts you assembled for analysis. A *sample* is a subset drawn from a larger population. Sometimes your corpus *is* a sample (e.g., 200 articles drawn from 3,000). Other times it aims to be comprehensive, such as all UN Security Council resolutions on a topic. Say which approach you use and why.

</div>

---

## Planning Your Corpus

Make four decisions before you collect a single text, and write them down. They become the backbone of your methodology section.

### 1. Define the scope

The types of texts you include depend on what you want to find out. Which texts and sources matter most for your research question and for the actors and debates you study? Fix the time period you are working on (a political crisis, a policy cycle, a decade of coverage) and also the geographic and linguistic area.

### 2. Establish selection criteria

Selection criteria are the rules for what goes into your corpus and what stays out. They must be **specific enough that another researcher could replicate your collection**.

- **Source(s):** Which publications, platforms, archives, or databases?
- **Time frame:** Exact start and end dates
- **Search terms:** The keywords, Boolean operators, or filters you used
- **Inclusion rules:** What counts? (e.g., "news articles only, not editorials or letters")
- **Exclusion rules:** What does not count? (e.g., "duplicates, articles under 200 words, wire service reprints")

<div class="tip-box" markdown="1">

**Write your criteria before you search.** Defining them afterward introduces selection bias. Set the rules, run the search, then apply the criteria consistently. Document any change you make along the way and the reason for it.

</div>

### 3. Determine corpus size

No universal rule sets corpus size. It depends on your method and question, and on what you can finish in the thesis timeline. Some rough guidelines follow.

- **Close qualitative analysis** (discourse analysis, detailed framing analysis): 30--80 texts is often enough. Depth of analysis matters more than volume.
- **Broader content analysis** with a coding scheme: 100--500 texts is common, depending on coding complexity.
- **Computational or mixed methods:** larger corpora are possible, but only if you have the tools and time to process them properly.

The most common mistake in corpus design is making the corpus too big. Think about how much time you will need to analyze it before you collect it. If you spend 15 minutes reading each text closely and have 100 hours for analysis, 400 texts is your ceiling, with no time left for revisions.

### 4. Plan your search strategy

Settle these questions before you start collecting.

- Which databases or sources will you search?
- What search terms and Boolean operators will you use?
- How will you handle synonyms and variant spellings, including translations where the corpus covers more than one language?
- Will you search full text or only headlines and abstracts?
- How will you de-duplicate results across databases?

<div class="exercise-box" markdown="1">

**Exercise**

Before collecting any texts, draft a one-page corpus plan. State which types of texts you will collect and why. Then list your sources, time frame, search terms, inclusion and exclusion rules, and target size. Bring the plan to a supervision meeting for feedback before you begin collecting.

</div>

---

## Collection Methods

### Databases and Archives

Most theses collect from commercial databases and institutional archives. Two databases available through Leiden University Libraries cover most needs.

**Nexis Uni (formerly LexisNexis Academic)**
- Main use: News media (newspapers, wire services, magazines, trade publications)
- Coverage: Thousands of international sources. Strong on English-language media, variable for non-English
- Tips: Narrow results with the "Timeline" and "Source" filters, and limit searches by content type (e.g., "News" only). Export metadata (headline, date, source, word count) with the full text. Syndication produces duplicate articles, so build de-duplication into your workflow.

**ProQuest**
- Main use: Theses and dissertations, historical newspapers, and specialized subject databases
- Coverage: Historical archives (e.g., *The New York Times* back to 1851) and discipline-specific databases such as PAIS International (policy literature) and Ethnic NewsWatch (minority media)
- Tips: Use the "Document Type" filter to exclude irrelevant results.

<div class="info-box" markdown="1">

**Access.** Search the [Leiden University Libraries](https://www.library.universiteitleiden.nl/) catalogue for the databases it currently licenses, and log in with your ULCN credentials. Leiden cancelled its Factiva subscription as of 2024 and recommends Nexis Uni in its place. The library help desk can solve access problems and arrange training in database searching.

</div>

**Other useful archives.**

- **Government and institutional websites** hold policy documents, legislation, speeches, and press releases. Searchable archives include the EU's EUR-Lex, the US Federal Register, and the Korean National Archives.
- **Organizational repositories** of NGOs, international organizations, and think tanks (e.g., Human Rights Watch, World Bank, OECD).
- **Digital newspaper archives** for historical research, such as the British Newspaper Archive, Delpher (Dutch-language), or the National Library of Korea's digital archive.

### Web Sources and APIs

**Web scraping** extracts content from websites with a program. Before you scrape a news site, blog, or platform, check whether the source offers an API or a structured data export, which is almost always preferable. If you do scrape, respect the site's terms of service and the legal and ethical limits on automated collection (see [Brown et al. 2025](https://doi.org/10.1177/20539517251381686){:target="_blank"}).

**APIs (Application Programming Interfaces)** give structured access to platform data. Reddit, YouTube, many government open-data portals, and some news aggregators offer them. They are usually more reliable and reproducible than scraping, but you need to plan around rate limits and access restrictions (see [Lomborg & Bechmann 2014](https://doi.org/10.1080/01972243.2014.915276){:target="_blank"}).

<div class="tip-box" markdown="1">

**Reproducibility matters.** Save your search queries, every filter you apply, the collection date, and the raw files. If you use a script or tool, keep it with your project files. See [Getting Started, Step 2]({{ '/getting-started/#step-2' | relative_url }}) for FAIR data management principles.

</div>

### Multilingual Corpora

Area studies and international relations projects often need texts in more than one language. If yours does, settle these points early.

- **Original language or translation?** Originals preserve meaning but require language competence. Translation adds interpretation at the collection stage.
- **Who translates?** Document your approach. For machine translation, acknowledge its limits and describe your quality checks.
- **Are search terms equivalent?** A direct translation of a keyword may miss the concept. Use native-language scholarship to choose terms.
- **How will you handle mixed-language texts?** (e.g., Korean articles with English loanwords)

Keep original-language texts as your primary data and store clearly labeled translations separately. Add a "Language" column to your metadata spreadsheet (see below). If you want to use machine translation as a research aid, discuss it with your supervisor first. If it is permitted, record the tool, version, and quality checks, and disclose the use under the [Ethics & AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}).

---

## Organizing Your Corpus

Set up your filing system before you start collecting.

### File management

- **Use a consistent naming convention.** `YYYY-MM-DD_Source_ShortTitle` (e.g., `2024-03-15_KoreaHerald_THAAD-Deployment`) sorts files chronologically.
- **Keep the corpus in one dedicated folder**, with subfolders by source or period if it is large.
- **Keep originals untouched.** Store raw downloads in one folder and work on copies in another. Annotate only the copies.
- **Back up everything.** Use cloud storage (university OneDrive, Google Drive) *and* a local backup. A lost corpus means starting over.

### Metadata spreadsheet

Track every text in a spreadsheet. At minimum, include these fields.

| Column | Example |
|--------|---------|
| **ID** | 001 |
| **File name** | 2024-03-15_KoreaHerald_THAAD-Deployment.pdf |
| **Title** | "South Korea confirms THAAD deployment timeline" |
| **Source** | *Korea Herald* |
| **Date** | 2024-03-15 |
| **Author** | Kim, J. |
| **Language** | English |
| **Word count** | 847 |
| **Collection date** | 2025-01-20 |
| **Database** | Nexis Uni |
| **Search terms used** | "THAAD" AND "South Korea" AND "deployment" |
| **Notes** | Wire service reprint. Check for duplicates |

The spreadsheet documents how you built the corpus, and you will draw on it directly when you write the methodology chapter.

<div class="tip-box" markdown="1">

**Start the spreadsheet on day one.** Adding metadata afterward is tedious and error-prone, so log each text as you collect it. Most databases can export metadata fields that pre-populate the spreadsheet.

</div>

### Reference management

Add all corpus texts to your reference manager (Zotero, Mendeley, or equivalent). This makes them easy to cite and gives you a second inventory of the collection. In Zotero, create a dedicated collection for the corpus and tag items by source or analytical theme.

---

## Using Computational Tools

Small corpora, say under 100 texts, can usually be organized by hand. Larger collections need a scripted workflow when the material has to be converted or cleaned.

### Basic file operations

Converting PDFs to plain text, batch renaming, extracting text from HTML, removing boilerplate, and splitting a large export into individual documents are repetitive jobs well suited to scripting.

- **Python** is the most common language for text processing in the social sciences. `BeautifulSoup` (HTML parsing), `pdfplumber` or `PyMuPDF` (PDF extraction), and `pandas` (metadata management) handle most corpus-building tasks.
- **R** users can do the same with `pdftools`, `rvest`, and `readtext`.
- **Command-line tools** such as `pdftotext`, `pandoc`, and standard Unix utilities (`rename`, `sed`, `awk`) work well for batch operations.

If you use any code or tool assistance for these procedural steps, test the result on a small sample first, and disclose the use under the [Ethics &amp; AI generative-AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}).

### What not to automate

These tools help with the logistics. The analytical work – what to include and exclude, how to interpret texts, how to code and categorize them (even in NVivo or ATLAS.ti), and whether a text is useful for your argument – still falls to you.

---

## Structuring Your Thesis

Corpus construction is a methodological choice, so your thesis must document and justify it. Examiners will ask whether the corpus suits your research question and whether you built it carefully and transparently. Cover these points in your **methodology chapter**.

### Selection criteria

Explain what types of texts you collected and why. Justify your sources, time frame, and inclusion and exclusion rules, and connect each decision to your research question. These choices are part of the research design.

> *Example:* "The corpus consists of English-language news articles from the *Korea Herald* and *Korea Times* published between March 2016 and December 2017, covering the period from the initial announcement of THAAD deployment to the completion of installation. These sources were selected because they are the two major English-language daily newspapers in South Korea and provide sustained coverage of the issue accessible to an international audience."

### Search strategy

Report the databases you searched, the search terms (including Boolean operators), and any filters. If you ran several searches or revised your terms, explain why.

> *Example:* "Articles were retrieved from Nexis Uni using the search string ("THAAD" OR "Terminal High Altitude Area Defense") AND ("South Korea" OR "ROK"), limited to the date range 1 March 2016 to 31 December 2017, filtered by content type 'News.' The initial search returned 1,247 results."

### Sampling and filtering

If you did not analyze every text your search returned, explain how you reduced the set. Describe any sampling procedure (random, stratified, purposive) and your filtering, such as removing duplicates or excluding irrelevant results after reading.

> *Example:* "After removing 312 duplicate articles and 89 articles that mentioned THAAD only in passing (fewer than two substantive paragraphs), the final corpus comprised 846 articles. From this set, a stratified random sample of 150 articles was drawn, with proportional representation by month, to ensure temporal coverage across the full deployment period."

### Corpus size and composition

Report the final size and composition of the corpus in a summary table or descriptive statistics. Give the number of texts, the breakdown by source, the distribution over time, the word count range, and the languages.

### Documentation and access

Describe how you organized and stored the data, including your naming convention, metadata spreadsheet, and backups. If the corpus comes from publicly available sources, say whether and how other researchers could reconstruct it. This connects to the FAIR principles in [Getting Started, Step 2]({{ '/getting-started/#step-2' | relative_url }}).

<div class="reflection-box" markdown="1">

**Ask yourself**

If another researcher read only your methodology chapter, could they reconstruct your corpus? If not, add detail on your selection criteria, search strategy, and filtering.

</div>

---

## Common Pitfalls

These problems most often weaken corpus-based theses. Backups and file naming are covered under [Organizing Your Corpus](#organizing-your-corpus).

**Undocumented selection criteria.** If you cannot explain why you chose *these* texts and not others, the corpus looks arbitrary and your analysis loses credibility. Fix: write your criteria before you search and record every decision.

**Selection bias in the search.** How could your method of searching produce a biased set of results? It might over-represent some perspectives or periods and miss the sources that would push back. You might research the domestic debate in Korea using only English-language sources, or gather only articles that support your hypothesis. Fix: think critically about what your search captures and what it misses, and acknowledge the limits.

**Unrecorded searches.** If you cannot remember the terms or filters you used three weeks ago, you can neither describe your collection accurately nor re-run it. Fix: log every query (date, database, search string, number of results) in a running document or your metadata spreadsheet.

**An oversized corpus.** Collecting 1,500 articles because you could leads to superficial analysis or a last-minute, poorly justified subsample. Fix: estimate your analysis time before collecting (see [corpus size](#determine-corpus-size)).

---

## Key Readings

Start with whichever work is closest to your approach.

- Krippendorff, K. (2018). *Content Analysis: An Introduction to Its Methodology* (4th ed.). Sage. The standard reference for content analysis. Chapter 6 on sampling is the most relevant to corpus construction.

- Stefanowitsch, A. (2020). *Corpus Linguistics: A Guide to the Methodology*. Language Science Press. [DOI: 10.5281/zenodo.3735822](https://doi.org/10.5281/zenodo.3735822){:target="_blank"}. [Free PDF](https://zenodo.org/records/3735822/files/final.pdf){:target="_blank"}. Open access. Chapter 2 covers corpus design (representativeness, size) and Chapter 4 data retrieval.

- McEnery, T., & Hardie, A. (2012). *Corpus Linguistics: Method, Theory and Practice*. Cambridge University Press. [DOI: 10.1017/CBO9780511981395](https://doi.org/10.1017/CBO9780511981395){:target="_blank"}. Covers building and annotating corpora. Useful if your work bridges linguistics and social science.

- Brown, M. A., Gruen, A., Maldoff, G., Messing, S., Sanderson, Z., & Zimmer, M. (2025). Web scraping for research: Legal, ethical, institutional, and scientific considerations. *Big Data & Society*, 12(4). [DOI: 10.1177/20539517251381686](https://doi.org/10.1177/20539517251381686){:target="_blank"}. On the legal and ethical side of scraping.

- Lomborg, S., & Bechmann, A. (2014). Using APIs for data collection on social media. *The Information Society*, 30(4), 256--265. [DOI: 10.1080/01972243.2014.915276](https://doi.org/10.1080/01972243.2014.915276){:target="_blank"}. On access, completeness, and representativeness in API-collected data.

---

## Related Methods

Once the source base is set, choose the method that fits the claim.

- **[Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }})**. For questions about how texts define a problem and make some responses seem reasonable.
- **[Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }})**. For questions about how language builds meaning, identity, and authority.

</div>
</div>
