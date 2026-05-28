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

Sentiment analysis assigns numerical values to text tone. Most uses estimate how positive or negative a passage is. Some also measure emotional intensity, which helps when you need a scalar measure of tone across a large corpus.

---

## What it is

**Sentiment analysis** usually falls into three families. Each makes different assumptions about what "sentiment" *is* and whom it generalizes to.

1. **Dictionary methods.** Count terms from a curated lexicon (LIWC, VADER, NRC, AFINN). These methods are transparent and reproducible. They struggle with sarcasm and negation, and serious domain shift can break them.
2. **Supervised classifiers.** Train a model (logistic regression, SVM, fine-tuned transformer) on human-labeled examples. They can be more accurate in-domain. In return, they require labeled training data and careful validation.
3. **LLM-based rating.** Prompt a large language model to rate each text. This is fast to set up, but ratings can vary across prompts and model versions. Treat the output cautiously. It needs rigorous evaluation and supervisor guidance, plus compliance with the [Ethics & AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}) before being trusted for a thesis.

Which weaknesses bite hardest depends on your texts. Sarcasm-heavy social media breaks dictionary methods. Classifiers trained on movie reviews fail on policy documents. LLM ratings can drift across model releases. Choose with the limits in mind.

---

## What you learn in the DH course

This page draws from the course's sentiment analysis material. Students who take it learn to work with:

- Dictionary methods, including LIWC, VADER, NRC, and AFINN, with attention to what each measures and where it breaks
- Building a supervised classifier through labeling strategy and feature extraction, followed by a clean train/validation/test split
- LLM-based sentiment rating, including prompt design and reproducibility, with version pinning as the floor
- Handling negation and intensifiers, plus other contextual modifiers
- Inter-annotator agreement (Cohen's kappa, Krippendorff's alpha) for labeled data
- Validating sentiment scores against human judgment
- Reporting sentiment methods in a methodology chapter. Limitations are mandatory

---

## What you need to learn first

- **Preprocessing.** Dictionary methods depend heavily on tokenization and lemmatization. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics.** You need agreement metrics and confidence intervals, plus a working sense of reliability.
- **Python or R.** Python options include `vaderSentiment`, `nltk`, and `transformers`. R users can start with `sentimentr` or `quanteda.sentiment`.

---

## What you can do with it

- Chart whether coverage of a policy in major newspapers turned negative after a key event
- Compare emotional tone of government vs. opposition speeches across a legislative term
- Track sentiment toward a country or leader over time in foreign-language press
- Surface high-emotion passages for qualitative close reading
- Build a scalar covariate you can use in a topic model or regression (e.g. STM with `sentiment` as a prevalence covariate)

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}). Dictionary methods are especially sensitive to it.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}). Framing scholarship often measures sentiment alongside other dimensions.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}). Sentiment-within-topic is a common analytical pairing.

</div>
</div>
