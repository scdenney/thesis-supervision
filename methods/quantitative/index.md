---
layout: default
title: Computational Approaches
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#start-with-the-corpus">Start with the Corpus</a></li>
<li><a href="#preprocessing">Preprocessing</a></li>
<li><a href="#topic-analysis">Topic Analysis</a></li>
<li><a href="#sentiment-analysis">Sentiment Analysis</a></li>
<li><a href="#word-embeddings">Word Embeddings</a></li>
<li><a href="#in-the-classroom">In the Classroom</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Computational Approaches

These methods are for projects whose corpus is too large for close reading alone. They still require interpretation, at the stages of collection, preprocessing, validation, and explanation. What separates them from the qualitative approaches is the claim you want to make, since the same speeches or posts can support either. Many theses are stronger when close reading checks a computational measure. See [Combining Methods]({{ '/methods/#combining-methods' | relative_url }}) for common pairings.

---

## Start with the Corpus

Before any model, define your source base and decide how to clean it. [Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}) decides which texts enter the pipeline, and it comes first.

---

## Preprocessing {#preprocessing}

Preprocessing turns a raw corpus into something a script can read. It looks routine until a small cleaning choice changes the result.

### What it is

**Preprocessing** is the cleanup done before analysis. You decide how to split text into units and which words to drop. You also decide how far to normalize case, spelling, or morphology. These choices are part of the method. A stop-word list may remove discourse markers, and aggressive stemming can collapse distinctions your question depends on. Report the choices in the methodology chapter so readers can see what the pipeline did to the corpus.

### What the courses cover

BA3 *Text as Data* gives preprocessing a full session on tokens, stop words, normalization, and the choices Korean text requires, worked in Orange with a supplied script. BA2 *Digital Korea* covers tokenization, part-of-speech tagging, and preprocessing workflows. A thesis often needs more.

- Tokenization at word, subword, sentence, or character level
- Unicode normalization and diacritic handling, especially for multilingual corpora
- Stop-word decisions, including cases where no generic list fits
- Stemming, lemmatization, n-grams, and vocabulary filtering
- A record of each choice, so it can be reported and reproduced

### What you need to learn first

- **Basic Python or R.** Most preprocessing is scripting work. Python users often start with `nltk`, `spaCy`, or `gensim`. R users usually reach for `tidytext` or `quanteda`.
- **Unicode basics.** Enough to see why Korean, Arabic, or historical scripts can break a pipeline that works on English.
- **Your research question.** You cannot pick cleaning steps before you know what you will measure.

### What you can do with it

Preprocessing rarely shows in the final argument, but later steps fail without it. In theses it supports tasks like these.

- Removing noise that would otherwise dominate a topic model
- Building a feature matrix for a sentiment classifier
- Cleaning scraped text before training word embeddings
- Producing comparable descriptive statistics across a multilingual corpus

---

## Topic Analysis {#topic-analysis}

Topic analysis groups recurring word patterns in a large corpus. The interpretation remains yours.

### What it is

**Topic analysis** finds clusters of co-occurring words across a corpus. LDA and STM are the standard models. BERTopic and related embedding methods do a similar job with different machinery. The output is usually a set of word lists plus a topic proportion for each document.

The model finds statistical regularities. You still have to name the topics and judge whether they mean anything, and then show what they contribute to the argument.

### What the courses cover

BA3 *Text as Data* fits a small LDA model in Orange and inspects the topic-word output in LDAvis. Students then check their topic labels against the documents. Mathematical derivation and extensive tuning are left out. BA2 *Digital Korea* adds choosing the number of topics and validating the model. A thesis often needs more.

- Reading LDA as mixed membership over word distributions
- Reading STM as LDA plus covariates that shift topic prevalence and content
- How embedding-based methods (BERTopic, Top2Vec) differ from LDA
- Choosing K with diagnostics and interpretability checks
- Validating topics with intruder tests and human coding of a sample
- Reporting model choices in the methodology chapter

### What you need to learn first

- **Preprocessing.** Topic models are very sensitive to it, and it shapes every topic the model produces. See [Preprocessing](#preprocessing).
- **Basic statistics and probability.** Enough to understand "mixture over distributions" without treating the model as magic.
- **R or Python.** STM is an R package. LDA and BERTopic have strong Python tooling (`gensim`, `scikit-learn`, `bertopic`).

### What you can do with it

- Track how themes in a news corpus shift across a political crisis
- Compare how political parties frame the same issue
- Identify candidate genres in a literary corpus
- Choose passages for later close reading
- Map a corpus too large to read end to end

Topic models pair well with [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}) when topics are treated as candidate frames, and [Discourse Analysis]({{ '/methods/qualitative/discourse-analysis' | relative_url }}) can use topic output to guide sampling.

---

## Sentiment Analysis {#sentiment-analysis}

Sentiment analysis estimates tone numerically. It works only when the measure matches how tone operates in your corpus.

### What it is

**Sentiment analysis** covers several tools. Whichever you use, first ask what the score is supposed to measure.

Dictionary-based methods count terms from curated sentiment lexicons such as LIWC, VADER, NRC, or AFINN. These methods are transparent and easy to rerun, but they handle sarcasm and negation poorly, especially on out-of-domain text. Supervised classifiers work best in-domain but require a plan for labeling and validation. Large language model (LLM) approaches can be set up quickly, but their ratings tend to vary with the prompt and the model version. Treat that route as experimental unless your supervisor has approved it and you can evaluate it properly under the [Faculty GenAI guidelines]({{ '/ethics/#generative-ai-policy' | relative_url }}).

