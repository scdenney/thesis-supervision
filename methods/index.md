---
layout: default
title: Methods Guide
---

# Methods Guide

Choosing and applying an appropriate method is one of the most challenging parts of writing a thesis. This guide covers the methods most commonly used by students I supervise, organised by analytical posture — **qualitative** approaches that turn on close reading and interpretive judgement, and **computational & quantitative** approaches that treat a corpus programmatically. These are not mutually exclusive: many theses combine two or more (for example, comparative case study design with process tracing, or framing analysis paired with topic analysis over a larger corpus).

Each method page explains what the method is, when to use it, how to apply it step by step, how to structure the relevant thesis chapters, and what to read. For general guidance on selecting a method, see the [Getting Started Guide — Step 4: Building Your Analytical Framework]({{ '/getting-started/#step-4' | relative_url }}). For how your method choice is assessed, see [Assessment Standards — Application of Knowledge]({{ '/assessment-standards/#application-of-knowledge' | relative_url }}).

<div class="cta-banner" markdown="0">
  <strong>Not sure which method fits your research question?</strong><br>
  Start by reading the "When to use it" section on each page, or discuss options with your supervisor.
</div>

## Foundations

Before you analyse anything, you need a defined body of texts. Building a corpus is a methodological choice in its own right, applicable to qualitative and computational work alike.

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/building-a-corpus' | relative_url }}">
    <h3>Building a Corpus</h3>
    <p>Collecting, organising, and managing textual data for systematic analysis</p>
  </a>
</div>

## Qualitative Approaches

For close reading, interpretive work, and methods where human judgement about meaning drives the analysis. These four are the most common in the programs I supervise.

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/comparative-case-study' | relative_url }}">
    <h3>Comparative Case Study</h3>
    <p>Cross-case analysis using MSSD, MDSD, and structured comparison</p>
  </a>
  <a class="program-card" href="{{ '/methods/process-tracing' | relative_url }}">
    <h3>Process Tracing</h3>
    <p>Within-case analysis of causal mechanisms step by step</p>
  </a>
  <a class="program-card" href="{{ '/methods/framing-analysis' | relative_url }}">
    <h3>Framing Analysis</h3>
    <p>How issues are presented in media, policy, and political communication</p>
  </a>
  <a class="program-card" href="{{ '/methods/discourse-analysis' | relative_url }}">
    <h3>Discourse Analysis</h3>
    <p>How language constructs meaning, identity, and power relations</p>
  </a>
</div>

## Computational & Quantitative Approaches

For work that treats a corpus programmatically — extracting patterns, measuring themes, building numerical representations that scale beyond what a single reader can manage. These pair naturally with larger corpora and with the computational tools covered on the [Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}) page.

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
      Turn a folder of PDFs into an analysis-ready text corpus. A standalone wizard hands you a starter kit for Claude Code or Codex.
      <span class="cb-term-arrow">→</span>
    </div>
  </div>
</a>

<div class="program-cards" markdown="0">
  <a class="program-card" href="{{ '/methods/preprocessing' | relative_url }}">
    <h3>Preprocessing</h3>
    <p>Tokenisation, normalisation, and the cleanup steps that shape every downstream result</p>
  </a>
  <a class="program-card" href="{{ '/methods/topic-analysis' | relative_url }}">
    <h3>Topic Analysis</h3>
    <p>Discovering themes across a corpus with LDA, STM, and embedding-based methods</p>
  </a>
  <a class="program-card" href="{{ '/methods/sentiment-analysis' | relative_url }}">
    <h3>Sentiment Analysis</h3>
    <p>Measuring affect with dictionaries, classifiers, and LLM-based rating</p>
  </a>
  <a class="program-card" href="{{ '/methods/word-embeddings' | relative_url }}">
    <h3>Word Embeddings</h3>
    <p>Vector representations of words and documents for similarity, drift, and classification</p>
  </a>
</div>

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
  .cb-term-dot {
    width: 11px; height: 11px; border-radius: 50%;
    display: inline-block;
  }
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
  .cb-term-body {
    padding: 1.1rem 1.25rem 1.25rem;
    color: #E8E4D8;
  }
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
  .cb-term-caption {
    margin-top: 0.85rem;
    color: #B6AE9D;
    font-size: 0.87rem;
    line-height: 1.55;
  }
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

---

## Other Methods to Explore

The methods above are covered in depth because they are especially common in the programs I supervise. But they are far from the only options. Depending on your research question, you may also want to consider:

| Method | Brief description | Common in |
|--------|-------------------|-----------|
| **Qualitative interviewing + thematic analysis** | Semi-structured interviews analyzed for recurring themes and patterns | All programs, especially fieldwork-based theses |
| **Content analysis** | Systematic coding and categorization of textual material; can be quantitative or qualitative | IR, media-adjacent topics |
| **Survey methods / quantitative analysis** | Statistical analysis of original or secondary survey data | MAIR especially, BAIS with quantitative focus |
| **Archival research** | Systematic analysis of historical documents, government records, correspondence | Korean Studies, history-focused MAAS theses |

Discuss your methodological choices with your supervisor early. The [Getting Started Guide — Step 4]({{ '/getting-started/#step-4' | relative_url }}) covers method selection in general terms.
