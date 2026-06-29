---
layout: default
title: Methods Guide
---

# Methods Guide

Start here when the method is still unsettled. Choose the method by asking what evidence you have and what claim you want to make.

<section class="method-router method-router-visual" aria-labelledby="method-router-title"
  data-route-corpus="{{ '/methods/building-a-corpus' | relative_url }}"
  data-route-qualitative="{{ '/methods/qualitative/' | relative_url }}"
  data-route-computational="{{ '/methods/quantitative/' | relative_url }}"
  markdown="0">
  <div class="method-router-copy">
    <p class="section-kicker">Method selection</p>
    <h2 id="method-router-title">Match your project to a method</h2>
    <p>Answer the questions below and use the result as a place to begin.</p>
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
        <span>What is your main analytical task?</span>
        <select name="goal">
          <option value="">Choose one</option>
          <option value="collect">Collect and bound sources</option>
          <option value="interpret">Interpret meaning, frames, discourse, or themes</option>
          <option value="explain">Explain why something happened</option>
          <option value="measure">Measure patterns across many documents</option>
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
      <span class="result-label">Your starting point</span>
      <h3 data-router-title>Answer a question to begin</h3>
      <p data-router-copy>Choose an option above and a recommended section will appear here. Not sure yet? Browse the method cards below.</p>
      <a data-router-link href="#browse-method-cards">Browse method cards</a>
    </div>
  </div>
</section>

## Browse Method Cards

<div class="method-filter-bar" role="group" aria-label="Filter method cards" markdown="0">
  <button class="is-active" type="button" data-method-filter="all">All</button>
  <button type="button" data-method-filter="workflow">Workflow</button>
  <button type="button" data-method-filter="qualitative">Qualitative</button>
  <button type="button" data-method-filter="computational">Computational</button>
</div>

<div class="method-card-grid method-card-grid-expanded" markdown="0">
  <a class="method-card method-card-feature" data-method-groups="workflow corpus computational" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <span class="method-visual" data-method-visual="corpus" aria-hidden="true"></span>
    <span class="method-type">Workflow</span>
    <h3>Building a Corpus</h3>
    <p>Start here if the archive, search terms, or inclusion rules are still fuzzy.</p>
    <span class="tag-list">sources · metadata · sampling</span>
  </a>

  <a class="method-card" data-method-groups="qualitative cases" href="{{ '/methods/qualitative/comparative-case-study' | relative_url }}">
    <span class="method-visual" data-method-visual="compare" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Comparative Case Study</h3>
    <p>For two or more cases that share enough context to make their differences count.</p>
    <span class="tag-list">cases · comparison · BA/MA</span>
  </a>

  <a class="method-card" data-method-groups="qualitative cases causal" href="{{ '/methods/qualitative/process-tracing' | relative_url }}">
    <span class="method-visual" data-method-visual="trace" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Process Tracing</h3>
    <p>For questions where timing matters and each link in the causal chain needs evidence.</p>
    <span class="tag-list">causal · evidence tests · MA-ready</span>
  </a>

  <a class="method-card" data-method-groups="qualitative texts" href="{{ '/methods/qualitative/framing-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="frame" aria-hidden="true"></span>
    <span class="method-type">Qualitative / mixed</span>
    <h3>Framing Analysis</h3>
    <p>For projects about how an issue is packaged in headlines, speeches, or policy text.</p>
    <span class="tag-list">media · texts · coding</span>
  </a>

  <a class="method-card" data-method-groups="qualitative texts theory" href="{{ '/methods/qualitative/discourse-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="discourse" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3>Discourse Analysis</h3>
    <p>For claims about how language builds identities or turns one view into common sense.</p>
    <span class="tag-list">interpretive · theory-heavy · texts</span>
  </a>

  <a class="method-card" data-method-groups="workflow computational" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <span class="method-visual" data-method-visual="preprocess" aria-hidden="true"></span>
    <span class="method-type">Computational prep</span>
    <h3>Preprocessing</h3>
    <p>Decide what counts as a token and what gets dropped. Document each choice.</p>
    <span class="tag-list">cleanup · text-as-data · reproducibility</span>
  </a>

  <a class="method-card" data-method-groups="computational texts" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="topics" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Topic Analysis</h3>
    <p>A first map of a large corpus. The model points to clusters. You still name them.</p>
    <span class="tag-list">themes · scale · validation</span>
  </a>

  <a class="method-card" data-method-groups="computational texts" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <span class="method-visual" data-method-visual="sentiment" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Sentiment Analysis</h3>
    <p>Useful when tone matters and the score can be checked against your own texts.</p>
    <span class="tag-list">tone · dictionaries · classifiers</span>
  </a>

  <a class="method-card" data-method-groups="computational texts advanced" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <span class="method-visual" data-method-visual="embeddings" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3>Word Embeddings</h3>
    <p>For similarity, conceptual drift, or retrieval when keyword searches are too brittle.</p>
    <span class="tag-list">semantics · vectors · advanced</span>
  </a>
</div>

## Other Methods To Consider

These methods are only sketched here. Some projects will still need one of them.

<div class="methods-alt-table" markdown="1">

| Method | Brief description | Common in |
|--------|-------------------|-----------|
| **Qualitative interviewing + thematic analysis** | Semi-structured interviews coded for repeated themes | All programs, especially fieldwork-based theses |
| **Content analysis** | Rule-based coding of textual material, quantitative or qualitative | IR, media-adjacent topics |
| **Survey methods / quantitative analysis** | Statistical analysis of original or secondary survey data | MAIR especially, BAIS with quantitative focus |
| **Archival research** | Close reading of historical documents and official records | Korean Studies, history-focused MAAS theses |

</div>

<div class="methods-alt-mobile" markdown="0">
  <article class="method-summary-card">
    <h3>Qualitative interviewing + thematic analysis</h3>
    <p>Semi-structured interviews coded for repeated themes.</p>
    <strong>Common in</strong>
    <p>All programs, especially fieldwork-based theses.</p>
  </article>

  <article class="method-summary-card">
    <h3>Content analysis</h3>
    <p>Rule-based coding of textual material. Can be quantitative or qualitative.</p>
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
    <p>Close reading of historical documents and official records.</p>
    <strong>Common in</strong>
    <p>Korean Studies, history-focused MAAS theses.</p>
  </article>
</div>

For general planning, see [Getting Started, Step 4: Building Your Analytical Framework]({{ '/getting-started/#step-4' | relative_url }}). For assessment, see [Assessment Standards, Application of Knowledge]({{ '/assessment-standards/#application-of-knowledge' | relative_url }}).
