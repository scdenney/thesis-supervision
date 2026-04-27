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

Numerical representations of words (and documents) that encode semantic relationships as geometric ones — the foundation of most modern NLP and a powerful tool for tracing concepts at scale.

---

## What it is

**Word embeddings** represent each word (or document) as a vector in a high-dimensional space such that semantically related items land close to each other. Two broad families:

1. **Static embeddings**: one vector per word, learned from co-occurrence patterns in a training corpus. Word2Vec (skip-gram, CBOW), GloVe, and fastText are the classics. Fast to train, easy to inspect, blind to context: "bank" has one vector whether it's a river or a financial institution.
2. **Contextual embeddings**: a fresh vector per word *in context*, produced by a pre-trained transformer (BERT, RoBERTa, sentence-transformers). Much more accurate for downstream tasks, harder to interpret directly, and computationally heavier.

Embeddings aren't an analysis on their own. They're a representation you feed into something else: a similarity search, a classifier, a clustering algorithm, a time-trajectory measurement.

---

## What you learn in the DH course

This page draws from the course's word-embedding material. Students who take it come away with:

- Vector-space semantics and the distributional hypothesis ("a word is known by the company it keeps")
- Training a Word2Vec / GloVe / fastText model on your own corpus vs. using a pre-trained model
- Contextual embeddings: BERT, multilingual BERT, sentence-transformers, and when each is worth the compute
- Similarity operations: cosine distance, nearest neighbours, analogy tasks
- Aligning embedding spaces across time (to measure semantic change) or across languages
- Using embeddings as input features for classification, clustering, or topic analysis
- Reporting embedding-based methods: pinning model versions, documenting training corpus, acknowledging limits

---

## What you need to learn first

- **Preprocessing**: embeddings learn from the vocabulary you feed them; decisions here propagate into the geometry. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Linear algebra basics**: cosine similarity, vector arithmetic, dimensionality reduction. You don't need to derive it, but you need a mental model.
- **Python**: essentially all embedding tooling is Python-first (`gensim`, `transformers`, `sentence-transformers`). R bindings exist but lag.

---

## What you can do with it

- Measure how the meaning of a political keyword shifts across decades (diachronic embeddings)
- Surface near-synonyms and related terms you'd otherwise miss in keyword searches
- Cluster documents by semantic similarity, even when they share no keywords
- Build a retrieval system for a large corpus (semantic search instead of exact-match)
- Feed sentence- or document-level embeddings into a sentiment or classification model
- Cross-language alignment: find the Korean equivalent of an English concept by projecting embeddings into a shared space

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) — sets the vocabulary the embedding sees.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}) — embedding-based topic methods (BERTopic, Top2Vec) are built directly on contextual embeddings.
- [Sentiment Analysis]({{ '/methods/quantitative/sentiment-analysis' | relative_url }}) — modern sentiment classifiers use contextual embeddings as their feature layer.

</div>
</div>
