---
layout: default
title: Home
---

{% assign programs = site.data.programs.programs %}

<section class="home-hero" markdown="0">
  <div class="home-hero-copy">
    <p class="home-kicker">Leiden thesis support + public methods resources</p>
    <h1>Thesis &amp; Research Supervision</h1>
    <p class="home-lede">A practical resource for shaping a topic into a research design, choosing methods, organizing evidence, and writing the thesis. Leiden students start with their program. Everyone else can go straight to the methods guides.</p>
    <div class="home-hero-actions">
      <a class="is-primary" href="#find-your-program">I&rsquo;m a Leiden student</a>
      <a class="is-secondary" href="{{ '/methods/' | relative_url }}">I want methods help</a>
    </div>
    <div class="home-contact">
      <span><strong>Supervisor</strong> Dr. Steven Denney</span>
      <a href="mailto:s.c.denney@hum.leidenuniv.nl">s.c.denney@hum.leidenuniv.nl</a>
      <a class="github-link" href="https://github.com/scdenney/thesis-supervision">View on GitHub</a>
    </div>
  </div>
</section>

<section class="resource-paths" aria-labelledby="resource-paths-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">Choose your path</p>
    <h2 id="resource-paths-title">Where do you want to start?</h2>
  </div>

  <div class="home-lanes">
    <div class="lane">
      <div class="lane-header">
        <span class="lane-eyebrow">Leiden students</span>
        <h3>Plan and submit your thesis</h3>
      </div>
      <ol class="lane-list">
        <li>
          <a href="#find-your-program">
            <span class="lane-step-num" aria-hidden="true">1</span>
            <strong>Find your program</strong>
            <span>Requirements, deadlines, and assessment for BAIS, BAKS, MAAS, or MAIR.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/getting-started/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">2</span>
            <strong>Plan your research</strong>
            <span>The five-step Getting Started guide, from research question to writing.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/templates/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">3</span>
            <strong>Use a template</strong>
            <span>Working documents for memos, proposals, meetings, and submission.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/assessment-standards/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">4</span>
            <strong>Check how it&rsquo;s graded</strong>
            <span>Assessment criteria, grade descriptors, and BA/MA expectations.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/ethics/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">5</span>
            <strong>Read Ethics &amp; AI</strong>
            <span>Ethics review, plagiarism, and the generative-AI policy for your thesis.</span>
          </a>
        </li>
      </ol>
    </div>

    <div class="lane">
      <div class="lane-header">
        <span class="lane-eyebrow">Methods</span>
        <h3>Choose a method and plan your analysis</h3>
      </div>
      <ol class="lane-list">
        <li>
          <a href="{{ '/methods/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">1</span>
            <strong>Choose a method</strong>
            <span>Use the chooser, then browse every method card in one place.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/methods/qualitative/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">2</span>
            <strong>Qualitative approaches</strong>
            <span>Comparative case study, process tracing, framing, and discourse analysis.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/methods/quantitative/' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">3</span>
            <strong>Computational approaches</strong>
            <span>Preprocessing, topic and sentiment analysis, and word embeddings.</span>
          </a>
        </li>
        <li>
          <a href="{{ '/methods/building-a-corpus' | relative_url }}">
            <span class="lane-step-num" aria-hidden="true">4</span>
            <strong>Building a corpus</strong>
            <span>Plan a defensible corpus and document how you collected it.</span>
          </a>
        </li>
      </ol>
    </div>
  </div>
</section>

<div id="find-your-program"></div>

## Leiden Student? Find Your Program

If you are writing in one of the Leiden programs I supervise, start with your program page. For broader research support, use the methods paths above.

<div class="program-cards program-overview-grid" markdown="0">
  {% for p in programs %}
  <a class="program-card" href="{{ p.url | relative_url }}">
    <span class="card-level {{ p.level | downcase }}">{{ p.level }}</span>
    <h3>{{ p.code }}</h3>
    <p>{{ p.name }}</p>
  </a>
  {% endfor %}
</div>

## Program Snapshot

<div class="program-facts-table" markdown="0">
<table>
<thead>
<tr><th scope="col"><span class="sr-only">Requirement</span></th>{% for p in programs %}<th scope="col">{{ p.code }}</th>{% endfor %}</tr>
</thead>
<tbody>
<tr><th scope="row">Level</th>{% for p in programs %}<td>{{ p.level }}</td>{% endfor %}</tr>
<tr><th scope="row">Word count</th>{% for p in programs %}<td>{{ p.words }}</td>{% endfor %}</tr>
<tr><th scope="row">Citation style</th>{% for p in programs %}<td>{{ p.citation }}</td>{% endfor %}</tr>
<tr><th scope="row">Final deadline</th>{% for p in programs %}<td>{{ p.deadline }}</td>{% endfor %}</tr>
</tbody>
</table>
</div>

<div class="program-facts-mobile" markdown="0">
  {% for p in programs %}
  <article class="program-fact-card">
    <div class="program-fact-card-header">
      <h3>{{ p.code }}</h3>
      <span class="card-level {{ p.level | downcase }}">{{ p.level }}</span>
    </div>
    <dl>
      <div>
        <dt>Word count</dt>
        <dd>{{ p.words }}</dd>
      </div>
      <div>
        <dt>Citation style</dt>
        <dd>{{ p.citation }}</dd>
      </div>
      <div>
        <dt>Final deadline</dt>
        <dd>{{ p.deadline }}</dd>
      </div>
    </dl>
  </article>
  {% endfor %}
</div>

All dates are for the **{{ site.data.programs.academic_year }} academic year**. Always confirm deadlines with your supervisor and program coordinator.

## Useful External Links

- [Leiden University Library: Writing a Thesis](https://www.library.universiteitleiden.nl/students/writing-a-thesis)
- [Leiden University Library: Citing](https://www.library.universiteitleiden.nl/students/citing)
- [Writing Lab](https://www.student.universiteitleiden.nl/en/vr/humanities/writing-lab)
- [Student Thesis Repository](https://studenttheses.universiteitleiden.nl/)
