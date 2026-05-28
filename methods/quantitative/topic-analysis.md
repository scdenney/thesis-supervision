---
layout: default
title: Topic Analysis
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

# Topic Analysis

Topic analysis helps you find themes in a corpus without reading every text. It is useful for exploratory work on large collections and for measuring how themes vary by source or over time.

---

## What it is

**Topic analysis** is a family of techniques for identifying clusters of co-occurring words ("topics") across a corpus, along with the proportion of each topic in each document. The best-known variants are **Latent Dirichlet Allocation (LDA)** and its metadata-aware cousin the **Structural Topic Model (STM)**. Newer embedding-based methods like **BERTopic** fill a similar analytical role with different machinery. Outputs are usually (a) lists of high-probability words per topic and (b) document-level topic proportions you can use for downstream comparison.

Topic analysis identifies statistical regularities in a corpus. Those regularities still need interpretation. Naming and defending the topics is the researcher's job. That is where the methodological work sits.

---

## What you learn in the DH course

This page draws from the course's topic modeling material. Students who take it come away with:

- How LDA works conceptually, including mixed-membership over topics and topics as word distributions
- Reading STM as LDA plus covariates that shift topic prevalence and content
- Embedding-based topic methods (BERTopic, Top2Vec) and how they differ from LDA
- Choosing K (the number of topics) with diagnostic plots and coherence scores, then using interpretability as the final check
- Validating topics with semantic coherence and intruder tests, followed by human coding on a sample
- Measuring topic prevalence across metadata covariates such as year and source (or speaker)
- Reporting topic models in a methodology chapter, including what has to be disclosed

---

## What you need to learn first

- **Preprocessing.** Topic models are notoriously sensitive to preprocessing. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics and probability.** You need enough to understand "mixture over distributions" without being intimidated by it.
- **R or Python.** STM is an R package. LDA and BERTopic have strong Python tooling (`gensim`, `scikit-learn`, `bertopic`).

---

## What you can do with it

- Track how themes in a news corpus shift across a political crisis (prevalence by month)
- Compare how two political parties frame the same issue (prevalence by source)
- Identify latent genres in a literary corpus that weren't defined a priori
- Surface candidate themes for later close reading. In that use, topic modeling helps decide where to look next by flagging passages worth reading carefully
- Produce a descriptive map for a larger corpus that would otherwise be impossible to read end-to-end

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}). The input to a topic model shapes every topic you see.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}). This page covers embedding-based topic models (BERTopic) and contextual-embedding methods.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}). Framing analysis pairs well with topic models when topics are treated as candidate frames.
- [Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }}). Topic-modeled themes can guide sampling for close reading.

</div>
</div>
