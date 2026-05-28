---
layout: default
title: AI & Code
---

# AI & Code

Claude Code, Codex, and similar coding agents become useful once thesis work turns file-based. At that stage you have source folders, metadata sheets, scripts, and outputs that need checking against the originals. Methods documentation belongs in the same workflow. The point is inspection and rerunning. Judgment and final interpretive claims stay with you.

<div class="workflow-hero" markdown="0">
  <div>
    <p class="section-kicker">Practical lab</p>
    <h2>Use AI tools where they make the research process clearer</h2>
    <p>Use these tools for work you can inspect: file organization, text cleanup, scripts, tests, and change logs. Avoid analysis you cannot defend.</p>
  </div>
  <a class="hero-action" href="https://scdenney.github.io/corpus-building/">Open Corpus Building Wizard</a>
</div>

## Choose a Workflow

<div class="workflow-grid" markdown="0">
  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-folder">
    <span class="method-type">No code required</span>
    <h3>Organize sources</h3>
    <p>Create the folder structure before analysis begins. Add naming rules, metadata fields, and an evidence log.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-corpus">
    <span class="method-type">Corpus pipeline</span>
    <h3>Convert and clean files</h3>
    <p>Treat OCR checks, PDF-to-text conversion, header removal, and deduplication as routine scripted steps.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-script">
    <span class="method-type">Code support</span>
    <h3>Build or debug scripts</h3>
    <p>Ask the tool to inspect errors and add tests. It can also explain a script or make a pipeline easier to rerun.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>

  <button class="workflow-card workflow-action" type="button" data-workflow-target="prompt-disclosure">
    <span class="method-type">Methods documentation</span>
    <h3>Audit the process</h3>
    <p>Check whether the record would hold up in a methods chapter. Prompts, scripts, outputs, and exclusions need to be traceable.</p>
    <span class="workflow-action-label">Jump to prompt</span>
  </button>
</div>

## Starter Prompts

Treat these as starting points. Replace the bracketed text with your actual project details.

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
<pre id="prompt-script"><code>Inspect this script as a research workflow. Treat the code as one part of that workflow. Explain what each step does, identify assumptions, list possible failure points, and suggest validation checks. Do not change the analytical logic unless you explain why.</code></pre>
  </article>

  <article class="prompt-card">
    <div class="prompt-card-header">
      <h3>Document AI assistance</h3>
      <button class="copy-button" type="button" data-copy-target="prompt-disclosure">Copy</button>
    </div>
<pre id="prompt-disclosure"><code>Help me draft a transparent methods note describing how AI/code tools supported my workflow. Include what the tool helped with, what I checked manually, what remained my responsibility, and where scripts or prompts are stored. Keep the wording factual and concise.</code></pre>
  </article>
</div>

## Responsible Use Checklist

Before you rely on any AI- or code-assisted workflow, you should be able to answer these questions.

- Can you explain what the tool did and why that step was appropriate?
- Are prompts, scripts, outputs, and manual corrections stored in a place you can revisit?
- Did you verify a sample of outputs against the original sources?
- Are the corpus boundaries documented, along with any exclusions and transformations applied along the way?
- Is the final interpretation yours, grounded in evidence you checked?
- Have you discussed the planned use with your supervisor and followed the relevant [Ethics & AI policy]({{ '/ethics/' | relative_url }}) on permission and disclosure (and the broader academic-integrity expectations)?

## Good Division of Labor

| Human researcher decides | Tool can assist with |
|---|---|
| Research question, theory, cases, corpus boundaries, interpretation, final claims | Folder setup, metadata templates, batch conversion, script drafting, debugging, validation checks, documentation drafts |

The standard is simple. If the work shapes the argument, you have to understand and defend it. For repetitive or procedural tasks, the tool can help. Verification is still on you.

## Where To Go Next

<div class="route-card-grid" markdown="0">
  <a class="route-card" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <span class="route-label">Before analysis</span>
    <h3>Building a Corpus</h3>
    <p>Use this if the challenge is choosing source material, setting corpus boundaries, collecting files, or documenting the result.</p>
  </a>

  <a class="route-card" href="{{ '/methods/quantitative/' | relative_url }}">
    <span class="route-label">Computational route</span>
    <h3>Computational &amp; Quantitative</h3>
    <p>Go here once you are ready to preprocess text or run a scalable analysis.</p>
  </a>

  <a class="route-card accent-route-card" href="https://scdenney.github.io/corpus-building/">
    <span class="route-label">Interactive companion</span>
    <h3>Corpus Building Wizard</h3>
    <p>Open the companion wizard when you need a starter kit for Claude Code or Codex.</p>
  </a>
</div>
