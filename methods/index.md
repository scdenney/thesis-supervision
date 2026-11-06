---
layout: default
title: Methods Guide
---

# Methods Guide

Start here if you have not settled on a method. Choose one by asking what evidence you have and what claim you want to make.

<div class="question-banner" markdown="0">
  <div class="question-banner-copy">
    <strong>No research question yet?</strong>
    <p>A method answers a question, so start with your puzzle, your question, and its rival answers.</p>
  </div>
  <a href="{{ '/methods/puzzles-and-questions' | relative_url }}">Go to Puzzles and Questions</a>
</div>

<section class="method-router method-router-visual" aria-labelledby="method-router-title"
  data-route-question="{{ '/methods/puzzles-and-questions' | relative_url }}"
  data-route-review="{{ '/methods/literature-review' | relative_url }}"
  data-route-corpus="{{ '/methods/building-a-corpus' | relative_url }}"
  data-route-llm="{{ '/methods/llms-and-compute' | relative_url }}"
  data-route-computational="{{ '/methods/quantitative/' | relative_url }}"
  markdown="0">
  <div class="method-router-copy">
    <p class="section-kicker">Method selection</p>
    <h2 id="method-router-title">Match your project to a method</h2>
    <p>Answer the questions below and use the result as a place to begin.</p>
    <span class="method-visual-large" data-method-visual="chooser" aria-hidden="true"></span>
  </div>

  <div class="method-router-controls">
    <div class="method-router-form" data-method-router role="group" aria-label="Method questions">
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
          <option value="question">Turn a topic into a research question</option>
          <option value="review">Organize and write up the literature</option>
          <option value="collect">Collect and bound sources</option>
          <option value="interpret">Interpret meaning, frames, discourse, or themes</option>
          <option value="explain">Explain why something happened</option>
          <option value="measure">Measure patterns across many documents</option>
          <option value="llm">Process many documents with OCR or an LLM</option>
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
    </div>

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
  <button type="button" data-method-filter="foundations">Foundations</button>
  <button type="button" data-method-filter="workflow">Workflow</button>
  <button type="button" data-method-filter="qualitative">Qualitative</button>
  <button type="button" data-method-filter="computational">Computational</button>
</div>

