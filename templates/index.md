---
layout: default
title: Templates & Checklists
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#fill-out-a-template">Fill Out a Template</a></li>
<li><a href="#how-to-use-these">How To Use These</a></li>
<li><a href="#research-question-memo">Research Question Memo</a></li>
<li><a href="#thesis-proposal-outline">Thesis Proposal Outline</a></li>
<li><a href="#literature-review-matrix">Literature Review Matrix</a></li>
<li><a href="#data-corpus-plan">Data / Corpus Plan</a></li>
<li><a href="#supervision-meeting-packet">Supervision Meeting Packet</a></li>
<li><a href="#feedback-and-revision-log">Feedback and Revision Log</a></li>
<li><a href="#genai-methods-note">GenAI Methods Note</a></li>
<li><a href="#final-submission-checklist">Final Submission Checklist</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Templates & Checklists

Use these working documents to prepare for supervision. They count as assignments only if your program or supervisor requires them.

---

## Fill Out a Template

<div class="template-builder" data-template-builder markdown="0">
  <div class="template-builder-controls">
    <label for="template-select">Choose a template</label>
    <select id="template-select" data-template-select>
      <option value="research-question">Research Question Memo</option>
      <option value="proposal">Thesis Proposal Outline</option>
      <option value="literature-matrix">Literature Review Matrix</option>
      <option value="data-corpus">Data / Corpus Plan</option>
      <option value="meeting-packet">Supervision Meeting Packet</option>
      <option value="revision-log">Feedback and Revision Log</option>
      <option value="genai-note">GenAI Methods Note</option>
      <option value="final-checklist">Final Submission Checklist</option>
    </select>
  </div>

  <form class="template-form" data-template-form>
    <div class="template-fields" data-template-fields></div>
  </form>

  <div class="template-actions">
    <button type="button" data-template-action="save">Save in browser</button>
    <button type="button" data-template-action="copy">Copy</button>
    <button type="button" data-template-action="download">Download .md</button>
    <button type="button" data-template-action="print">Print</button>
  </div>

  <p class="template-note">Nothing you enter is submitted. Saved drafts stay in this browser only.</p>
  <p class="template-status" data-template-status aria-live="polite"></p>

  <article class="template-output" data-template-output aria-label="Generated template preview"></article>
</div>

<noscript>
Use the static templates below if JavaScript is unavailable.
</noscript>

---

## How To Use These

Pick the template that fits where you are, and keep it short enough for your supervisor to read before a meeting.

