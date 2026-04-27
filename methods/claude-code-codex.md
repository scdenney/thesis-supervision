---
layout: default
title: AI & Code
---

# AI & Code

Claude Code, Codex, and similar agentic coding tools are most useful when thesis work becomes file-based: sources in folders, metadata in spreadsheets, scripts that need to run, outputs that need checking, and methods that need documentation. Use them to make the workflow more explicit and reproducible. Do not use them to outsource judgment, interpretation, or final claims.

<div class="workflow-hero" markdown="0">
  <div>
    <p class="section-kicker">Practical lab</p>
    <h2>Use AI tools where they make the research process clearer</h2>
    <p>Good use is procedural and inspectable: organize files, clean text, write scripts, test outputs, and document what changed. Bad use hides analysis behind generated claims you cannot defend.</p>
  </div>
  <a class="hero-action" href="https://scdenney.github.io/corpus-building/">Open Corpus Building Wizard</a>
</div>

## Choose a Workflow

<div class="workflow-grid" markdown="0">
  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-folder">
    <span class="method-type">No code required</span>
    <h3>Organize sources</h3>
    <p>Create a folder structure, naming convention, metadata sheet, and evidence log before analysis begins.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-corpus">
    <span class="method-type">Corpus pipeline</span>
    <h3>Convert and clean files</h3>
    <p>Use scripts for repetitive work: OCR checks, PDF-to-text conversion, header removal, deduplication, and word counts.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-script">
    <span class="method-type">Code support</span>
    <h3>Build or debug scripts</h3>
    <p>Ask the tool to inspect errors, add tests, explain a script, or make a pipeline easier to rerun.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-disclosure">
    <span class="method-type">Methods documentation</span>
    <h3>Audit the process</h3>
    <p>Check whether prompts, scripts, outputs, exclusions, and transformations are documented well enough for a methods chapter.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>
</div>

## Starter Prompts

Use these as starting points. Replace bracketed text with your actual project details.

<div class="prompt-grid" markdown="0">
  <article class="prompt-card">
    <div class="prompt-card-header">
      <h3>Set up a research folder</h3>
      <button class="copy-button" type="button" data-copy-target="prompt-folder">Copy</button>
    </div>
<pre id="prompt-folder"><code>I am writing a thesis on [topic]. Help me set up a transparent research folder for sources, metadata, notes, scripts, outputs, and documentation. Suggest a folder structure, file naming convention, and metadata columns. Do not analyze the sources yet. Focus on organization and reproducibility.</code></pre>
  </article>

  <article class="prompt-card">
    <div class="prompt-card-header">
      <h3>Plan a corpus workflow</h3>
      <button class="copy-button" type="button" data-copy-target="prompt-corpus">Copy</button>
    </div>
<pre id="prompt-corpus"><code>I have [number/type] source files about [topic] from [source/database] covering [date range]. Help me design a corpus-building workflow. I need inclusion/exclusion rules, metadata fields, file organization, quality checks, and a short methods note explaining the workflow. Ask clarifying questions before proposing scripts.</code></pre>
  </article>

  <article class="prompt-card">
    <div class="prompt-card-header">
      <h3>Check a script</h3>
      <button class="copy-button" type="button" data-copy-target="prompt-script">Copy</button>
    </div>
<pre id="prompt-script"><code>Inspect this script as a research workflow, not just as code. Explain what each step does, identify assumptions, list possible failure points, and suggest validation checks. Do not change the analytical logic unless you explain why.</code></pre>
  </article>

  <article class="prompt-card">
    <div class="prompt-card-header">
      <h3>Document AI assistance</h3>
      <button class="copy-button" type="button" data-copy-target="prompt-disclosure">Copy</button>
    </div>
<pre id="prompt-disclosure"><code>Help me draft a transparent methods note describing how AI/code tools supported my workflow. Include what the tool helped with, what I checked manually, what I did not delegate, and where scripts or prompts are stored. Keep the wording factual and concise.</code></pre>
  </article>
</div>

## Responsible Use Checklist

Before you rely on an AI/code-assisted workflow, make sure you can answer all of the following:

- Can you explain what the tool did and why that step was appropriate?
- Are prompts, scripts, outputs, and manual corrections stored somewhere you can revisit?
- Did you verify a sample of outputs against the original sources?
- Are corpus boundaries, exclusions, and transformations documented?
- Is the final interpretation yours, grounded in evidence you checked?
- Have you discussed the planned use with your supervisor and followed the relevant [Ethics & AI policy]({{ '/ethics/' | relative_url }}) for permission, disclosure, and academic integrity?

## Good Division of Labor

| Human researcher decides | Tool can assist with |
|---|---|
| Research question, theory, cases, corpus boundaries, interpretation, final claims | Folder setup, metadata templates, batch conversion, script drafting, debugging, validation checks, documentation drafts |

The standard is simple: if the work shapes the argument, you must understand and defend it. If the work is repetitive, procedural, or technical, the tool can help, but you still verify the result.

## Where To Go Next

<div class="route-card-grid" markdown="0">
  <a class="route-card" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <span class="route-label">Before analysis</span>
    <h3>Building a Corpus</h3>
    <p>Use this if the challenge is selecting, bounding, collecting, and documenting source material.</p>
  </a>

  <a class="route-card" href="{{ '/methods/quantitative/' | relative_url }}">
    <span class="route-label">Computational route</span>
    <h3>Computational &amp; Quantitative</h3>
    <p>Move here when you are ready to preprocess text or run a scalable analysis.</p>
  </a>

  <a class="route-card accent-route-card" href="https://scdenney.github.io/corpus-building/">
    <span class="route-label">Interactive companion</span>
    <h3>Corpus Building Wizard</h3>
    <p>Use the companion wizard if you need a concrete starter kit for Claude Code or Codex.</p>
  </a>
</div>
