---
layout: default
title: Computational & Quantitative Approaches
---

# Computational & Quantitative Approaches

For work that treats a corpus programmatically to extract patterns and build numerical representations at a scale no single reader can handle. The pages below cover the computational approaches I most often point students to across the BA and MA programs I supervise.

The distinction with the [qualitative approaches]({{ '/methods/qualitative/' | relative_url }}) is one of analytical posture. The same subject matter sits on either side. You can do computational work on a small corpus of parliamentary speeches, and you can do discourse analysis on tweets. What changes is what the method *measures* and where the researcher's judgment enters. In computational work, judgment sits largely in design and validation. In qualitative work, it sits in interpretation itself.

## Launch the wizard

Already know you need a computational pipeline (OCR from scans, cleanup, metadata assembly, analysis-ready outputs)? The standalone wizard below routes you to the right path for your compute and scale, and hands you a starter kit for Claude Code or Codex.

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
    <p>Tokenization, normalization, and the cleanup steps that shape every downstream result</p>
  </a>
</div>

## Three core computational methods

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/topic-analysis' | relative_url }}">
    <h3>Topic Analysis</h3>
    <p>Finding themes across a corpus with LDA and STM, plus embedding-based methods where useful</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/sentiment-analysis' | relative_url }}">
    <h3>Sentiment Analysis</h3>
    <p>Measuring affect with dictionaries and classifiers, with LLM-based rating where useful</p>
  </a>
  <a class="program-card" href="{{ '/methods/quantitative/word-embeddings' | relative_url }}">
    <h3>Word Embeddings</h3>
    <p>Vector representations of words and documents for similarity and drift, with classification when needed</p>
  </a>
</div>

<div class="question-banner" markdown="0">
  <div class="question-banner-copy">
    <strong>Need to sort out the corpus or pipeline before choosing one of these?</strong>
    <p>Use the corpus page for planning and organization. Use the wizard above when the main issue is workflow or compute, including OCR.</p>
  </div>
  <a href="{{ '/methods/building-a-corpus' | relative_url }}">Go to Building a Corpus</a>
</div>

---

## In the classroom

I teach these methods in two of my Leiden courses. If you're enrolled in one, the method pages above double as a reference alongside the weekly sessions.

<div class="program-cards" markdown="0">
  <a class="program-card" href="https://scdenney.github.io/ba2_digital-korea/" target="_blank" rel="noopener">
    <span class="card-level ba">BA2</span>
    <h3>Digital Korea</h3>
    <p>12-session course in computational text analysis with Orange Data Mining and R, primarily for Korean Studies. Covers the full preprocessing → classification → topic modeling pipeline.</p>
  </a>
  <a class="program-card" href="https://scdenney.github.io/ba3_text_as_data/" target="_blank" rel="noopener">
    <span class="card-level ba">BA3</span>
    <h3>Text as Data (DH strand)</h3>
    <p>Six-seminar digital-humanities strand of the BA3 <em>Contemporary Korea and Digital Humanities</em> course. No programming required. It introduces descriptive, clustering, classification, and topic-modeling methods on pre-prepared Korean corpora.</p>
  </a>
</div>

If your thesis draws on either course, these method pages extend what's covered in class. They give you the methodological scaffolding you'll need for the methods chapter.

---

## Combining with qualitative methods

Most strong theses pair a computational measure with a qualitative reading. See the [Qualitative Approaches]({{ '/methods/qualitative/' | relative_url }}) page for that side of the split. The end of that page lists common pairings, including framing + topic analysis and discourse analysis + keyword-in-context tooling. It also covers comparative case study + descriptive statistics.

---

## Overview and other methods

Return to the [Methods overview]({{ '/methods/' | relative_url }}) for the wider orientation. Its "Other Methods to Explore" table is where to look for less commonly used approaches that aren't covered in depth.
