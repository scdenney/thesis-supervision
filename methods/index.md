---
layout: default
title: Methods Guide
---

# Methods Guide

Use this page when you need to choose, justify, or operationalize a method. The detailed guides are still here, but the first task is simpler: identify what kind of research material you have, what kind of claim you want to make, and whether you need a human interpretive workflow, a computational workflow, or both.

<section class="method-router" aria-labelledby="method-router-title"
  data-route-corpus="{{ '/methods/building-a-corpus' | relative_url }}"
  data-route-qualitative="{{ '/methods/qualitative/' | relative_url }}"
  data-route-computational="{{ '/methods/quantitative/' | relative_url }}"
  data-route-ai="{{ '/methods/claude-code-codex' | relative_url }}"
  markdown="0">
  <div class="method-router-copy">
    <p class="section-kicker">Methods chooser</p>
    <h2 id="method-router-title">Find a starting point</h2>
    <p>Answer three questions. The recommendation is not a substitute for supervisory advice, but it will get you to the right part of the resource faster.</p>
  </div>

  <form class="method-router-form" data-method-router>
    <label>
      <span>What is your main material?</span>
      <select name="material">
        <option value="">Choose one</option>
        <option value="texts">Texts, documents, media, speeches, or posts</option>
        <option value="cases">Cases, events, policies, or institutions</option>
        <option value="interviews">Interviews, field notes, or primary qualitative data</option>
        <option value="numbers">Survey data, statistics, or numeric datasets</option>
        <option value="unsure">I am not sure yet</option>
      </select>
    </label>

    <label>
      <span>What do you need to do first?</span>
      <select name="goal">
        <option value="">Choose one</option>
        <option value="collect">Collect, bound, or organize sources</option>
        <option value="interpret">Interpret meaning, frames, discourse, or themes</option>
        <option value="explain">Explain why something happened</option>
        <option value="measure">Measure patterns across many documents</option>
        <option value="workflow">Use AI/code tools to build a workflow</option>
      </select>
    </label>

    <label>
      <span>How comfortable are you with code?</span>
      <select name="code">
        <option value="">Choose one</option>
        <option value="none">No coding experience</option>
        <option value="some">Some scripts or notebooks</option>
        <option value="comfortable">Comfortable with Python, R, or command line</option>
      </select>
    </label>
  </form>

  <div class="router-result" data-router-result aria-live="polite">
    <span class="result-label">Recommended first stop</span>
    <h3 data-router-title>Start with corpus planning</h3>
    <p data-router-copy>If you are unsure, begin by defining what you will collect and why. Most method problems become clearer once the corpus, cases, or data source is bounded.</p>
    <a data-router-link href="{{ '/methods/building-a-corpus' | relative_url }}">Open Building a Corpus</a>
  </div>
</section>

## Core Routes

<div class="route-card-grid" markdown="0">
  <a class="route-card" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <span class="route-label">Start here for text-based projects</span>
    <h3>Building a Corpus</h3>
    <p>Define sources, search strategy, inclusion rules, metadata, file organization, and documentation before analysis begins.</p>
  </a>

  <a class="route-card" href="{{ '/methods/qualitative/' | relative_url }}">
    <span class="route-label">Close reading and cases</span>
    <h3>Qualitative Approaches</h3>
    <p>Comparative case study, process tracing, framing analysis, and discourse analysis.</p>
  </a>

  <a class="route-card" href="{{ '/methods/quantitative/' | relative_url }}">
    <span class="route-label">Programmatic text analysis</span>
    <h3>Computational &amp; Quantitative</h3>
    <p>Preprocessing, topic analysis, sentiment analysis, word embeddings, and related DH resources.</p>
  </a>

  <a class="route-card accent-route-card" href="{{ '/methods/claude-code-codex' | relative_url }}">
    <span class="route-label">Workflow support</span>
    <h3>AI &amp; Code</h3>
    <p>Use Claude Code, Codex, and related tools to organize files, clean text, write scripts, check outputs, and document work.</p>
  </a>
</div>

## Method Cards

