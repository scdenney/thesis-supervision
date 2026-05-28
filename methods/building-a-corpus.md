---
layout: default
title: Building a Corpus
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc">
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
<div class="page-route-card" markdown="0">
<span class="page-route-eyebrow">Computational route</span>
<h5>Need OCR, cleanup, metadata, or compute planning?</h5>
<p>Launch the wizard if you already know this corpus needs a technical pipeline.</p>
<a class="page-route-link" href="https://scdenney.github.io/corpus-building/">Launch the wizard</a>
</div>
</div>
</aside>

<div class="page-content" markdown="1">

# Building a Corpus

A corpus is the body of texts your analysis rests on. Build it deliberately. Decide what belongs in it and record how it was collected. Keep enough documentation for the method chapter.

A weak corpus damages everything that follows. If the selection criteria are vague or the search record is missing, careful analysis cannot repair the problem later. The aim here is practical. You should finish with a corpus you can defend.

---

## What Is a Corpus?

A **corpus** (plural *corpora*) is a deliberately assembled collection of texts selected according to explicit criteria for analysis. The key word is *deliberate*. A corpus is a defined, bounded collection whose composition you can explain and justify. It is never just "all the articles I found" or "everything on this topic."

Corpora can include many kinds of textual material:

- News articles from specific outlets over a defined period
- Policy documents, government reports, or legislative texts
- Speeches, press conferences, or official statements
- Social media posts (tweets, Reddit threads, blog entries)
- NGO reports, think-tank publications, or organizational communications
- Legal texts, court rulings, or treaties
- Interview transcripts or parliamentary proceedings

These materials become a corpus when you collect them according to a clear rationale tied to your research question. Format alone does not define one.

<div class="info-box" markdown="1">

**Corpus vs. sample.** A corpus is the complete set of texts you have assembled for analysis. A *sample* is a subset drawn from a larger population. Sometimes your corpus *is* a sample (e.g., 200 articles drawn from a universe of 3,000). Other times your corpus aims to be comprehensive, such as all UN Security Council resolutions on a specific topic. Be clear about which approach you are using and why.

</div>

---

## Planning Your Corpus

Before you collect a single text, you need to make four decisions. Write them down. They will form the backbone of your methodology section.

### 1. Define the scope

What types of texts will you include, and why? Your research question should drive this decision. Ask yourself these questions before you search.

- What kind of textual evidence bears on my research question?
- Which sources are most relevant to the actors and debates I am studying?
- What time period is appropriate? (A political crisis? A policy cycle? A decade of coverage?)
- What geographic or linguistic boundaries apply?

### 2. Establish selection criteria

Selection criteria are the explicit rules that determine what goes into your corpus and what stays out. They must be **specific enough that another researcher could replicate your collection**. Good criteria typically specify the following.

- **Source(s):** Which publications, platforms, archives, or databases?
- **Time frame:** Exact start and end dates
- **Search terms:** The keywords, Boolean operators, or filters you used
- **Inclusion rules:** What counts? (e.g., "news articles only, not editorials or letters")
- **Exclusion rules:** What does not count? (e.g., "duplicate articles, articles under 200 words, wire service reprints")

<div class="tip-box" markdown="1">

**Write your criteria before you search.** It is tempting to search first and define criteria afterward. That introduces selection bias. Decide your rules, run your search, then apply the criteria consistently to filter results. Document any modifications you make along the way, and explain why.

</div>

### 3. Determine corpus size

There is no universal rule for how large a corpus should be. The right size depends on your method and research question, alongside what is practical within your thesis timeline. A few rough guidelines apply.

- **For close qualitative analysis** (discourse analysis, detailed framing analysis), 30--80 texts is often sufficient. Quality of analysis matters more than volume.
- **For broader content analysis** with coding schemes, 100--500 texts is common, depending on coding complexity.
- **For computational or mixed-methods approaches**, larger corpora are possible, but only if you have the tools and time to process them meaningfully.

The most common mistake is building a corpus that is too large to analyze carefully. A corpus of 2,000 articles sounds impressive. If you cannot read and code it within your thesis timeline, it becomes a liability.

### 4. Plan your search strategy

Before you start collecting, write out your search strategy.

- Which databases or sources will you search?
- What search terms and Boolean operators will you use?
- How will you handle synonyms and variant spellings, including translations where the corpus covers more than one language?
- Will you search full text or only headlines and abstracts?
- How will you de-duplicate results across databases?

<div class="exercise-box" markdown="1">

**Exercise**

