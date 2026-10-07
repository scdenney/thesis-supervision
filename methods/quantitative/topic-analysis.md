---
layout: default
title: Topic Analysis
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

# Topic Analysis

Topic analysis groups recurring word patterns in a large corpus. The interpretation remains yours.

---

## What it is

**Topic analysis** finds clusters of co-occurring words across a corpus. LDA and STM are the standard models. BERTopic and related embedding methods do a similar job with different machinery. The output is usually a set of word lists plus a topic proportion for each document.

The model finds statistical regularities. You still have to name the topics and judge whether they mean anything, and then show what they contribute to the argument.

---

## What the courses cover

BA3 *Text as Data* fits a small LDA model in Orange and inspects the topic-word output in LDAvis. Students then check their topic labels against the documents. Mathematical derivation and extensive tuning are left out. BA2 *Digital Korea* adds choosing the number of topics and validating the model. A thesis often needs more.

- Reading LDA as mixed membership over word distributions
- Reading STM as LDA plus covariates that shift topic prevalence and content
- How embedding-based methods (BERTopic, Top2Vec) differ from LDA
- Choosing K with diagnostics and interpretability checks
- Validating topics with intruder tests and human coding of a sample
- Reporting model choices in the methodology chapter

---

## What you need to learn first

- **Preprocessing.** Topic models are very sensitive to it. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics and probability.** Enough to understand "mixture over distributions" without treating the model as magic.
- **R or Python.** STM is an R package. LDA and BERTopic have strong Python tooling (`gensim`, `scikit-learn`, `bertopic`).

---

## What you can do with it

- Track how themes in a news corpus shift across a political crisis
- Compare how political parties frame the same issue
- Identify candidate genres in a literary corpus
- Choose passages for later close reading
- Map a corpus too large to read end to end

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) shapes every topic the model produces.
- [Word Embeddings]({{ '/methods/quantitative/word-embeddings' | relative_url }}) covers embedding-based topic methods.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) pairs well with topic models when topics are treated as candidate frames.
- [Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }}) can use topic output to guide sampling.

</div>
</div>
