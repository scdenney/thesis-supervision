---
layout: default
title: Word Embeddings
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

# Word Embeddings

Word embeddings turn words or documents into vectors. Their main use is distance. Items used in similar ways end up close together.

---

## What it is

**Word embeddings** represent language in a high-dimensional space. Two families matter for thesis work.

Static embeddings associate one vector with each word. They learn a word's meaning from the words it co-occurs with in a training corpus. Word2Vec, GloVe, and fastText are examples. They are fast to train and inspect but not context-aware. The word "bank" has the same vector regardless of context (river bank or financial bank).

Contextual embeddings produce a fresh vector for a word or sentence in context, usually with a pre-trained transformer. They often work better for downstream tasks but are harder to interpret and heavier to run.

Embeddings are rarely the final method. They usually feed similarity search, classification, clustering, or a measure of semantic change.

---

## What the courses cover

BA2 *Digital Korea* has a week on embeddings in Orange, covering the shift from sparse to dense vectors, nearest neighbors, semantic search, and document embeddings. BA3 *Text as Data* does not teach embeddings, but its clustering session covers cosine similarity between document vectors. A thesis often needs more.

- Vector-space semantics and the distributional hypothesis ("a word is known by the company it keeps")
- Training a model on your own corpus versus using a pre-trained model
- Contextual embeddings, including BERT and multilingual BERT
- Aligning embedding spaces across time (to measure semantic change) or across languages
- Using embeddings as input features for classification or clustering
- Reporting model versions and the training corpus clearly

---

## What you need to learn first

- **Preprocessing.** Embeddings are trained on the vocabulary you keep, so these decisions shape the vector space. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Linear algebra basics.** You need cosine similarity, vector arithmetic, and enough dimensionality-reduction intuition to read a plot. You do not need to derive the math.
- **Python.** Embedding tooling is Python-first (`gensim`, `transformers`, `sentence-transformers`). R bindings exist but lag.

---

## What you can do with it

- Measure how the meaning of a political keyword shifts across decades
- Surface near-synonyms and related terms missed by keyword searches
- Cluster documents by semantic similarity, even when they share no keywords
- Build semantic search for a large corpus
- Feed sentence- or document-level embeddings into a classifier
- Use cross-language alignment to compare concepts across languages

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) sets the vocabulary used to train or query the embedding.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}) includes embedding-based topic methods.
- [Sentiment Analysis]({{ '/methods/quantitative/sentiment-analysis' | relative_url }}) often uses contextual embeddings under the hood.

</div>
</div>
