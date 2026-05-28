---
layout: default
title: Word Embeddings
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

# Word Embeddings

Word embeddings turn words or documents into vectors. The main use is distance: items with similar usage sit closer together.

---

## What it is

**Word embeddings** represent language in a high-dimensional space. For thesis work, two families matter most.

Static embeddings use one vector per word, learned from co-occurrence patterns in a training corpus. Word2Vec, GloVe, and fastText are the classic examples. They train quickly and are easy to inspect. The cost is context. "Bank" has one vector whether the sentence concerns a river or a financial institution.

Contextual embeddings produce a fresh vector for a word or sentence in context, usually with a pre-trained transformer. They often work better for downstream tasks. They are also harder to interpret directly and heavier to run.

Embeddings are rarely the final method. They are usually an input to similarity search, classification, clustering, or a measurement of semantic change.

---

## What you learn in the DH course

In the DH course, embeddings are taught as representations you have to inspect. Students work through:

- Vector-space semantics and the distributional hypothesis ("a word is known by the company it keeps")
- Training a model on your own corpus versus using a pre-trained model
- Contextual embeddings, including BERT and multilingual BERT
- Similarity operations with cosine distance and nearest neighbors
- Aligning embedding spaces across time (to measure semantic change) or across languages
- Using embeddings as input features for classification or clustering
- Reporting model versions and the training corpus clearly

---

## What you need to learn first

- **Preprocessing.** Embeddings are trained on the retained vocabulary, so decisions here affect the vector space. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Linear algebra basics.** You need cosine similarity, vector arithmetic, and enough dimensionality-reduction intuition to read a plot. You do not need to derive the math.
- **Python.** Essentially all embedding tooling is Python-first (`gensim`, `transformers`, `sentence-transformers`). R bindings exist but lag.

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
