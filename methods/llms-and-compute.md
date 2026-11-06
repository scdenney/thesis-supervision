---
layout: default
title: LLMs and Compute
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#do-you-need-it">Do You Need It?</a></li>
<li><a href="#what-you-may-upload">What You May Upload</a></li>
<li><a href="#choose-a-route">Choose a Route</a></li>
<li><a href="#check-and-report">Check and Report</a></li>
<li><a href="#request-help">Request Help</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# LLMs and Compute

Some projects need a large language model (LLM) or a graphics processor (GPU) to turn scanned pages into text or to label thousands of documents. Most theses do not. This page helps you decide whether you need one and ask for help setting it up.

---

## Do You Need It? {#do-you-need-it}

Work through these questions in order.

1. **Are your question and corpus settled?** A tool cannot replace [a research question]({{ '/methods/puzzles-and-questions' | relative_url }}) or [a corpus plan]({{ '/methods/building-a-corpus' | relative_url }}).
2. **Is your text already digital?** If so, extract it with a script. You do not need an LLM. See [Using Computational Tools]({{ '/methods/building-a-corpus#using-computational-tools' | relative_url }}).
3. **Can you read it yourself?** A corpus of under 100 texts can usually be handled by hand.
4. **Can you check the output?** If you have no way to tell whether a result is right, do not use the tool yet.

| Task | Example | How to check it |
|---|---|---|
| **OCR** | Turning scanned newspapers from the 1970s into text | Compare a sample with your own transcription and report the error rate |
| **Classification** | Labeling thousands of articles by frame or topic | Label a sample by hand and report agreement |
| **Extraction** | Pulling names and dates out of documents | Check a sample against the original documents |
| **Embeddings** | Finding similar passages across a corpus | Read the passages the tool returns |

---

## What You May Upload {#what-you-may-upload}

This decides your route, so settle it first. The [Faculty guidelines]({{ '/ethics/#generative-ai-policy' | relative_url }}) prohibit giving GenAI tools source material or data that should stay confidential for reasons of privacy, security, copyright, or intellectual property. Permission from a teacher does not change this rule, and neither does a privacy setting in the tool.

| Your material | Route |
|---|---|
| **Copyrighted or licensed:** newspaper and database text, books, most articles | Local models only (AI2 or ALICE) |
| **Personal or sensitive:** interviews, identifiable data | Local models only, after checking [Ethics]({{ '/ethics/' | relative_url }}) |
| **Public domain or openly licensed** | Any route, including a cloud API |

If you are not sure, treat the material as protected and ask. A local model keeps your text off outside servers, but database licenses can still limit bulk downloads and text mining. Check the license before you collect, and ask the [University Library](https://www.library.universiteitleiden.nl/) if the terms are unclear.

---

## Choose a Route {#choose-a-route}

| Route | What it is | Best for | How to get access |
|---|---|---|---|
| **Your laptop** | Scripts or Orange | Digital text and small corpora | Nothing needed |
| **Cloud API** | A commercial model such as Claude or GPT, through a paid connection | Unprotected material, up to a few thousand pages | Your own budget, plus an agreement with your supervisor |
| **AI2** | A shared Digital Humanities lab workstation with one 24 GB GPU, running local models | Protected material, from hundreds to several thousand pages | Request below |
| **ALICE** | Leiden's computing cluster. You submit jobs to a queue. | Large jobs, usually over 1,000 pages | Request below |
| **Humanities Hub labs** | The Digital Lab and AI Lab, with workstations and staff who can advise | Trying tools before you commit | Contact [digital-lab@hum.leidenuniv.nl](mailto:digital-lab@hum.leidenuniv.nl) |

**On ALICE.** Students need their supervisor's confirmation for an account. It lasts until the end of the semester by default and can be extended with your supervisor's confirmation. The account and data are deleted four months after it expires, so back up your work. See [Getting an account on ALICE](https://pubappslu.atlassian.net/wiki/spaces/HPCWIKI/pages/37519441/Getting+an+account+on+ALICE){:target="_blank"}.

**On LUCA.** The Faculty's [staff guidelines](https://www.organisatiegids.universiteitleiden.nl/binaries/content/assets/geesteswetenschappen/reglementen/2026-2027/20260901_guidelines-use-of-genai_staff_fgw-def.pdf){:target="_blank"} name the university's LUCA platform as the preferred source of safe AI tools. Ask whether it suits your task.

**Setting up.** These resources cover the practical steps.

- The [Corpus Building Wizard](https://scdenney.github.io/corpus-building/){:target="_blank"} asks about your project and returns a starter kit. Its cloud route applies only to material you may upload.
- [AI for Research](https://scdenney.github.io/ai-for-research/){:target="_blank"} has a setup walkthrough and demonstrations.
- The [Open Science Skills](https://scdenney.github.io/ai-for-research/skills/){:target="_blank"} library has procedures for OCR and text classification.

---

## Check and Report {#check-and-report}

An LLM is a method, so your thesis has to justify it and show that it worked. Agree on the use with your supervisor first, as [Working with AI]({{ '/ai-policy/#the-policy' | relative_url }}) requires.

- **Test on a small sample** before you run the full corpus. Fix problems there.
- **Measure quality** against a sample you checked by hand, and report the result.
- **Record the details.** Note the tool, model version, prompt, settings, and date, since results can change when any of these do.
- **Keep the raw material.** Store original files and raw outputs apart from cleaned versions, and keep your prompts.
- **Report and disclose.** Describe the procedure in your methods chapter and list it in your [AI-use statement]({{ '/ai-policy/#disclosure' | relative_url }}).

The analysis stays yours. You decide what to include and what the results show.

---

## Request Help {#request-help}

If your project needs corpus building or another form of LLM use, fill in this form. It is for students I supervise and for students writing an ambitious course paper. If someone else supervises your thesis, talk to them first.

**Send request** opens an email to me, with Chris Handy (Faculty of Humanities IT) in cc. We will reply about the route and what you need to set it up. A request is not yet an agreement to use AI. I will confirm that in writing.

<div class="template-builder" data-template-builder data-email-to="s.c.denney@hum.leidenuniv.nl" data-email-cc="c.a.handy@hum.leidenuniv.nl" markdown="0">
  <div class="template-builder-controls" hidden>
    <label for="template-select">Template</label>
    <select id="template-select" data-template-select>
      <option value="compute-request">Corpus and LLM Request</option>
    </select>
  </div>

  <form class="template-form" data-template-form>
    <div class="template-fields" data-template-fields></div>
  </form>

  <div class="template-actions">
    <button type="button" data-template-action="email">Send request</button>
    <button type="button" data-template-action="save">Save in browser</button>
    <button type="button" data-template-action="copy">Copy</button>
    <button type="button" data-template-action="download">Download .md</button>
  </div>

  <p class="template-note">Nothing is sent until you press send in your email program. Long requests are copied to your clipboard, so paste them into the email. If the button does not work, copy the request and email it to s.c.denney@hum.leidenuniv.nl, with c.a.handy@hum.leidenuniv.nl in cc.</p>
  <p class="template-status" data-template-status aria-live="polite"></p>

  <article class="template-output" data-template-output aria-label="Generated request preview"></article>
</div>

<noscript>
Email s.c.denney@hum.leidenuniv.nl, with c.a.handy@hum.leidenuniv.nl in cc. Describe your project, your documents and their copyright status, what you want the tool to do, and your deadline.
</noscript>

</div>
</div>
