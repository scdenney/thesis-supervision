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

Topic analysis groups recurring word patterns in a large corpus. The interpretation remains yours.

---

## What it is

**Topic analysis** identifies clusters of co-occurring words across a corpus. LDA and STM are the standard models students encounter first. BERTopic and related embedding methods fill a similar role with different machinery. The output is usually a set of word lists and a topic proportion for each document.

A topic model identifies statistical regularities. Naming the topics, deciding whether they are meaningful, and explaining what they do for the argument remain your responsibility.

---

## What you learn in the DH course

In the DH course, students treat topic models as aids to interpretation. The work centers on these tasks.

- Reading LDA as mixed membership over word distributions
- Reading STM as LDA plus covariates that shift topic prevalence and content
- Embedding-based topic methods (BERTopic, Top2Vec) and how they differ from LDA
- Choosing K with diagnostics and interpretability checks
- Validating topics through intruder tests and human coding on a sample
- Reporting model choices in a methodology chapter

---

## What you need to learn first

- **Preprocessing.** Topic models are notoriously sensitive to preprocessing. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics and probability.** You need enough to understand "mixture over distributions" without treating the model as magic.
- **R or Python.** STM is an R package. LDA and BERTopic have strong Python tooling (`gensim`, `scikit-learn`, `bertopic`).

---

## What you can do with it

- Track how themes in a news corpus shift across a political crisis
- Compare how political parties frame the same issue
- Identify candidate genres in a literary corpus
- Choose passages for later close reading
- Produce a descriptive map for a larger corpus that would otherwise be impossible to read end-to-end

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) shapes every topic the model produces.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}) covers embedding-based topic methods.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) pairs well with topic models when topics are treated as candidate frames.
- [Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }}) can use topic output to guide sampling.

</div>
</div>
