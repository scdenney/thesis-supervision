---
layout: default
title: Preprocessing
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc">
<ul>
<li><a href="#what-it-is">What it is</a></li>
<li><a href="#what-you-learn-in-the-dh-course">What you learn in the DH course</a></li>
<li><a href="#what-you-need-to-learn-first">What you need to learn first</a></li>
<li><a href="#what-you-can-do-with-it">What you can do with it</a></li>
<li><a href="#related-methods">Related methods</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Preprocessing

Preprocessing is a foundation skill for every computational approach in this section. The choices you make when cleaning a corpus shape every downstream result.

---

## What it is

**Preprocessing** is the cleanup work you do on a raw corpus before any analysis runs. It turns uneven, messy text into a uniform form that a model or algorithm can reason over. Typical decisions include tokenization (how to split text into units), case handling, stop-word and punctuation treatment, stemming or lemmatization, n-gram extraction, and vocabulary filtering.

These choices carry methodological consequences. Stripping stop words before a discourse analysis removes discourse markers. Aggressive stemming collapses distinctions that might matter for your research question. Preprocessing decisions belong in your methodology chapter, where readers can see them.

---

## What you learn in the DH course

This page draws from the course's preprocessing material. Students who take it come away with:

- Tokenization strategies for word, subword, sentence, and character-level text
- Unicode normalization and diacritic handling for multilingual corpora
- Stop-word lists, including when to use a language-specific or domain-specific list and when to use none
- Stemming vs. lemmatization and their tradeoffs
- N-gram extraction and why bigrams / trigrams matter for framing-style analyses
- Vocabulary filtering with document-frequency cutoffs and rare-term handling. This includes out-of-vocabulary strategies
- Documenting preprocessing choices so they can be reported and reproduced

---

## What you need to learn first

- **Basic Python or R.** Most preprocessing is scripting work. Students usually pick Python with `nltk`, `spaCy`, or `gensim`. R users reach for `tidytext` or `quanteda`.
- **Unicode basics.** A working mental model for encoding and NFC/NFD normalization helps. So does a sense of why non-Latin or historical scripts, such as Korean or Arabic, often surface bugs that English text hides.
- **Your research question.** You can't pick preprocessing steps without knowing what you're going to measure.

---

## What you can do with it

Preprocessing is rarely the final step. Later steps often stall without it. Typical thesis applications include the following.

- Preparing a corpus for topic analysis, so topics reflect substantive content with punctuation and stop words removed
- Building feature matrices for a sentiment classifier
- Cleaning scraped text before training word embeddings
- Standardizing historical spelling variants so terms across centuries align
- Producing comparable descriptive statistics across a multilingual corpus

---

## Related methods

- [Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}). This is the step before preprocessing, which decides *which* texts end up in the pipeline.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}). This is the most common downstream method, where preprocessing choices shape topic coherence heavily.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}). Embeddings learn from the preprocessed vocabulary, so preprocessing is effectively the schema.
- [Sentiment Analysis]({{ '/methods/quantitative/sentiment-analysis' | relative_url }}). Dictionary methods are especially sensitive to tokenization and lemmatization choices.

</div>
</div>