Before collecting any texts, draft a one-page corpus construction plan. Include the types of texts you will collect and why, along with your selection criteria. Add the target corpus size and search strategy. Spell out your sources, time frame, search terms, and inclusion/exclusion rules. Bring this to a supervision meeting for feedback before you begin collecting.

</div>

---

## Collection Methods

### Databases and Archives

For most thesis projects in the social sciences and humanities, commercial databases and institutional archives are the primary collection tools. Through the Leiden University Library, these options are especially common.

**LexisNexis Academic (Nexis Uni)**
- Main use: News media (newspapers, wire services, magazines, trade publications)
- Coverage: Thousands of international sources. Strong on English-language media, variable for non-English
- Tips: Use the "Timeline" and "Source" filters to narrow results efficiently. Export metadata (headline, date, source, word count) along with full text. LexisNexis sometimes includes duplicate articles from syndication, so build de-duplication into your workflow. Limit searches by content type (e.g., "News" only) to exclude irrelevant material.

**Factiva (Dow Jones)**
- Main use: International business and financial news, plus major general-interest media
- Coverage: Strong international coverage. Often better than LexisNexis for Asian and European sources
- Tips: Factiva's search operators differ from LexisNexis. Consult the help documentation. Use "Source Lists" to define your publication set. Export to RTF or PDF for consistent formatting. Factiva is particularly useful for multilingual searches because it allows you to search in one language and filter by region.

**ProQuest**
- Main use: Academic theses and dissertations, historical newspapers, and specialized subject databases
- Coverage: Includes historical archives (e.g., *The New York Times* back to 1851) and discipline-specific databases
- Tips: Useful when your corpus needs historical depth. The "Document Type" filter is essential for excluding irrelevant results. ProQuest also hosts several specialized databases (e.g., PAIS International for policy literature, Ethnic NewsWatch for minority media).

<div class="info-box" markdown="1">

