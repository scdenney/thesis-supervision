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

Sentiment analysis estimates tone numerically. It works only when the measure matches how tone operates in your corpus.

---

## What it is

**Sentiment analysis** usually means one of several tools. The important question is what the score is supposed to measure.

Dictionary methods count terms from a curated lexicon such as LIWC, VADER, NRC, or AFINN. They are transparent and easy to rerun. They struggle with sarcasm and negation, especially after domain shift.

Supervised classifiers work best in-domain and require a labeling plan with validation. LLM-based ratings are quick to set up. Their scores can change with the prompt or model version. Treat that route as experimental unless your supervisor has approved it and you can evaluate it properly under the [Ethics & AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}).

The weak point depends on the material. Sarcasm-heavy social media breaks many dictionaries. Classifiers trained on movie reviews fail on policy documents. A thesis needs to show that the chosen measure is valid for the actual texts.

---

## What you learn in the DH course

In the DH course, the sentiment unit is mainly about validation. Students practice the following.

- Comparing dictionary methods and checking where each one breaks
- Building a supervised classifier from labeled examples
- Handling negation, intensifiers, and other contextual modifiers
- Inter-annotator agreement (Cohen's kappa, Krippendorff's alpha) for labeled data
- Validating sentiment scores against human judgment
- Reporting limits without treating the score as self-explanatory

---

## What you need to learn first

- **Preprocessing.** Dictionary methods depend heavily on tokenization and lemmatization. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics.** You need agreement metrics, confidence intervals, and a working sense of reliability.
- **Python or R.** Python options include `vaderSentiment`, `nltk`, and `transformers`. R users can start with `sentimentr` or `quanteda.sentiment`.

---

## What you can do with it

- Chart whether coverage of a policy turned negative after a key event
- Compare the tone of government and opposition speeches across a legislative term
- Track sentiment toward a country or leader in foreign-language press
- Surface high-emotion passages for qualitative close reading
- Build a scalar covariate for a topic model or regression

---

## Related methods

- [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}) matters because dictionaries depend on tokens.
- [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) can include sentiment as one dimension of a frame.
- [Topic Analysis]({{ '/methods/quantitative/topic-analysis' | relative_url }}) pairs naturally with sentiment when tone varies by theme.

</div>
</div>
