---
layout: default
title: Methods Guide
---

# Methods Guide

Start here when the hard part is choosing, justifying, or operationalizing a method. The aim is not to pick a label first; it is to match your research question, material, and workflow to a defensible analytical path.

<section class="method-router method-router-visual" aria-labelledby="method-router-title"
  data-route-corpus="{{ '/methods/building-a-corpus' | relative_url }}"
  data-route-qualitative="{{ '/methods/qualitative/' | relative_url }}"
  data-route-computational="{{ '/methods/quantitative/' | relative_url }}"
  data-route-ai="{{ '/methods/claude-code-codex' | relative_url }}"
  markdown="0">
  <div class="method-router-copy">
    <p class="section-kicker">Methods chooser</p>
    <h2 id="method-router-title">Find the right first move</h2>
    <p>Answer three questions. The result points you to the part of the methods resource that should come first.</p>
    <span class="method-visual-large" data-method-visual="chooser" aria-hidden="true"></span>
  </div>

  <div class="method-router-controls">
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
  </div>
</section>

## Browse Method Cards

<div class="method-filter-bar" role="group" aria-label="Filter method cards" markdown="0">
  <button class="is-active" type="button" data-method-filter="all">All</button>
  <button type="button" data-method-filter="workflow">Workflow</button>
  <button type="button" data-method-filter="qualitative">Qualitative</button>
  <button type="button" data-method-filter="computational">Computational</button>
  <button type="button" data-method-filter="ai">AI &amp; Code</button>
</div>

<div class="method-card-grid method-card-grid-expanded" markdown="0">
  <a class="method-card method-card-feature" data-method-groups="workflow corpus computational" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <span class="method-visual" data-method-visual="corpus" aria-hidden="true"></span>
    <span class="method-type">Workflow</span>
    <h3>Building a Corpus</h3>
    <p>Use first when the project depends on collecting, bounding, organizing, and documenting a body of texts.</p>
    <span class="tag-list">sources · metadata · sampling</span>
  </a>

  <a class="method-card" data-method-groups="qualitative cases" href="{{ '/methods/qualitative/comparative-case-study' | relative_url }}">
    <span class="method-visual" data-method-visual="compare" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Comparative Case Study</h3>
    <p>Use when the research question depends on systematic comparison across cases.</p>
    <span class="tag-list">cases · comparison · BA/MA</span>
  </a>

  <a class="method-card" data-method-groups="qualitative cases causal" href="{{ '/methods/qualitative/process-tracing' | relative_url }}">
    <span class="method-visual" data-method-visual="trace" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Process Tracing</h3>
    <p>Use when you need to test or reconstruct a causal mechanism within a case.</p>
    <span class="tag-list">causal · evidence tests · MA-ready</span>
  </a>

  <a class="method-card" data-method-groups="qualitative texts" href="{{ '/methods/qualitative/framing-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="frame" aria-hidden="true"></span>
    <span class="method-type">Qualitative / mixed</span>
    <h3>Framing Analysis</h3>
    <p>Use when the project asks how an issue is presented, emphasized, or categorized in texts.</p>
    <span class="tag-list">media · texts · coding</span>
  </a>

  <a class="method-card" data-method-groups="qualitative texts theory" href="{{ '/methods/qualitative/discourse-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="discourse" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Discourse Analysis</h3>
    <p>Use when language, identity, power, and meaning-making are central to the claim.</p>
    <span class="tag-list">interpretive · theory-heavy · texts</span>
  </a>

  <a class="method-card" data-method-groups="workflow computational" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <span class="method-visual" data-method-visual="preprocess" aria-hidden="true"></span>
    <span class="method-type">Computational prep</span>
    <h3>Preprocessing</h3>
    <p>Use before topic models, sentiment analysis, embeddings, or any reproducible text pipeline.</p>
    <span class="tag-list">cleanup · text-as-data · reproducibility</span>
  </a>

  <a class="method-card" data-method-groups="computational texts" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="topics" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Topic Analysis</h3>
    <p>Use to discover and compare clusters of themes across a larger document collection.</p>
    <span class="tag-list">themes · scale · validation</span>
  </a>

  <a class="method-card" data-method-groups="computational texts" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="sentiment" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Sentiment Analysis</h3>
    <p>Use when the project needs a defensible measure of evaluative tone or affect.</p>
    <span class="tag-list">tone · dictionaries · classifiers</span>
  </a>

  <a class="method-card" data-method-groups="computational texts advanced" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <span class="method-visual" data-method-visual="embeddings" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Word Embeddings</h3>
    <p>Use when semantic similarity, contextual meaning, or model-based representation matters.</p>
    <span class="tag-list">semantics · vectors · advanced</span>
  </a>

  <a class="method-card method-card-feature" data-method-groups="workflow ai computational qualitative" href="{{ '/methods/claude-code-codex' | relative_url }}">
    <span class="method-visual" data-method-visual="ai" aria-hidden="true"></span>
    <span class="method-type">AI &amp; Code</span>
    <h3>Claude Code &amp; Codex</h3>
    <p>Use when the challenge is source organization, scripting, cleanup, checking, or documenting a workflow.</p>
    <span class="tag-list">agents · scripts · disclosure</span>
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
