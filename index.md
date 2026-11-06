---
layout: default
title: Home
---

{% assign programs = site.data.programs.programs %}

<section class="home-hero" markdown="0">
  <div class="home-hero-copy">
    <p class="home-kicker">Thesis supervision at Leiden University</p>
    <h1>Thesis &amp; Research Supervision</h1>
    <p class="home-lede">Guidance for turning a topic into a research question and carrying the project through to submission.</p>
    <div class="home-hero-actions">
      <a class="is-primary" href="#find-your-program">Start with your program</a>
      <a class="is-secondary" href="{{ '/methods/' | relative_url }}">Browse the methods library</a>
    </div>
    <div class="home-contact">
      <span><strong>Dr. Steven Denney</strong> &middot; Faculty of Humanities</span>
      <a href="mailto:s.c.denney@hum.leidenuniv.nl">s.c.denney@hum.leidenuniv.nl</a>
      <a class="github-link" href="https://github.com/scdenney/thesis-supervision">View on GitHub</a>
    </div>
  </div>
</section>

<section class="home-start" id="find-your-program" aria-labelledby="program-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">Your first stop</p>
    <h2 id="program-title">Choose your program</h2>
    <p>Your program page lists the rules and deadlines for your thesis and links the official documents.</p>
  </div>

  <div class="program-cards program-overview-grid">
    {% for p in programs %}
    <div class="program-card">
      <span class="program-card-topline">
        <strong>{{ p.code }}</strong>
        <span class="card-level {{ p.level | downcase }}">{{ p.level }}</span>
      </span>
      <span class="program-card-name">{{ p.name }}</span>
      <span class="program-card-detail">{{ p.words }} &middot; due {{ p.deadline }}</span>
      <a class="program-card-link" href="{{ p.url | relative_url }}" aria-label="Open {{ p.code }} program guide">Open program guide <span aria-hidden="true">&rarr;</span></a>
    </div>
    {% endfor %}
  </div>
</section>

<section class="home-journey" aria-labelledby="journey-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">The thesis journey</p>
    <h2 id="journey-title">Plan your research</h2>
    <p>These are the five steps in <a href="{{ '/getting-started/' | relative_url }}">Getting Started</a>. Use them alongside the rules on your program page, and follow the <a href="{{ '/ethics/' | relative_url }}">Ethics</a> and <a href="{{ '/ai-policy/' | relative_url }}">Working with AI</a> pages throughout.</p>
  </div>

  <ol class="journey-list">
    <li>
      <span class="journey-number" aria-hidden="true">01</span>
      <div>
        <h3>Developing Your Research Question</h3>
        <p>Turn your topic into a puzzle and a working question.</p>
        <p class="journey-links"><a href="{{ '/getting-started/#step-1' | relative_url }}">Step 1</a><a href="{{ '/methods/puzzles-and-questions' | relative_url }}">Puzzles and questions</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">02</span>
      <div>
        <h3>Data and Sources</h3>
        <p>Work out where your evidence will come from and how you will manage it.</p>
        <p class="journey-links"><a href="{{ '/getting-started/#step-2' | relative_url }}">Step 2</a><a href="{{ '/methods/building-a-corpus' | relative_url }}">Build a corpus</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">03</span>
      <div>
        <h3>Conducting a Literature Review</h3>
        <p>Group the literature by answer and weigh the strengths and weaknesses of each.</p>
        <p class="journey-links"><a href="{{ '/getting-started/#step-3' | relative_url }}">Step 3</a><a href="{{ '/methods/literature-review' | relative_url }}">Literature review</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">04</span>
      <div>
        <h3>Building Your Analytical Framework</h3>
        <p>Link your question to your findings and choose methods that fit your data.</p>
        <p class="journey-links"><a href="{{ '/getting-started/#step-4' | relative_url }}">Step 4</a><a href="{{ '/methods/analytical-framework' | relative_url }}">Analytical framework</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">05</span>
      <div>
        <h3>Writing and Reporting Findings</h3>
        <p>Structure your findings and conclusion, then check the draft against the assessment criteria.</p>
        <p class="journey-links"><a href="{{ '/getting-started/#step-5' | relative_url }}">Step 5</a><a href="{{ '/assessment-standards/' | relative_url }}">How work is graded</a></p>
      </div>
    </li>
  </ol>
</section>

<aside class="methods-feature" aria-labelledby="methods-feature-title" markdown="0">
  <div>
    <p class="section-kicker">Open research resource</p>
    <h2 id="methods-feature-title">Need help choosing a method?</h2>
    <p>The methods library covers qualitative and computational approaches, including corpus building, process tracing, discourse analysis, and topic analysis.</p>
  </div>
  <div class="methods-feature-links">
    <a class="methods-feature-primary" href="{{ '/methods/' | relative_url }}">Use the method chooser <span aria-hidden="true">&rarr;</span></a>
  </div>
</aside>

<section id="program-snapshot" class="program-snapshot" aria-labelledby="program-snapshot-title" markdown="0">
<div class="section-heading">
  <p class="section-kicker">At a glance</p>
  <h2 id="program-snapshot-title">Program snapshot</h2>
</div>

<div class="program-facts-table">
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

<div class="program-facts-mobile">
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

<p class="snapshot-note">All dates are for the <strong>{{ site.data.programs.academic_year }} academic year</strong>. Confirm deadlines with your supervisor and program coordinator. This site will be updated as new AY2026-2027 deadlines are published. Dates not yet announced are marked TBD.</p>
</section>

<section class="external-resources" aria-labelledby="external-resources-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">Leiden resources</p>
    <h2 id="external-resources-title">More student support</h2>
  </div>
  <ul class="external-link-list">
    <li><a href="https://www.library.universiteitleiden.nl/students/writing-a-thesis">Writing a thesis <span>University Library</span></a></li>
    <li><a href="https://www.library.universiteitleiden.nl/students/citing">Citing sources <span>University Library</span></a></li>
    <li><a href="https://www.student.universiteitleiden.nl/en/vr/humanities/writing-lab">Writing Lab <span>Faculty of Humanities</span></a></li>
    <li><a href="https://studenttheses.universiteitleiden.nl/">Student Thesis Repository <span>Browse and submit</span></a></li>
  </ul>
</section>