**Access.** All three databases are available through the [Leiden University Library](https://www.library.universiteitleiden.nl/). Log in with your ULCN credentials. If you encounter access issues, contact the library help desk. They can also arrange training sessions for database searching.

</div>

**Other useful archives.**

- **Government and institutional websites** can provide policy documents, legislation, speeches, and press releases. Many governments maintain searchable archives, including the EU's EUR-Lex and the US Federal Register. The Korean National Archives may also be relevant.
- **Organizational repositories** are useful because NGOs and international organizations often maintain document libraries. Think tanks do this as well (e.g., Human Rights Watch reports, World Bank publications, OECD policy briefs).
- **Digital newspaper archives** can matter for historical research. Sources like the British Newspaper Archive, Delpher (Dutch-language), or the Korean National Library's digital archive may be relevant.

### Web Sources and APIs

Some corpora require material from the open web, such as news websites, blogs, social media platforms, or organizational web pages. Collecting from these sources raises practical and ethical questions.

**Web scraping** involves programmatically extracting content from websites. Before scraping, check whether the source provides an API or structured data export. That is almost always preferable. If you do scrape, you must consider the site's terms of service and the legal and ethical dimensions of automated data collection. For a thorough discussion, see [Brown et al. (2025)](https://doi.org/10.1177/20539517251381686){:target="_blank"}.

**APIs (Application Programming Interfaces)** provide structured access to platform data. Platforms that offer APIs include Reddit, YouTube, various government open data portals, and some news aggregators. APIs are generally more reliable and reproducible than scraping. They also come with rate limits and access restrictions that you need to plan around. For a discussion of using APIs for social media data collection, see [Lomborg & Bechmann (2014)](https://doi.org/10.1080/01972243.2014.915276){:target="_blank"}.

<div class="tip-box" markdown="1">

**Reproducibility matters.** Whatever collection method you use, your goal is to make the process reproducible. Save your search queries and document every filter you apply. Record the collection date, too. Keep the raw files. If you use a script or tool, save it with your project files. See [Getting Started, Step 2]({{ '/getting-started/#step-2' | relative_url }}) for FAIR data management principles.

</div>

### Multilingual Corpora

If your research question requires texts in more than one language, which is common in area studies and international relations, you need a clear strategy for managing multilingual material.

**Key decisions.**

- **Will you analyze texts in their original language or in translation?** Working with originals preserves meaning more directly, but it requires language competence. Translation introduces interpretation at the data collection stage.
- **Who translates?** If you translate, document your approach. If you use machine translation, acknowledge its limitations and describe quality checks.
- **Are search terms equivalent across languages?** A direct translation of a keyword may not capture the same concept. Consult native-language scholarship to identify appropriate search terms.
- **How will you handle texts that mix languages?** (e.g., Korean news articles that incorporate English loanwords or technical terms)

**Practical tips.**

- Keep original-language texts as your primary data. Store translations separately and clearly label them.
- In your metadata spreadsheet (see below), include a "Language" column.
- If you plan to use machine translation as a research aid, discuss it with your supervisor first. If permitted, record the tool and version used together with your quality checks. Disclose the use under the [Ethics & AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}).

---

## Organizing Your Corpus

A well-organized corpus saves real time during analysis. Set up your filing system before you start collecting.

### File management

- **Use a consistent naming convention.** A good pattern is `YYYY-MM-DD_Source_ShortTitle` (e.g., `2024-03-15_KoreaHerald_THAAD-Deployment`). This sorts files chronologically by default.
- **Store files in a single dedicated folder** with a clear directory structure. If your corpus is large, use subfolders by source or time period.
- **Keep originals untouched.** Store raw downloaded files in one folder. Work with copies in another. If you annotate or highlight texts, do it on the copies.
- **Back up everything.** Use cloud storage (university OneDrive, Google Drive) *and* a local backup. A lost corpus means starting over.

### Metadata spreadsheet

Create a spreadsheet to track every text in your corpus. At minimum, include these fields.

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
| **Database** | LexisNexis |
| **Search terms used** | "THAAD" AND "South Korea" AND "deployment" |
| **Notes** | Wire service reprint. Check for duplicates |

This spreadsheet is a research instrument. It documents your corpus construction process, and you will draw on it directly when writing your methodology chapter.

<div class="tip-box" markdown="1">

**Start the spreadsheet on day one.** Adding metadata retroactively is tedious and error-prone. Log each text as you collect it. If you are exporting from a database, most allow you to export metadata fields directly. Use this to pre-populate your spreadsheet.

</div>

### Reference management

Add all corpus texts to your reference manager (Zotero, Mendeley, or equivalent). This serves two purposes. It helps you cite corpus texts in your thesis. It also gives you a second inventory of your collection. In Zotero, you can create a dedicated collection for your corpus and tag items by source or by analytical theme.

---

## Using Computational Tools

Small corpora, say under 100 texts, can often be organized by hand. Larger collections need a more mechanical workflow, especially when the material has to be converted or cleaned.

### Basic file operations

Many corpus-building tasks are repetitive. Common examples include converting PDFs to plain text, renaming files in batch, extracting text from HTML pages, removing boilerplate, or splitting a large export into individual documents. These jobs are well-suited to scripting.

- **Python** is the most common language for text processing in the social sciences. Libraries like `BeautifulSoup` (HTML parsing), `pdfplumber` or `PyMuPDF` (PDF extraction), and `pandas` (metadata management) handle most corpus-building tasks.
- **R** users can accomplish similar tasks with packages like `pdftools`, `rvest`, and `readtext`.
- **Command-line tools** such as `pdftotext`, `pandoc`, and standard Unix utilities (`rename`, `sed`, `awk`) are effective for batch operations.

### AI-assisted corpus management

AI coding assistants such as Claude Code, OpenAI Codex, or GitHub Copilot can help students draft and test small corpus-management scripts, especially when programming experience is limited. Typical tasks include:

- Write scripts to batch-convert PDFs to plain text
- Clean and standardize text files (removing headers, footers, boilerplate)
- Parse and restructure metadata exports from databases
- Rename files in bulk according to your naming convention
- Split large export files into individual documents
- Run basic validation checks (e.g., flagging empty files, checking word counts)

You do not need to be a programmer to use these tools effectively. Describe the task in plain language. For example, "I have 300 PDFs in a folder and I need to convert them to plain text files with the same names." The tool can draft a script that you inspect and test on a small sample before running it on permitted data.

<div class="info-box" markdown="1">

**GenAI permission and disclosure.** Before using AI tools for corpus management tasks of any kind (file conversion, batch renaming, header cleanup, basic validation), discuss the planned use with your supervisor and check the [Ethics & AI generative AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}). If the use is permitted, disclose it in your methodology chapter. Document what the tool helped with and what you verified by hand. Note where the underlying prompts and outputs are stored.

**Important distinction.** Using AI to *manage* your corpus (file conversion, header cleanup, metadata assembly) is different from using AI to *analyze* your corpus (generating codes or producing interpretive findings). Corpus management can be a practical workflow task when it is transparent and verified. Corpus analysis raises fundamental questions about the integrity of your analysis and requires explicit guidance before you proceed.

</div>

### An agent-guided pipeline