<div class="method-card-grid" markdown="0">
  <a class="method-card" href="{{ '/methods/qualitative/comparative-case-study' | relative_url }}">
    <span class="method-type">Qualitative</span>
    <h3>Comparative Case Study</h3>
    <p>Use when the research question depends on systematic comparison across cases.</p>
    <span class="tag-list">cases · comparison · BA/MA</span>
  </a>

  <a class="method-card" href="{{ '/methods/qualitative/process-tracing' | relative_url }}">
    <span class="method-type">Qualitative</span>
    <h3>Process Tracing</h3>
    <p>Use when you need to test or reconstruct a causal mechanism within a case.</p>
    <span class="tag-list">causal · evidence tests · MA-ready</span>
  </a>

  <a class="method-card" href="{{ '/methods/qualitative/framing-analysis' | relative_url }}">
    <span class="method-type">Qualitative / mixed</span>
    <h3>Framing Analysis</h3>
    <p>Use when the project asks how an issue is presented, emphasized, or categorized in texts.</p>
    <span class="tag-list">media · texts · coding</span>
  </a>

  <a class="method-card" href="{{ '/methods/qualitative/discourse-analysis' | relative_url }}">
    <span class="method-type">Qualitative</span>
    <h3>Discourse Analysis</h3>
    <p>Use when language, identity, power, and meaning-making are central to the claim.</p>
    <span class="tag-list">interpretive · theory-heavy · texts</span>
  </a>

  <a class="method-card" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <span class="method-type">Computational prep</span>
    <h3>Preprocessing</h3>
    <p>Use before topic models, sentiment analysis, embeddings, or any reproducible text pipeline.</p>
    <span class="tag-list">cleanup · text-as-data · reproducibility</span>
  </a>

  <a class="method-card" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <span class="method-type">Computational</span>
    <h3>Topic Analysis</h3>
    <p>Use to discover and compare clusters of themes across a larger document collection.</p>
    <span class="tag-list">themes · scale · validation</span>
  </a>

  <a class="method-card" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <span class="method-type">Computational</span>
    <h3>Sentiment Analysis</h3>
    <p>Use when the project needs a defensible measure of evaluative tone or affect.</p>
    <span class="tag-list">tone · dictionaries · classifiers</span>
  </a>

  <a class="method-card" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <span class="method-type">Computational</span>
    <h3>Word Embeddings</h3>
    <p>Use when semantic similarity, contextual meaning, or model-based representation matters.</p>
    <span class="tag-list">semantics · vectors · advanced</span>
  </a>
</div>

## Other Methods To Consider

These are not covered in depth yet, but may be the right choice depending on the project:

<div class="methods-alt-table" markdown="1">

| Method | Brief description | Common in |
|--------|-------------------|-----------|
| **Qualitative interviewing + thematic analysis** | Semi-structured interviews analyzed for recurring themes and patterns | All programs, especially fieldwork-based theses |
| **Content analysis** | Systematic coding and categorization of textual material; can be quantitative or qualitative | IR, media-adjacent topics |
| **Survey methods / quantitative analysis** | Statistical analysis of original or secondary survey data | MAIR especially, BAIS with quantitative focus |
| **Archival research** | Systematic analysis of historical documents, government records, correspondence | Korean Studies, history-focused MAAS theses |

</div>

<div class="methods-alt-mobile" markdown="0">
  <article class="method-summary-card">
    <h3>Qualitative interviewing + thematic analysis</h3>
    <p>Semi-structured interviews analyzed for recurring themes and patterns.</p>
    <strong>Common in</strong>
    <p>All programs, especially fieldwork-based theses.</p>
  </article>

  <article class="method-summary-card">
    <h3>Content analysis</h3>
    <p>Systematic coding and categorization of textual material; can be quantitative or qualitative.</p>
    <strong>Common in</strong>
    <p>IR, media-adjacent topics.</p>
  </article>

  <article class="method-summary-card">
    <h3>Survey methods / quantitative analysis</h3>
    <p>Statistical analysis of original or secondary survey data.</p>
    <strong>Common in</strong>
    <p>MAIR especially, BAIS with quantitative focus.</p>
  </article>

  <article class="method-summary-card">
    <h3>Archival research</h3>
    <p>Systematic analysis of historical documents, government records, correspondence.</p>
    <strong>Common in</strong>
    <p>Korean Studies, history-focused MAAS theses.</p>
  </article>
</div>

For general planning, see [Getting Started - Step 4: Building Your Analytical Framework]({{ '/getting-started/#step-4' | relative_url }}). For assessment, see [Assessment Standards - Application of Knowledge]({{ '/assessment-standards/#application-of-knowledge' | relative_url }}).
