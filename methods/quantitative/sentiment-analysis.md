---
layout: default
title: Sentiment Analysis
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

# Sentiment Analysis

Assigning numerical values that summarise how positive, negative, or emotionally charged a text is — useful when you need a scalar measure of tone across a large corpus.

---

## What it is

**Sentiment analysis** covers three broad families, each with different assumptions about what "sentiment" *is* and whom it generalises to:

1. **Dictionary methods**: counting terms from a curated lexicon (LIWC, VADER, NRC, AFINN). Transparent and reproducible; struggles with negation, sarcasm, and domain shift.
2. **Supervised classifiers**: training a model (logistic regression, SVM, fine-tuned transformer) on human-labelled examples. More accurate in-domain, but requires labelled training data and careful validation.
3. **LLM-based rating**: prompting a large language model to rate each text. Fast to set up; variable across prompts and model versions; needs rigorous evaluation before trusted for a thesis.

Each family has weaknesses that matter more or less depending on your texts. Sarcasm-heavy social media breaks dictionary methods. Classifiers trained on movie reviews fail on policy documents. LLMs drift across model releases. Choose with the limits in mind.

---

## What you learn in the DH course

This page draws from the course's sentiment analysis material. Students who take it come away with:

- Dictionary methods: LIWC, VADER, NRC, AFINN — what each measures and where it breaks
- Building a supervised classifier: labelling strategy, feature extraction, train/validation/test split
- LLM-based sentiment rating: prompt design, reproducibility, version pinning
- Handling negation, intensifiers, and contextual modifiers
- Inter-annotator agreement (Cohen's kappa, Krippendorff's alpha) for labelled data
- Validating sentiment scores against human judgement
- Reporting sentiment methods in a methodology chapter — limitations are mandatory

<!-- TODO: refine this list against the DH course's current syllabus. -->

---

## What you need to learn first

- **Preprocessing**: dictionary methods especially depend on tokenisation and lemmatisation. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics**: agreement metrics, confidence intervals, reliability thinking.
- **Python or R**: `vaderSentiment`, `nltk`, `transformers` in Python; `sentimentr`, `quanteda.sentiment` in R.

---

## What you can do with it

- Chart whether coverage of a policy in major newspapers turned negative after a key event
- Compare emotional tone of government vs. opposition speeches across a legislative term
- Track sentiment toward a country or leader over time in foreign-language press
- Surface high-emotion passages for qualitative close reading
- Build a scalar covariate you can use in a topic model or regression (e.g. STM with `sentiment` as a prevalence covariate)

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) — dictionary methods are especially sensitive to it.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) — sentiment is one of several dimensions framing scholarship measures; the two often appear together.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}) — sentiment-within-topic is a common analytical move.

</div>
</div>
