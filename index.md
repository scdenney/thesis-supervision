---
layout: default
title: Home
---

{% assign programs = site.data.programs.programs %}

<section class="home-hero" markdown="0">
  <div class="home-hero-copy">
    <p class="home-kicker">Thesis supervision at Leiden University</p>
    <h1>Thesis &amp; Research Supervision</h1>
    <p class="home-lede">Practical guidance for turning a topic into a researchable question, choosing a method, organizing evidence, and completing the thesis with confidence.</p>
    <div class="home-hero-actions">
      <a class="is-primary" href="#find-your-program">Start with your programme</a>
      <a class="is-secondary" href="{{ '/methods/' | relative_url }}">Browse the methods library</a>
    </div>
    <div class="home-contact">
      <span><strong>Dr. Steven Denney</strong> &middot; Faculty of Humanities</span>
      <a href="mailto:s.c.denney@hum.leidenuniv.nl">s.c.denney@hum.leidenuniv.nl</a>
      <a class="github-link" href="https://github.com/scdenney/thesis-supervision">View on GitHub</a>
    </div>
  </div>
</section>

<section class="home-start" id="find-your-program" aria-labelledby="programme-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">Your first stop</p>
    <h2 id="programme-title">Choose your programme</h2>
    <p>Programme pages collect the requirements, deadlines, submission rules, and official documents that apply to your thesis.</p>
  </div>

  <div class="program-cards program-overview-grid">
    {% for p in programs %}
    <a class="program-card" href="{{ p.url | relative_url }}">
      <span class="program-card-topline">
        <strong>{{ p.code }}</strong>
        <span class="card-level {{ p.level | downcase }}">{{ p.level }}</span>
      </span>
      <span class="program-card-name">{{ p.name }}</span>
      <span class="program-card-detail">{{ p.words }} &middot; due {{ p.deadline }}</span>
      <span class="program-card-link">Open programme guide <span aria-hidden="true">&rarr;</span></span>
    </a>
    {% endfor %}
  </div>
</section>

<section class="home-journey" aria-labelledby="journey-title" markdown="0">
  <div class="section-heading">
    <p class="section-kicker">The thesis journey</p>
    <h2 id="journey-title">Move from requirements to submission</h2>
    <p>Use this shared route alongside the rules on your programme page.</p>
  </div>

  <ol class="journey-list">
    <li>
      <span class="journey-number" aria-hidden="true">01</span>
      <div>
        <h3>Confirm the rules</h3>
        <p>Check your word count, milestones, deadline, submission route, and assessment criteria.</p>
        <p class="journey-links"><a href="#find-your-program">Programme requirements</a><a href="{{ '/assessment-standards/' | relative_url }}">Assessment standards</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">02</span>
      <div>
        <h3>Shape the project</h3>
        <p>Turn the topic into a research question, map the literature, and make a workable plan.</p>
        <p class="journey-links"><a href="{{ '/getting-started/' | relative_url }}">Getting started</a><a href="{{ '/templates/' | relative_url }}">Templates &amp; checklists</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">03</span>
      <div>
        <h3>Choose evidence and method</h3>
        <p>Decide what evidence can answer the question and how you will analyze it.</p>
        <p class="journey-links"><a href="{{ '/methods/' | relative_url }}">Methods guide</a><a href="{{ '/methods/building-a-corpus' | relative_url }}">Build a corpus</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">04</span>
      <div>
        <h3>Work responsibly</h3>
        <p>Address ethics, source handling, research integrity, and the rules for generative AI.</p>
        <p class="journey-links"><a href="{{ '/ethics/' | relative_url }}">Ethics &amp; AI</a><a href="{{ '/templates/' | relative_url }}">Meeting tools</a></p>
      </div>
    </li>
    <li>
      <span class="journey-number" aria-hidden="true">05</span>
      <div>
        <h3>Review and submit</h3>
        <p>Check the argument against the rubric, complete the final review, and follow your programme&rsquo;s submission instructions.</p>
        <p class="journey-links"><a href="{{ '/assessment-standards/' | relative_url }}">How work is graded</a><a href="#program-snapshot">Compare programme facts</a></p>
      </div>
    </li>
  </ol>
</section>

<aside class="methods-feature" aria-labelledby="methods-feature-title" markdown="0">
  <div>
    <p class="section-kicker">Open research resource</p>
    <h2 id="methods-feature-title">Need help choosing a method?</h2>
    <p>The methods library explains qualitative and computational approaches, from building a corpus to process tracing and text analysis.</p>
  </div>
  <div class="methods-feature-links">
    <a class="methods-feature-primary" href="{{ '/methods/' | relative_url }}">Use the method chooser <span aria-hidden="true">&rarr;</span></a>
    <a href="{{ '/methods/qualitative/' | relative_url }}">Qualitative</a>
    <a href="{{ '/methods/quantitative/' | relative_url }}">Computational</a>
  </div>
</aside>

<section id="program-snapshot" class="program-snapshot" aria-labelledby="program-snapshot-title" markdown="0">
<div class="section-heading">
  <p class="section-kicker">At a glance</p>
  <h2 id="program-snapshot-title">Programme snapshot</h2>
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

<p class="snapshot-note">All dates are for the <strong>{{ site.data.programs.academic_year }} academic year</strong>. Always confirm deadlines with your supervisor and programme coordinator.</p>
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