If your project needs a full computational pipeline, I maintain a standalone [Corpus Building Wizard](https://scdenney.github.io/corpus-building/). Use it for OCR from scanned PDFs, rule-based cleanup, metadata assembly, or outputs formatted for a specific analysis tool. The wizard asks about your project and returns a setup for [Claude Code](https://claude.ai/code){:target="_blank"} or [OpenAI Codex](https://developers.openai.com/codex/){:target="_blank"}. It also gives you a one-line terminal command for an agent session already primed with your specifics.

The wizard covers three execution paths. Cloud API works for laptops. ALICE / LUCDH handles HPC work. A local consumer GPU suits students who prefer to run things at home. The broader methodological decisions (scope, selection, ethics, documentation) stay here.

<aside class="cb-mini-wizard" markdown="0">
  <span class="cb-mini-eyebrow">Quick route</span>
  <h3>Which corpus-building path fits your project?</h3>
  <p>Two questions. The full wizard opens with your answers already loaded.</p>
  <form method="get" action="https://scdenney.github.io/corpus-building/">
    <label>
      <span>How many pages?</span>
      <select name="pages" required>
        <option value="">&mdash;</option>
        <option value="lt100">Less than 100</option>
        <option value="101_500">101–500</option>
        <option value="501_1k">501–1,000</option>
        <option value="1k_5k">1,001–5,000</option>
        <option value="5k_10k">5,001–10,000</option>
        <option value="gt10k">More than 10,000</option>
      </select>
    </label>
    <label>
      <span>What compute?</span>
      <select name="compute" required>
        <option value="">&mdash;</option>
        <option value="alice">ALICE account</option>
        <option value="lucdh">LUCDH workstation</option>
        <option value="gpu_big">Local GPU, 16 GB or more</option>
        <option value="gpu_small">Local GPU, less than 16 GB</option>
        <option value="none">Laptop only</option>
      </select>
    </label>
    <button type="submit">Open the full wizard &rarr;</button>
  </form>
</aside>

### What not to automate

Computational tools handle logistics. Analytical judgment stays with you. Keep these decisions in your own hands.

- **Deciding what to include and exclude.** Selection criteria require human judgment about relevance.
- **Reading and interpreting texts.** This is the core of qualitative analysis.
- **Coding and categorization.** Even if you use software like NVivo or Atlas.ti, the intellectual work of coding is yours.
- **Evaluating quality and relevance.** Automated tools cannot assess whether a text is substantively relevant to your argument.

---

## Structuring Your Thesis

Corpus construction is a methodological choice, so it needs to be documented and justified in your thesis. Reviewers and examiners will evaluate whether your corpus suits your research question and whether your construction process was careful and transparent.

In your **methodology chapter**, cover these points.

### Selection criteria

Explain what types of texts you collected and why. Justify your choice of sources and time frame, along with any inclusion/exclusion rules you applied. Connect these decisions to your research question. They are part of the research design, not background logistics.

> *Example:* "The corpus consists of English-language news articles from the *Korea Herald* and *Korea Times* published between March 2016 and December 2017, covering the period from the initial announcement of THAAD deployment to the completion of installation. These sources were selected because they are the two major English-language daily newspapers in South Korea and provide sustained coverage of the issue accessible to an international audience."

### Search strategy

Document exactly how you found your texts. Report the databases searched and the search terms used, including Boolean operators. Add any filters applied. If you conducted multiple searches or revised your terms, explain why.

> *Example:* "Articles were retrieved from LexisNexis Academic using the search string ("THAAD" OR "Terminal High Altitude Area Defense") AND ("South Korea" OR "ROK"), limited to the date range 1 March 2016 to 31 December 2017, filtered by content type 'News.' The initial search returned 1,247 results."

### Sampling and filtering

If you did not analyze every text your search returned, explain how you reduced the set. Describe any sampling procedure (random, stratified, purposive). Then explain your filtering process, such as removing duplicates or excluding irrelevant results after reading.

> *Example:* "After removing 312 duplicate articles and 89 articles that mentioned THAAD only in passing (fewer than two substantive paragraphs), the final corpus comprised 846 articles. From this set, a stratified random sample of 150 articles was drawn, with proportional representation by month, to ensure temporal coverage across the full deployment period."

### Corpus size and composition

Report the final size and composition of your corpus. Include a summary table or descriptive statistics. Useful fields include number of texts, breakdown by source, time distribution, word count range, and languages represented.

### Documentation and access

Describe how you organized and stored your data. Mention your naming convention and metadata spreadsheet. Add your backup procedures. If your corpus is drawn from publicly available sources, note whether and how other researchers could reconstruct it. This connects to the FAIR principles covered in [Getting Started, Step 2]({{ '/getting-started/#step-2' | relative_url }}).

<div class="reflection-box" markdown="1">

**Ask yourself**

If another researcher read only your methodology chapter, could they reconstruct your corpus? If the answer is no, you need to add more detail about your selection criteria and search strategy. You probably need more on filtering as well.

</div>

---

## Common Pitfalls

These problems most often weaken corpus-based thesis work. Each one is avoidable with planning.

**Undocumented selection criteria weaken the project.** You collected texts but cannot clearly explain why *these* texts and not others. The corpus then appears arbitrary, and the credibility of your analysis takes a hit. Fix: write your criteria before you search, and record every decision.

**Selection bias can enter through the search.** Your corpus over-represents certain perspectives or time periods because of how you searched. It may also under-represent the sources that would push back on those perspectives. For example, you might search only English-language sources for a study of Korean domestic debate, or collect only articles that support your hypothesis. Fix: think critically about what your search strategy captures and what it misses. Acknowledge limitations honestly.

**Unrecorded searches are hard to defend later.** You ran searches three weeks ago and cannot remember exactly what terms or filters you used. Now you cannot describe your collection process accurately or re-run the search if needed. Fix: log every search query (date, database, search string, number of results) in a running document or your metadata spreadsheet.

**An oversized corpus can become a liability.** You collected 1,500 articles because you could, but you do not have time to read and code them all properly. The result is either superficial analysis or a last-minute shift to a poorly justified subsample. Fix: estimate your analysis time *before* collecting. If close reading takes 15 minutes per text and you have 100 hours for analysis, your practical ceiling is around 400 texts. That assumes no revisions.

**A single backup is fragile.** Your corpus sits on your laptop, an unsynced external drive, a project folder buried inside your downloads, or somewhere else you might accidentally clean out. Fix: maintain at least two backups in different locations, such as university cloud storage plus an external drive. Do this from day one.

**Inconsistent file management wastes writing time.** Files are named haphazardly and scattered across multiple locations, with little or no associated metadata. When you need to find a specific text during writing, you waste time searching. Fix: establish your naming convention and metadata spreadsheet before you start collecting. Then stick to it.

**Corpus construction is a methodological activity.** Every decision you make about sources, time frame, search terms, and inclusion thresholds shapes what your corpus can support. These are methodological choices that deserve the same scrutiny as any other analytic decision. Fix: discuss and justify these choices in your methodology chapter. Reflect on how different choices might have produced a different corpus.

---

## Key Readings

These works provide methodological foundations for corpus construction and text-based research. Start with whichever is closest to your approach.

- Krippendorff, K. (2018). *Content Analysis: An Introduction to Its Methodology* (4th ed.). Sage. The standard reference for content analysis methodology, including detailed guidance on sampling, unitizing, and recording textual data. Chapter 6 on sampling is especially relevant to corpus construction.

- Stefanowitsch, A. (2020). *Corpus Linguistics: A Guide to the Methodology*. Language Science Press. [DOI: 10.5281/zenodo.3735822](https://doi.org/10.5281/zenodo.3735822){:target="_blank"}. [Free PDF](https://zenodo.org/record/3735822/files/final.pdf){:target="_blank"}. An open-access guide to corpus linguistics methodology. Chapters 3--4 cover corpus design and data collection in detail.

- McEnery, T., & Hardie, A. (2012). *Corpus Linguistics: Method, Theory and Practice*. Cambridge University Press. [DOI: 10.1017/CBO9780511981395](https://doi.org/10.1017/CBO9780511981395){:target="_blank"}. A thorough introduction to corpus-based research, including practical guidance on building and annotating corpora. Useful for students whose work bridges linguistics and social science.

- Brown, M. A., Gruen, A., Maldoff, G., Messing, S., Sanderson, Z., & Zimmer, M. (2025). Web scraping for research. *Big Data & Society*, 12(4). [DOI: 10.1177/20539517251381686](https://doi.org/10.1177/20539517251381686){:target="_blank"}. A practical and ethical guide to web scraping for academic research, covering legal considerations, terms of service, and best practices.

- Lomborg, S., & Bechmann, A. (2014). Using APIs for data collection on social media. *The Information Society*, 30(4), 256--265. [DOI: 10.1080/01972243.2014.915276](https://doi.org/10.1080/01972243.2014.915276){:target="_blank"}. Discusses the methodological implications of using platform APIs for social media data collection, including issues of access, completeness, and representativeness.

---

## Related Methods

Corpus construction is a preparatory step for several analytical methods. Once your corpus is built, you may apply one of these methods.

- **[Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }})**. Analyzing how issues are defined and problems diagnosed. It also tracks how solutions are proposed in textual material.
- **[Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }})**. Examining how language constructs meaning, identity, and power relations within and across texts.

</div>
</div>
