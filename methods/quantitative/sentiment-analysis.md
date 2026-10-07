---
layout: default
title: Sentiment Analysis
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

# Sentiment Analysis

Sentiment analysis estimates tone numerically. It works only when the measure matches how tone operates in your corpus.

---

## What it is

**Sentiment analysis** covers several tools. Whichever you use, first ask what the score is supposed to measure.

Dictionary-based methods count terms from curated sentiment lexicons such as LIWC, VADER, NRC, or AFINN. These methods are transparent and easy to rerun, but they handle sarcasm and negation poorly, especially on out-of-domain text. Supervised classifiers work best in-domain but require a plan for labeling and validation. Large language model (LLM) approaches can be set up quickly, but their ratings tend to vary with the prompt and the model version. Treat that route as experimental unless your supervisor has approved it and you can evaluate it properly under the [Ethics & AI policy]({{ '/ethics/#generative-ai-policy' | relative_url }}).

The weak point depends on the material. Sarcasm-heavy social media breaks many dictionaries, and classifiers trained on movie reviews fail on policy documents. Your thesis has to show that the measure is valid for your texts.

---

## What the courses cover

BA3 *Text as Data* introduces classification through dictionary-based sentiment. You score a corpus in Orange and check unusually positive and negative cases against the passages, with attention to lexicon coverage, context, negation, and domain mismatch. BA2 *Digital Korea* adds rule-based classification and custom dictionaries. A thesis often needs more.

- Comparing dictionary methods and checking where each one breaks
- Building a supervised classifier from labeled examples
- Handling negation, intensifiers, and other contextual modifiers
- Inter-annotator agreement (Cohen's kappa, Krippendorff's alpha) for labeled data
- Validating scores against human judgment
- Reporting limits without treating the score as self-explanatory

---

## What you need to learn first

- **Preprocessing.** Dictionary methods depend on tokenization and lemmatization. See [Preprocessing]({{ '/methods/quantitative/preprocessing' | relative_url }}).
- **Basic statistics.** You need agreement metrics, confidence intervals, and a working sense of reliability.
- **Python or R.** Python options include `vaderSentiment`, `nltk`, and `transformers`. R users can start with `sentimentr` or `quanteda.sentiment` (installed from GitHub).

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
