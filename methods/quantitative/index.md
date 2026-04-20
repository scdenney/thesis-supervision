---
layout: default
title: Computational & Quantitative Approaches
---

# Computational & Quantitative Approaches

For work that treats a corpus programmatically — extracting patterns, measuring themes, building numerical representations that scale beyond what a single reader can manage. The pages below cover the most common computational approaches I point students to across the BA and MA programs I supervise.

The distinction with the [qualitative approaches]({{ '/methods/qualitative/' | relative_url }}) is one of analytical posture, not subject matter. You can do computational work on a small corpus of parliamentary speeches; you can do discourse analysis on tweets. What changes is what the method *measures* and how the researcher's judgment enters the analysis — in computational work, judgment sits largely in design and validation; in qualitative work, it sits in interpretation itself.

## Launch the wizard

If you already know you need a computational pipeline — OCR from scans, cleanup, metadata assembly, analysis-ready outputs — the standalone wizard below routes you to the right path for your compute and scale and hands you a starter kit for Claude Code or Codex.

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
        Turn a folder of source files into an analysis-ready text corpus. The wizard hands you a starter kit for Claude Code or Codex.
        <span class="cb-term-arrow">&rarr;</span>
      </div>
    </div>
  </a>
</div>

## Preparation before analysis

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <h3>Preprocessing</h3>
    <p>Tokenisation, normalisation, and the cleanup steps that shape every downstream result</p>
  </a>
</div>

## Three core computational methods

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <h3>Topic Analysis</h3>
    <p>Discovering themes across a corpus with LDA, STM, and embedding-based methods</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <h3>Sentiment Analysis</h3>
    <p>Measuring affect with dictionaries, classifiers, and LLM-based rating</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <h3>Word Embeddings</h3>
    <p>Vector representations of words and documents for similarity, drift, and classification</p>
  </a>
</div>

<div class="question-banner" markdown="0">
  <div class="question-banner-copy">
    <strong>Need to sort out the corpus or pipeline before choosing one of these?</strong>
    <p>Use the corpus page for planning and organization, or the wizard above if the issue is workflow, OCR, or compute rather than method choice.</p>
  </div>
  <a href="{{ '/methods/building-a-corpus' | relative_url }}">Go to Building a Corpus</a>
</div>

---

## In the classroom

These methods are also taught in two of my courses at Leiden. If you're a student in one of them, the method pages above double as a reference alongside the weekly sessions.

<div class="program-cards" markdown="0">
  <a class="program-card" href="https://scdenney.github.io/ba2_digital-korea/" target="_blank" rel="noopener">
    <span class="card-level ba">BA2</span>
    <h3>Digital Korea</h3>
    <p>12-session course in computational text analysis with Orange Data Mining and R, primarily for Korean Studies. Covers the full preprocessing → classification → topic modeling pipeline.</p>
  </a>
  <a class="program-card" href="https://scdenney.github.io/ba3_text_as_data/" target="_blank" rel="noopener">
    <span class="card-level ba">BA3</span>
    <h3>Text as Data (DH strand)</h3>
    <p>Six-seminar digital-humanities strand of the BA3 <em>Contemporary Korea and Digital Humanities</em> course. No programming required; introduces descriptive, clustering, classification, and topic-modeling methods on pre-prepared Korean corpora.</p>
  </a>
</div>

If your thesis draws on either course, the method pages here extend what's covered in class with the methodological scaffolding you'll need for the methods chapter.

---

## Combining with qualitative methods

Most strong theses combine a computational measure with a qualitative reading. See the [Qualitative Approaches]({{ '/methods/qualitative/' | relative_url }}) page for that side of the split; the end of that page lists common pairings (framing + topic analysis, discourse analysis + keyword-in-context tooling, comparative case study + descriptive statistics).

---

## Overview and other methods

Return to the [Methods overview]({{ '/methods/' | relative_url }}) for the broader orientation, or consult its "Other Methods to Explore" table for less commonly used approaches that aren't covered in depth.