- [Research Question Memo](#research-question-memo) while you are still choosing a topic
- [Thesis Proposal Outline](#thesis-proposal-outline) once the project takes shape
- [Literature Review Matrix](#literature-review-matrix) while you are reading but not yet writing
- [Data / Corpus Plan](#data-corpus-plan) when you collect sources, data, or texts
- [Supervision Meeting Packet](#supervision-meeting-packet) before each meeting
- [Feedback and Revision Log](#feedback-and-revision-log) after you receive comments
- [GenAI Methods Note](#genai-methods-note) if you use approved AI or code tools
- [Final Submission Checklist](#final-submission-checklist) before you submit

---

## Research Question Memo

**Purpose:** Narrow a topic into a researchable question before an early supervision meeting.

| Field | Working Answer |
|---|---|
| Topic area |  |
| Case, region, corpus, or population |  |
| Time period |  |
| Research problem |  |
| Provisional research question |  |
| Why this question matters academically |  |
| Key literature or debate |  |
| Likely sources or data |  |
| Likely method |  |
| Main feasibility concern |  |
| Decision needed from supervisor |  |

**Quality check:**

- It can be answered within the word count and deadline
- It names a clear object of analysis
- It can be answered with sources or data you can realistically access
- It implies a method as well as a topic
- The answer is not already obvious

---

## Thesis Proposal Outline

**Purpose:** Turn the memo into a proposal draft.

1. **Tentative title**
2. **Research question**
3. **Research problem and motivation**
4. **Academic debate**
   The literature, disagreement, or gap your thesis enters.
5. **Contribution**
   What your thesis may add, such as a case, source base, comparison, interpretation, method, or empirical finding.
6. **Research design**
   Case selection, corpus boundaries, source selection, and method.
7. **Materials**
   The primary and secondary sources, datasets, archives, interviews, or other evidence you will use.
8. **Ethics and data considerations**
   Human participants, sensitive or protected material, privacy risks, data storage, and any planned AI or code assistance.
9. **Chapter outline**
   A provisional structure, one sentence per chapter.
10. **Timeline**
    Work backward from your program deadline.
11. **Questions for supervision**
    The 2–4 decisions where you need guidance.

**Before sending it:** Check the proposal requirements on your [program page]({{ '/#find-your-program' | relative_url }}) and in Brightspace.

---

## Literature Review Matrix

**Purpose:** Keep your reading tied to the research question, in a form you can draw on when writing.

| Source | Debate / Topic | Main Claim | Method / Evidence | How It Helps My Thesis | Limitation / Question |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

**Synthesis prompts:**

- Which sources define the main debate?
- Which sources disagree with one another?
- Which concepts, theories, or methods recur?
- What is missing, underdeveloped, or contested?
- What does my thesis need to show before the reader will accept my argument?

---

## Data / Corpus Plan {#data-corpus-plan}

**Purpose:** Make source collection transparent before analysis begins.

| Field | Working Answer |
|---|---|
| Research question |  |
| Unit of analysis |  |
| Corpus/data type |  |
| Source locations |  |
| Inclusion criteria |  |
| Exclusion criteria |  |
| Expected size |  |
| Language(s) |  |
| File naming convention |  |
| Metadata fields |  |
| Storage and backup plan |  |
| Quality checks |  |
| Ethical/privacy risks |  |
| AI/code tools planned |  |
| Disclosure needed |  |

**Minimum metadata fields:**

| Field | Example |
|---|---|
| `id` | `kr_news_2026_001` |
| `title` |  |
| `author_or_source` |  |
| `date` |  |
| `language` |  |
| `source_url_or_archive` |  |
| `collection_date` |  |
| `document_type` | news article, speech, policy document, interview transcript |
| `included` | yes / no |
| `exclusion_reason` | duplicate, outside date range, inaccessible, not relevant |
| `notes` |  |

**Quality checks:**

- Check a sample of collected files against the original sources
- Look for empty, duplicate, corrupted, or mislabeled files
- Record every filter, search query, and exclusion rule
- Keep raw files separate from cleaned or translated versions
- Discuss any planned machine translation, scraping, AI, or coding assistance with your supervisor

---

## Supervision Meeting Packet

**Purpose:** Make supervision meetings decision-focused. Send it ahead if your supervisor wants materials in advance.

| Field | Notes |
|---|---|
| Meeting date |  |
| Current thesis stage | topic / proposal / literature review / data collection / analysis / drafting / revision |
| Work completed since last meeting |  |
| Main problem to discuss |  |
| Decisions needed |  |
| Material attached or linked |  |
| Specific feedback requested |  |
| Deadline pressure or risk |  |

**Good supervision questions:**

- Is the research question narrow enough for this thesis?
- Is this source base sufficient and appropriate?
- Does the method match the question?
- Which part of the literature review is still too descriptive?
- Which claim in this draft needs stronger evidence?
- What should I prioritize before the next deadline?

---

## Feedback and Revision Log

**Purpose:** Track what changed after feedback and what still needs a decision.

| Date | Feedback / Issue | Source | Action Taken | Status | Follow-up Question |
|---|---|---|---|---|---|
|  |  | supervisor / peer / self-review |  | open / done / deferred |  |
|  |  | supervisor / peer / self-review |  | open / done / deferred |  |

Use it when you receive detailed comments on a draft, need to show how you handled earlier feedback, or are deciding what to revise first before a resubmission or final revision.

---

## GenAI Methods Note

**Purpose:** Keep a record of approved AI or code assistance. Use it only for uses your supervisor has agreed to in advance (see the [AI Policy]({{ '/ai-policy/' | relative_url }})).

| Field | Notes |
|---|---|
| Tool and version |  |
| Date(s) used |  |
| Task | file organization / conversion / cleaning / coding support / grammar support / translation / documentation |
| Why the task was appropriate |  |
| What material was entered into the tool |  |
| Protected material excluded |  |
| Prompt or script location |  |
| Output location |  |
| Manual checks performed |  |
| Errors corrected |  |
| What was not delegated | interpretation, argument, final claims, source evaluation |

The [AI Policy]({{ '/ai-policy/#disclosure' | relative_url }}) also requires an AI-use statement before the bibliography, even if you used no AI tools, and gives a template for it. Follow the Faculty [GenAI guidance]({{ '/ethics/#generative-ai-policy' | relative_url }}) on disclosure and citation.

---

## Final Submission Checklist

**Purpose:** Catch avoidable submission problems before the deadline.

### Program Requirements

- Confirm the final deadline, time, and submission route in Brightspace or your program materials
- Confirm the word-count rule and any file format or naming rules
- Confirm who must receive the final version
- Confirm whether a Student Thesis Repository upload is required before or after assessment

### Thesis File

- Title page includes required student and thesis information
- Word count is stated and calculated according to program rules
- Table of contents matches headings and page numbers
- Citations and bibliography use one style consistently
- Figures, tables, appendices, and translations are labeled clearly
- The AI-use statement is included and lists any AI, code, or tool assistance
- Any ethics, consent, anonymization, or data-storage commitments are reflected in the methods section
- PDF opens correctly and is not a scanned image unless explicitly required
- File size is below the program limit, if one is stated

### Before Sending

- Search the document for comments, tracked changes, placeholders, and missing references
- Check quotations against the original source
- Check that all bibliography entries are cited, and all cited works appear in the bibliography
- Check page numbers, captions, appendix labels, and cross-references
- Keep a local copy of exactly what you submitted

### Program-Specific Reminders

| Program | Submission Reminder |
|---|---|
| BAIS | Upload via Brightspace or email your supervisor (ask which they prefer), and send the file to [bathesis@hum.leidenuniv.nl](mailto:bathesis@hum.leidenuniv.nl) the same day or in CC. After a passing grade, upload it to the Student Thesis Repository |
| BAKS | Submit both Word and PDF versions to the supervisor by email with [bathesis@hum.leidenuniv.nl](mailto:bathesis@hum.leidenuniv.nl) in CC, unless Brightspace gives updated instructions |
| MAAS | Email the final thesis to your supervisor, second reader, and [MAthesis@hum.leidenuniv.nl](mailto:MAthesis@hum.leidenuniv.nl) |
| MAIR | Email the final thesis to your supervisor with your second reader in CC and ask for confirmation of receipt |

### After Sending

- Save the sent email or upload confirmation
- If confirmation is required and does not arrive, follow up
- After a passing grade, complete any Student Thesis Repository upload required for graduation

</div>
</div>
