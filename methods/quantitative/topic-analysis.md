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

Finding the themes that run through a corpus without reading every text — useful for exploratory work on large collections and for measuring how themes vary across time, source, or speaker.

---

## What it is

**Topic analysis** is a family of techniques that discover clusters of co-occurring words ("topics") across a corpus, along with the proportion of each topic in each document. The best-known variants are **Latent Dirichlet Allocation (LDA)** and its metadata-aware cousin the **Structural Topic Model (STM)**; newer embedding-based methods like **BERTopic** occupy the same analytical slot with a different machinery. Outputs are usually (a) lists of high-probability words per topic, and (b) document-level topic proportions you can use for downstream comparison.

Topic analysis does not "find the truth" of a corpus — it finds statistical regularities you then have to interpret. Naming, validating, and defending the topics is the researcher's job, and is where methodological rigour lives.

---

## What you learn in the DH course

This page draws from the course's topic modelling material. Students who take it come away with:

- How LDA works conceptually (mixed-membership over topics; topics as word distributions)
- Reading STM as LDA plus covariates that shift topic prevalence and content
- Embedding-based topic methods (BERTopic, Top2Vec) and how they differ from LDA
- Choosing K (the number of topics): diagnostic plots, coherence scores, interpretability checks
- Validating topics: semantic coherence, intruder tests, human coding on a sample
- Measuring topic prevalence across metadata covariates (year, source, speaker)
- Reporting topic models in a methodology chapter — what has to be disclosed

<!-- TODO: refine this list against the DH course's current syllabus. -->

---

## What you need to learn first

- **Preprocessing** — topic models are notoriously sensitive to preprocessing. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics and probability** — enough to understand "mixture over distributions" without being intimidated by it.
- **R or Python** — STM is an R package; LDA and BERTopic have strong Python tooling (`gensim`, `scikit-learn`, `bertopic`).

---

## What you can do with it

- Track how themes in a news corpus shift across a political crisis (prevalence by month)
- Compare how two political parties frame the same issue (prevalence by source)
- Identify latent genres in a literary corpus that weren't defined a priori
- Surface candidate themes for subsequent close reading — topic modelling as a "where to look" tool rather than a final answer
- Produce descriptive scaffolding for a larger corpus that would otherwise be impossible to read end-to-end

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) — the input to a topic model; shapes every topic you see.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}) — embedding-based topic models (BERTopic) and contextual-embedding methods live here.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) — topics-as-frames is a common analytical move; qualitative framing analysis on a topic-model-selected subset is a powerful pairing.
- [Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }}) — topic-modelled themes can drive sampling for close reading.

</div>
</div>
