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

Preprocessing is where a raw corpus becomes something a script can read. It looks routine until a small cleaning choice changes the result.

---

## What it is

**Preprocessing** is the cleanup work done before analysis. You decide how to split text into units and which words to drop. You also decide how much case, spelling, or morphology should be normalized. Those choices are part of the method.

Small decisions can matter. A stop-word list may remove discourse markers. Aggressive stemming can collapse distinctions your question depends on. Report the choices in the methodology chapter so the reader can see what the pipeline did to the corpus.

---

## What you learn in the DH course

In the DH course, preprocessing is taught as a set of research decisions. The main skills are these.

- Tokenization at word, subword, sentence, or character level
- Unicode normalization and diacritic handling, especially for multilingual corpora
- Stop-word decisions, including cases where no generic list is appropriate
- Stemming, lemmatization, n-grams, and vocabulary filtering
- Documenting preprocessing choices so they can be reported and reproduced

---

## What you need to learn first

- **Basic Python or R.** Most preprocessing is scripting work. Python users often start with `nltk`, `spaCy`, or `gensim`. R users usually reach for `tidytext` or `quanteda`.
- **Unicode basics.** You need enough encoding knowledge to understand why Korean, Arabic, or historical scripts can break a pipeline that works on English.
- **Your research question.** You cannot pick cleaning steps before you know what you plan to measure.

---

## What you can do with it

Preprocessing is usually invisible in the final argument, but later steps often fail without it. In thesis work it commonly supports tasks like these.

- Preparing a corpus for topic analysis after removing noise that would dominate the topics
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
