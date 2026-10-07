---
layout: default
title: Preprocessing
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#what-it-is">What it is</a></li>
<li><a href="#what-the-courses-cover">What the courses cover</a></li>
<li><a href="#what-you-need-to-learn-first">What you need to learn first</a></li>
<li><a href="#what-you-can-do-with-it">What you can do with it</a></li>
<li><a href="#related-methods">Related methods</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Preprocessing

Preprocessing turns a raw corpus into something a script can read. It looks routine until a small cleaning choice changes the result.

---

## What it is

**Preprocessing** is the cleanup done before analysis. You decide how to split text into units and which words to drop. You also decide how far to normalize case, spelling, or morphology. These choices are part of the method. A stop-word list may remove discourse markers, and aggressive stemming can collapse distinctions your question depends on. Report the choices in the methodology chapter so readers can see what the pipeline did to the corpus.

---

## What the courses cover

BA3 *Text as Data* gives preprocessing a full session on tokens, stop words, normalization, and the choices Korean text requires, worked in Orange with a supplied script. BA2 *Digital Korea* covers tokenization, part-of-speech tagging, and preprocessing workflows. A thesis often needs more.

- Tokenization at word, subword, sentence, or character level
- Unicode normalization and diacritic handling, especially for multilingual corpora
- Stop-word decisions, including cases where no generic list fits
- Stemming, lemmatization, n-grams, and vocabulary filtering
- A record of each choice, so it can be reported and reproduced

---

## What you need to learn first

- **Basic Python or R.** Most preprocessing is scripting work. Python users often start with `nltk`, `spaCy`, or `gensim`. R users usually reach for `tidytext` or `quanteda`.
- **Unicode basics.** Enough to see why Korean, Arabic, or historical scripts can break a pipeline that works on English.
- **Your research question.** You cannot pick cleaning steps before you know what you will measure.

---

## What you can do with it

Preprocessing rarely shows in the final argument, but later steps fail without it. In theses it supports tasks like these.

- Removing noise that would otherwise dominate a topic model
- Building a feature matrix for a sentiment classifier
- Cleaning scraped text before training word embeddings
- Producing comparable descriptive statistics across a multilingual corpus

---

## Related methods

- [Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}) decides which texts enter the pipeline.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}) is highly sensitive to cleaning choices.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}) are trained on the vocabulary you leave in place.
- [Sentiment Analysis]({{ '/methods/quantitative/sentiment-analysis' | relative_url }}) depends on tokenization and lemmatization more than students often expect.

</div>
</div>