The weak point depends on the material. Sarcasm-heavy social media breaks many dictionaries, and classifiers trained on movie reviews fail on policy documents. Your thesis has to show that the measure is valid for your texts.

### What the courses cover

BA3 *Text as Data* introduces classification through dictionary-based sentiment. You score a corpus in Orange and check unusually positive and negative cases against the passages, with attention to lexicon coverage, context, negation, and domain mismatch. BA2 *Digital Korea* adds rule-based classification and custom dictionaries. A thesis often needs more.

- Comparing dictionary methods and checking where each one breaks
- Building a supervised classifier from labeled examples
- Handling negation, intensifiers, and other contextual modifiers
- Inter-annotator agreement (Cohen's kappa, Krippendorff's alpha) for labeled data
- Validating scores against human judgment
- Reporting limits without treating the score as self-explanatory

### What you need to learn first

- **Preprocessing.** Dictionary methods depend on tokenization and lemmatization more than students often expect. See [Preprocessing](#preprocessing).
- **Basic statistics.** You need agreement metrics, confidence intervals, and a working sense of reliability.
- **Python or R.** Python options include `vaderSentiment`, `nltk`, and `transformers`. R users can start with `sentimentr` or `quanteda.sentiment` (installed from GitHub).

### What you can do with it

- Chart whether coverage of a policy turned negative after a key event
- Compare the tone of government and opposition speeches across a legislative term
- Track sentiment toward a country or leader in foreign-language press
- Surface high-emotion passages for qualitative close reading
- Build a scalar covariate for a topic model or regression

Sentiment can also be one dimension of a frame in [Framing Analysis]({{ '/methods/qualitative/framing-analysis' | relative_url }}), and it pairs naturally with [Topic Analysis](#topic-analysis) when tone varies by theme.

---

## Word Embeddings {#word-embeddings}

Word embeddings turn words or documents into vectors. Their main use is distance. Items used in similar ways end up close together.

### What it is

**Word embeddings** represent language in a high-dimensional space. Two families matter for thesis work.

Static embeddings associate one vector with each word. They learn a word's meaning from the words it co-occurs with in a training corpus. Word2Vec, GloVe, and fastText are examples. They are fast to train and inspect but not context-aware. The word "bank" has the same vector regardless of context (river bank or financial bank).

Contextual embeddings produce a fresh vector for a word or sentence in context, usually with a pre-trained transformer. They often work better for downstream tasks but are harder to interpret and heavier to run.

Embeddings are rarely the final method. They usually feed similarity search, classification, clustering, or a measure of semantic change.

### What the courses cover

BA2 *Digital Korea* has a week on embeddings in Orange, covering the shift from sparse to dense vectors, nearest neighbors, semantic search, and document embeddings. BA3 *Text as Data* does not teach embeddings, but its clustering session covers cosine similarity between document vectors. A thesis often needs more.

- Vector-space semantics and the distributional hypothesis ("a word is known by the company it keeps")
- Training a model on your own corpus versus using a pre-trained model
- Contextual embeddings, including BERT and multilingual BERT
- Aligning embedding spaces across time (to measure semantic change) or across languages
- Using embeddings as input features for classification or clustering
- Reporting model versions and the training corpus clearly

### What you need to learn first

- **Preprocessing.** Embeddings are trained on the vocabulary you keep, so these decisions shape the vector space. See [Preprocessing](#preprocessing).
- **Linear algebra basics.** You need cosine similarity, vector arithmetic, and enough dimensionality-reduction intuition to read a plot. You do not need to derive the math.
- **Python.** Embedding tooling is Python-first (`gensim`, `transformers`, `sentence-transformers`). R bindings exist but lag.

### What you can do with it

- Measure how the meaning of a political keyword shifts across decades
- Surface near-synonyms and related terms missed by keyword searches
- Cluster documents by semantic similarity, even when they share no keywords
- Build semantic search for a large corpus
- Feed sentence- or document-level embeddings into a classifier
- Use cross-language alignment to compare concepts across languages

Embedding-based topic methods are covered under [Topic Analysis](#topic-analysis), and [Sentiment Analysis](#sentiment-analysis) often uses contextual embeddings under the hood.

---

## In the Classroom {#in-the-classroom}

I teach these methods in two Leiden courses. If your thesis draws on either, use this page to turn the classroom workflow into methods-chapter prose.

<div class="program-cards" markdown="0">
  <a class="program-card" href="https://scdenney.github.io/ba2_digital-korea/" target="_blank" rel="noopener">
    <span class="card-level ba">BA2</span>
    <h3>Digital Korea</h3>
    <p>12-session course in computational text analysis with Orange Data Mining and R, mainly for Korean Studies students. It runs from preprocessing to topic modeling.</p>
  </a>
  <a class="program-card" href="https://scdenney.github.io/ba3tad-26/" target="_blank" rel="noopener">
    <span class="card-level ba">BA3</span>
    <h3>Text as Data (DH strand)</h3>
    <p>Six-class digital-humanities strand of the BA3 <em>Contemporary Korea and Digital Humanities</em> course, ending in a hackathon. No prior programming experience required. Students use Orange Data Mining with prepared Korean corpora, plus short R exercises.</p>
  </a>
</div>

Return to the [Methods Guide]({{ '/methods/' | relative_url }}) if nothing here fits your project.

</div>
</div>
