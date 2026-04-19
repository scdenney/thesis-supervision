---
layout: default
title: Computational & Quantitative Approaches
---

# Computational & Quantitative Approaches

For work that treats a corpus programmatically — extracting patterns, measuring themes, building numerical representations that scale beyond what a single reader can manage. These methods pair naturally with larger corpora and with the computational tools covered on the [Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}) page.

The distinction with the [qualitative approaches]({{ '/methods/qualitative/' | relative_url }}) is one of analytical posture, not subject matter. You can do computational work on a small corpus of parliamentary speeches; you can do discourse analysis on tweets. What changes is what the method *measures* and how the researcher's judgement enters the analysis — in computational work, judgement sits largely in design and validation; in qualitative work, it sits in interpretation itself.

<div class="cta-banner" markdown="0">
  <strong>Building the corpus comes first.</strong><br>
  Every method below depends on a well-constructed corpus. Start with the <a href="{{ '/methods/building-a-corpus' | relative_url }}">Building a Corpus</a> page before you commit to a method.
</div>

## Jump to the tool

If you already know you need a computational pipeline — OCR from scans, cleanup, metadata assembly, analysis-ready outputs — the standalone wizard below routes you to the right path for your compute and scale and hands you a starter kit for Claude Code or Codex.

<a class="cb-term" href="https://scdenney.github.io/corpus-building/"
   aria-label="Launch the corpus-building wizard">
  <div class="cb-term-bar">
    <span class="cb-term-dot cb-dot-r" aria-hidden="true"></span>
    <span class="cb-term-dot cb-dot-y" aria-hidden="true"></span>
    <span class="cb-term-dot cb-dot-g" aria-hidden="true"></span>
    <span class="cb-term-title">corpus-building — ~</span>
  </div>
  <div class="cb-term-body">
    <div class="cb-term-line">
      <span class="cb-term-prompt">$</span>
      <span class="cb-term-cmd-wrap">
        <span class="cb-term-cmd">corpus-building-wizard</span><span class="cb-term-cursor">▍</span>
      </span>
    </div>
    <div class="cb-term-caption">
      Turn a folder of source files into an analysis-ready text corpus. A standalone wizard hands you a starter kit for Claude Code or Codex.
      <span class="cb-term-arrow">→</span>
    </div>
  </div>
</a>

## The four methods

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/quantitative/preprocessing' | relative_url }}">
    <h3>Preprocessing</h3>
    <p>Tokenisation, normalisation, and the cleanup steps that shape every downstream result</p>
  </a>
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

---

## In the classroom

These methods are also taught in two of my courses at Leiden. If you're a student in one of them, the method pages above double as a reference alongside the weekly sessions.

<div class="program-cards" markdown="0">
  <a class="program-card" href="https://scdenney.github.io/ba2_digital-korea/" target="_blank" rel="noopener">
    <span class="card-level ba">BA2</span>
    <h3>Digital Korea</h3>
    <p>12-session course in computational text analysis with Orange Data Mining and R, primarily for Korean Studies. Covers the full preprocessing → classification → topic modelling pipeline.</p>
  </a>
  <a class="program-card" href="https://scdenney.github.io/ba3_text_as_data/" target="_blank" rel="noopener">
    <span class="card-level ba">BA3</span>
    <h3>Text as Data (DH strand)</h3>
    <p>Six-seminar digital-humanities strand of the BA3 <em>Contemporary Korea and Digital Humanities</em> course. No programming required; introduces descriptive, clustering, classification, and topic-modelling methods on pre-prepared Korean corpora.</p>
  </a>
</div>

If your thesis draws on either course, the method pages here extend what's covered in class with the methodological scaffolding you'll need for the methods chapter.

---

## Combining with qualitative methods

Most strong theses combine a computational measure with a qualitative reading. See the [Qualitative Approaches]({{ '/methods/qualitative/' | relative_url }}) page for that side of the split; the end of that page lists common pairings (framing + topic analysis, discourse analysis + keyword-in-context tooling, comparative case study + descriptive statistics).

---

## Overview and other methods

Return to the [Methods overview]({{ '/methods/' | relative_url }}) for the broader orientation, or consult its "Other Methods to Explore" table for less commonly used approaches that aren't covered in depth.

<style>
  .cb-term {
    display: block;
    max-width: 640px;
    margin: 1.5rem 0;
    text-decoration: none;
    color: inherit;
    border-radius: 8px;
    overflow: hidden;
    background: #2C3527;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                 Helvetica, Arial, sans-serif;
  }
  .cb-term:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.28);
    text-decoration: none;
  }
  .cb-term-bar {
    background: #1F2820;
    padding: 0.5rem 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-bottom: 1px solid #141B14;
  }
  .cb-term-dot { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
  .cb-dot-r { background: #D47570; }
  .cb-dot-y { background: #F4A731; }
  .cb-dot-g { background: #7BAA4A; }
  .cb-term-title {
    margin-left: 0.7rem;
    color: #8A9C86;
    font-size: 0.76rem;
    font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    letter-spacing: 0.02em;
  }
  .cb-term-body { padding: 1.1rem 1.25rem 1.25rem; color: #E8E4D8; }
  .cb-term-line {
    font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
    font-size: 0.98rem;
    line-height: 1.5;
    display: flex;
    align-items: baseline;
    gap: 0.55rem;
    white-space: nowrap;
  }
  .cb-term-prompt { color: #F4A731; font-weight: 700; }
  .cb-term-cmd-wrap { display: inline-flex; align-items: baseline; }
  .cb-term-cmd {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 22ch;
    animation: cb-term-type 1.3s steps(22, end) 0.4s both;
  }
  @keyframes cb-term-type { from { width: 0; } to { width: 22ch; } }
  .cb-term-cursor {
    display: inline-block;
    color: #F4A731;
    margin-left: 0.05rem;
    animation: cb-term-blink 1.1s steps(2, end) 1.8s infinite;
  }
  @keyframes cb-term-blink { 0%, 49% { opacity: 1; } 50%,100% { opacity: 0; } }
  .cb-term-caption { margin-top: 0.85rem; color: #B6AE9D; font-size: 0.87rem; line-height: 1.55; }
  .cb-term-arrow {
    color: #F4A731;
    font-weight: 700;
    margin-left: 0.15rem;
    transition: transform 0.2s ease;
    display: inline-block;
  }
  .cb-term:hover .cb-term-arrow { transform: translateX(3px); }
  .cb-term:hover .cb-term-cmd { color: #FAF6EF; }
  @media (prefers-reduced-motion: reduce) {
    .cb-term-cmd { animation: none; width: auto; }
    .cb-term-cursor { animation: none; }
    .cb-term:hover { transform: none; }
  }
</style>