<div class="method-card-grid method-card-grid-expanded" markdown="0">
  <article class="method-card" data-method-groups="foundations">
    <span class="method-visual" data-method-visual="puzzle" aria-hidden="true"></span>
    <span class="method-type">Foundations</span>
    <h3><a href="{{ '/methods/puzzles-and-questions' | relative_url }}">Puzzles and Questions</a></h3>
    <p>Move from a topic to a puzzle, a simple research question, and rival answers.</p>
  </article>

  <article class="method-card" data-method-groups="foundations">
    <span class="method-visual" data-method-visual="review" aria-hidden="true"></span>
    <span class="method-type">Foundations</span>
    <h3><a href="{{ '/methods/literature-review' | relative_url }}">Literature Review</a></h3>
    <p>Group sources by the answer they support and write an argument about them.</p>
  </article>

  <article class="method-card" data-method-groups="foundations">
    <span class="method-visual" data-method-visual="framework" aria-hidden="true"></span>
    <span class="method-type">Foundations</span>
    <h3><a href="{{ '/methods/analytical-framework' | relative_url }}">Analytical Framework</a></h3>
    <p>Link your question and answers to the evidence and method that can weigh them.</p>
  </article>

  <article class="method-card method-card-feature" data-method-groups="workflow corpus computational">
    <span class="method-visual" data-method-visual="corpus" aria-hidden="true"></span>
    <span class="method-type">Workflow</span>
    <h3><a href="{{ '/methods/building-a-corpus' | relative_url }}">Building a Corpus</a></h3>
    <p>Start here if the archive, search terms, or inclusion rules are still fuzzy.</p>
  </article>

  <article class="method-card" data-method-groups="workflow computational">
    <span class="method-visual" data-method-visual="compute" aria-hidden="true"></span>
    <span class="method-type">Workflow</span>
    <h3><a href="{{ '/methods/llms-and-compute' | relative_url }}">LLMs and Compute</a></h3>
    <p>Decide whether you need OCR, an LLM, or a GPU, and request help with setup.</p>
  </article>

  <article class="method-card" data-method-groups="qualitative cases">
    <span class="method-visual" data-method-visual="compare" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3><a href="{{ '/methods/qualitative/comparative-case-study' | relative_url }}">Comparative Case Study</a></h3>
    <p>For two or more cases that share enough context to make their differences count.</p>
  </article>

  <article class="method-card" data-method-groups="qualitative cases causal">
    <span class="method-visual" data-method-visual="trace" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3><a href="{{ '/methods/qualitative/process-tracing' | relative_url }}">Process Tracing</a></h3>
    <p>For questions where timing matters and each link in the causal chain needs evidence.</p>
  </article>

  <article class="method-card" data-method-groups="qualitative texts">
    <span class="method-visual" data-method-visual="frame" aria-hidden="true"></span>
    <span class="method-type">Qualitative / mixed</span>
    <h3><a href="{{ '/methods/qualitative/framing-analysis' | relative_url }}">Framing Analysis</a></h3>
    <p>For projects about how an issue is packaged in headlines, speeches, or policy text.</p>
  </article>

  <article class="method-card" data-method-groups="qualitative texts theory">
    <span class="method-visual" data-method-visual="discourse" aria-hidden="true"></span>
    <span class="method-type">Qualitative</span>
    <h3><a href="{{ '/methods/qualitative/discourse-analysis' | relative_url }}">Discourse Analysis</a></h3>
    <p>For claims about how language builds identities or turns one view into common sense.</p>
  </article>

  <article class="method-card" data-method-groups="workflow computational">
    <span class="method-visual" data-method-visual="preprocess" aria-hidden="true"></span>
    <span class="method-type">Computational prep</span>
    <h3><a href="{{ '/methods/quantitative/#preprocessing' | relative_url }}">Preprocessing</a></h3>
    <p>Decide what counts as a token and what gets dropped. Document each choice.</p>
  </article>

  <article class="method-card" data-method-groups="computational texts">
    <span class="method-visual" data-method-visual="topics" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3><a href="{{ '/methods/quantitative/#topic-analysis' | relative_url }}">Topic Analysis</a></h3>
    <p>A first map of a large corpus. The model points to clusters. You still name them.</p>
  </article>

  <article class="method-card" data-method-groups="computational texts">
    <span class="method-visual" data-method-visual="sentiment" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3><a href="{{ '/methods/quantitative/#sentiment-analysis' | relative_url }}">Sentiment Analysis</a></h3>
    <p>Useful when tone matters and the score can be checked against your own texts.</p>
  </article>

  <article class="method-card" data-method-groups="computational texts advanced">
    <span class="method-visual" data-method-visual="embeddings" aria-hidden="true"></span>
    <span class="method-type">Computational</span>
    <h3><a href="{{ '/methods/quantitative/#word-embeddings' | relative_url }}">Word Embeddings</a></h3>
    <p>For similarity, conceptual drift, or retrieval when keyword searches are too brittle.</p>
  </article>
</div>

## Combining Methods {#combining-methods}

Qualitative and computational methods work together when each has a defined role. Common pairings include these.

- **Framing analysis + topic analysis.** A topic model surfaces candidate frames in a large corpus, and you read closely within each cluster.
- **Discourse analysis + keyword-in-context tooling.** The computational side locates passages worth reading, while the interpretive judgment stays with you.
- **Comparative case study + descriptive corpus statistics.** Aggregate measures such as volume or keyword prevalence can support the cross-case interpretation.
- **Process tracing + digital archives.** Computational search helps identify causal-process observations you might otherwise miss.

## Other Methods To Consider

This guide does not cover these methods in depth, but some projects need them.

- **Qualitative interviewing + thematic analysis.** Semi-structured interviews coded for repeated themes. Common in all programs, especially fieldwork-based theses.
- **Content analysis.** Rule-based coding of textual material, quantitative or qualitative. Common in IR and media-adjacent topics.
- **Survey methods and quantitative analysis.** Statistical analysis of original or secondary survey data. Common in MAIR especially, and in BAIS theses with a quantitative focus.
- **Archival research.** Close reading of historical documents and official records. Common in Korean Studies and history-focused MAAS theses.

For general planning, see [Getting Started, Step 4: Building Your Analytical Framework]({{ '/getting-started/#step-4' | relative_url }}). For assessment, see [Assessment Standards, Application of Knowledge]({{ '/assessment-standards/#application-of-knowledge' | relative_url }}).
