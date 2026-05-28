---
layout: default
title: Computational & Quantitative Approaches
---

# Computational & Quantitative Approaches

These pages are for projects where close reading alone cannot handle the corpus. Computational methods shift the interpretive work to collection, preprocessing, validation, and explanation.

The split with the [qualitative approaches]({{ '/methods/qualitative/' | relative_url }}) is about analytical posture. The same speeches or tweets can support several kinds of analysis, depending on the claim.

## Launch the wizard

If the immediate problem is OCR, cleanup, metadata, or analysis-ready files, use the standalone wizard. It routes by scale and compute, then gives you a starter kit for Claude Code or Codex.

<div class="cb-term-wrap" markdown="0">
  <a class="cb-term" href="https://scdenney.github.io/corpus-building/"
     aria-label="Launch the corpus-building wizard">
    <div class="cb-term-bar">
      <span class="cb-term-dot cb-dot-r" aria-hidden="true"></span>
      <span class="cb-term-dot cb-dot-y" aria-hidden="true"></span>
      <span class="cb-term-dot cb-dot-g" aria-hidden="true"></span>
      <span class="cb-term-title">corpus-building - companion resource</span>
    </div>
    <div class="cb-term-body">
      <div class="cb-term-line">
        <span class="cb-term-prompt">$</span>
        <span class="cb-term-cmd-wrap">
          <span class="cb-term-cmd">corpus-building-wizard</span><span class="cb-term-cursor">|</span>
        </span>
      </div>
      <div class="cb-term-caption">
        Turn a source folder into an analysis-ready text corpus. The wizard builds the starter kit around your constraints.
        <span class="cb-term-arrow">&rarr;</span>
      </div>
    </div>
  </a>
</div>

## Preparation before analysis

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <h3>Preprocessing</h3>
    <p>Cleaning choices that shape the model input.</p>
  </a>
</div>

## Core computational methods

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <h3>Topic Analysis</h3>
    <p>Use LDA, STM, or embedding-based models to map recurring themes.</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <h3>Sentiment Analysis</h3>
    <p>Estimate tone, then validate the measure against the corpus.</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <h3>Word Embeddings</h3>
    <p>Represent words or documents as vectors for similarity, drift, and classification.</p>
  </a>
</div>

<div class="question-banner" markdown="0">
  <div class="question-banner-copy">
    <strong>Need to sort out the corpus or pipeline before choosing one of these?</strong>
    <p>Use the corpus page for research design. Use the wizard when the bottleneck is files, OCR, or compute.</p>
  </div>
  <a href="{{ '/methods/building-a-corpus' | relative_url }}">Go to Building a Corpus</a>
</div>

---

## In the classroom

I teach these methods in two Leiden courses. If you are enrolled in either one, these pages give you the methodological language that the weekly exercises do not always have time to spell out.

<div class="program-cards" markdown="0">
  <a class="program-card" href="https://scdenney.github.io/ba2_digital-korea/" target="_blank" rel="noopener">
    <span class="card-level ba">BA2</span>
    <h3>Digital Korea</h3>
    <p>12-session course in computational text analysis with Orange Data Mining and R, aimed mainly at Korean Studies students. It starts with preprocessing and ends with topic modeling.</p>
  </a>
  <a class="program-card" href="https://scdenney.github.io/ba3_text_as_data/" target="_blank" rel="noopener">
    <span class="card-level ba">BA3</span>
    <h3>Text as Data (DH strand)</h3>
    <p>Six-seminar digital-humanities strand of the BA3 <em>Contemporary Korea and Digital Humanities</em> course. No programming required. Students work with prepared Korean corpora and learn how the main text-as-data tools behave.</p>
  </a>
</div>

If your thesis draws on either course, use these pages to turn the classroom workflow into methods-chapter prose.

---

## Combining with qualitative methods

Many theses are stronger when a computational measure is checked through close reading. See [Qualitative Approaches]({{ '/methods/qualitative/' | relative_url }}) for that side of the split and for common pairings.

---

## Overview and other methods

Return to the [Methods overview]({{ '/methods/' | relative_url }}) if none of the pages here fits your project.
