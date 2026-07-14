---
layout: default
title: Process Tracing
---

<div class="page-layout">
<aside class="page-sidebar">
<div class="page-sidebar-inner">
<h4 class="page-sidebar-title">Contents</h4>
<nav class="page-toc" aria-label="On this page">
<ul>
<li><a href="#what-is-process-tracing">What Is Process Tracing?</a></li>
<li><a href="#key-concepts">Key Concepts</a></li>
<li><a href="#types-of-evidence-tests">Types of Evidence Tests</a></li>
<li><a href="#when-to-use-it">When to Use It</a></li>
<li><a href="#how-to-apply-it">How to Apply It</a></li>
<li><a href="#structuring-your-thesis">Structuring Your Thesis</a></li>
<li><a href="#example-from-the-literature">Example from the Literature</a></li>
<li><a href="#common-pitfalls">Common Pitfalls</a></li>
<li><a href="#key-readings">Key Readings</a></li>
<li><a href="#related-methods">Related Methods</a></li>
</ul>
</nav>
</div>
</aside>

<div class="page-content" markdown="1">

# Process Tracing

Process tracing is for causal questions where timing and sequence matter. It asks how a cause produced an outcome inside a case, then tests the proposed chain against evidence.

---

## What Is Process Tracing?

Process tracing examines the events and decisions that connect a proposed cause to an observed outcome. The central object is the **causal mechanism**: the sequence of steps through which the cause produces the effect.

As [Collier (2011)](https://doi.org/10.1017/S1049096511001429) puts it, process tracing is "the systematic examination of diagnostic evidence selected and analyzed in light of research questions and hypotheses posed by the investigator." The method is more demanding than narrative. You test whether the evidence fits the proposed causal chain and whether it weakens the alternatives a reader might raise.

<div class="info-box" markdown="1">

**Within-case vs. cross-case.** Process tracing stays inside one case. Comparative methods such as MSSD or MDSD work across cases. The two methods often work together. Comparison identifies the variable of interest. Process tracing tests how it worked in a case.

</div>

---

## Key Concepts

**Causal mechanism.** A causal mechanism is a theorized sequence of steps, or entities and activities, that transmits a causal force from X to Y. Suppose you hypothesize that economic sanctions cause policy change. The mechanism might run like this: sanctions are imposed --> export revenue falls --> firms linked to the ruling coalition lose profits --> business elites pressure the government --> the government concedes. Each step needs evidence.

**Temporal structure of the causal chain.** A causal mechanism unfolds over time. Each step in the chain occurs at a specific moment. [Seawright (2016)](https://doi.org/10.1017/CBO9781316160831) characterizes this as a sequence running from an initial condition at time 1 (T₁) through intermediate steps at T₂, T₃, and onward, to the outcome at Tₙ. This temporal ordering gives you empirical leverage. It also keeps the account from becoming plain chronology. At each time point, the mechanism implies a specific state of affairs that should be observable. Take the sanctions example. At T₁, sanctions are imposed and export revenue begins to decline. At T₂, firms connected to the ruling coalition report losses. At T₃, business elites pressure the government. At T₄, the government calculates that the cost of maintaining the policy exceeds the cost of conceding. At T₅, the policy changes. Each step is both an effect of what came before it and a cause of what follows.

The temporal structure matters in two ways. The sequence has to hold, and each step has to generate evidence that can be checked at that moment. If evidence shows that elites pressured the government *before* sanctions caused economic losses, the proposed mechanism is disconfirmed regardless of how plausible each individual step appears in isolation. Evaluate the mechanism as a chain of linked claims, each of which can independently pass or fail an evidence test. The more links survive testing, the stronger the overall inference. If one link breaks, the chain as a whole is called into question. When you specify your mechanism (see [Step 1](#step-1-specify-your-causal-mechanism-in-advance) below), assign each step a place in the temporal sequence and identify what observable state of affairs you would expect at that moment.

**Diagnostic evidence.** Process tracing relies on evidence that can discriminate between competing explanations. Some evidence carries more weight than other evidence. The key question is whether a piece of evidence confirms or disconfirms a specific step in the proposed mechanism. [Beach and Pedersen (2019)](https://doi.org/10.3998/mpub.10072208) distinguish between different types of observable manifestations that can serve as diagnostic evidence for each step of a mechanism.

**Variants of process tracing.** [Beach and Pedersen (2019)](https://doi.org/10.3998/mpub.10072208) distinguish theory-testing, theory-building, and explaining-outcome variants. Student theses usually use the theory-testing version: derive a mechanism from the literature, then test whether it operated in the case. If theory-building or explaining-outcome fits better, read Beach and Pedersen (2019, chs. 3--5) and discuss the choice with your supervisor.

**Equifinality.** Several different causal paths can produce the same outcome. Process tracing shows that the mechanism operated in your case. It cannot prove the mechanism is the only possible explanation. You must always consider and address alternative mechanisms that could also explain the outcome.

<div class="tip-box" markdown="1">

**Keep the chain visible.** Process tracing is easiest to defend when every piece of evidence is tied to a specific step. A paragraph that cannot be mapped to a step in the mechanism is probably background narrative.

</div>

---

## Types of Evidence Tests

[Mahoney (2012)](https://doi.org/10.1177/0049124112437709) and [Collier (2011)](https://doi.org/10.1017/S1049096511001429) identify four classic tests for evaluating evidence in process tracing. Each test carries different implications for confirming or eliminating a hypothesis.

| Test | Passing confirms? | Failing eliminates? | Logic |
|------|-------------------|---------------------|-------|
| **Straw-in-the-wind** | Slightly | No | Consistent evidence. It neither confirms nor eliminates the hypothesis |
| **Hoop** | No | Yes | A necessary condition. Failing it eliminates the hypothesis |
| **Smoking gun** | Yes | No | Strongly confirms if found, but absence does not eliminate |
| **Doubly decisive** | Yes | Yes | Both necessary and sufficient. Rare |

**Straw-in-the-wind tests** offer weak evidence. Finding that a government official mentioned sanctions in a speech is consistent with the sanctions mechanism, but it does not prove the mechanism operated. Failing the test does not eliminate it either.

**Hoop tests** set minimum thresholds. If you claim sanctions caused economic pain to elites, there must be evidence of actual economic losses. If there is no such evidence, the mechanism fails. Finding economic losses alone, however, does not confirm the full mechanism.

**Smoking gun tests** provide strong confirmation. A leaked memo showing that business elites explicitly pressured the government to change policy because of sanctions would be powerful evidence. Failing to find such a memo does not mean the pressure never occurred.

**Doubly decisive tests** are both necessary and sufficient. They are the gold standard, but they are extremely rare in social science.

<div class="reflection-box" markdown="1">

**Ask yourself**

- For your proposed mechanism, which steps could you subject to a hoop test? What evidence would need to exist for each step to remain plausible?
- Can you think of a smoking gun that would strongly confirm one of your causal steps?
- What alternative mechanisms could explain the same outcome, and what evidence would distinguish your explanation from those alternatives?

</div>

---

## When to Use It

Process tracing fits when the question asks how an outcome happened inside a case.

- Your research question asks **how** or **why** an outcome occurred in a specific case
- You have a proposed causal mechanism you want to test or develop
- You can obtain detailed evidence about the sequence of events within the case
- You want to examine the causal logic connecting variables

It is a poor fit when the question is mainly about prevalence across many cases, when the source base is too thin, or when the thesis is primarily interpretive.

For cross-case prevalence, use comparison or quantitative analysis. For meaning-making without a causal mechanism, consider framing analysis or discourse analysis.

<div class="info-box" markdown="1">

**BA vs. MA expectations.** BA projects should state the mechanism in advance and assess the evidence step by step. MA projects should justify the chosen variant and apply the evidence tests explicitly. They also need a fuller treatment of alternatives and equifinality. See [Assessment Standards]({{ '/assessment-standards/' | relative_url }}) for how methodology is evaluated.

</div>

---

## How to Apply It

Process tracing involves a structured sequence of steps. The sections below work through each one.

### Step 1: Specify Your Causal Mechanism in Advance

Before examining your case, you must articulate the mechanism you expect to find. This means breaking your proposed explanation into discrete, sequential steps. Each step should identify who does what and why.

Write out the full chain. X --> Step 1 --> Step 2 --> Step 3 --> Y. Be specific. "Economic pressure leads to policy change" is too vague to count as a mechanism. "Sanctions reduce export revenue --> firms linked to the ruling coalition lose profits --> business elites lobby the president for concessions --> the president calculates that the cost of maintaining the policy exceeds the cost of conceding" is a mechanism.

<div class="tip-box" markdown="1">

**Draw it out.** Create a diagram of your mechanism with each step in a separate box and arrows connecting them. The exercise forces you to be explicit about the causal logic. It also helps you identify where the chain might break down.

</div>

### Step 2: Derive Observable Implications for Each Step

For each step in the mechanism, ask what evidence you should expect to find if the step actually occurred. Then ask what evidence would be inconsistent with it.

These observable implications are your empirical predictions. Suppose you claim that business elites pressured the government. You would then look for evidence such as meeting records, public statements by business leaders, lobbying disclosures, media reports of business opposition, or shifts in political donations.

Think about what type of evidence test each piece of evidence constitutes, whether a hoop, smoking gun, or straw-in-the-wind test. Prioritize evidence that can serve as a hoop or smoking gun test, since these carry the most inferential power.

### Step 3: Collect and Evaluate Evidence Step by Step

Gather evidence for each step of the mechanism. This typically involves primary sources (government documents, speeches, archival records, interview transcripts, media coverage) and may be supplemented by secondary scholarship.

For each piece of evidence, ask the following.

1. **What step does it speak to?** Map every piece of evidence to a specific step in your mechanism.
2. **What kind of test does it represent?** Is it a hoop test (necessary condition), a smoking gun (strong confirming evidence when present), or a straw-in-the-wind?
3. **How reliable is the source?** Consider the source's potential biases and the context in which it was produced. Check whether it can be corroborated.
4. **Does it support or weaken the mechanism?** Be honest. If evidence contradicts a step, report it and assess what it means for the overall argument.

### Step 4: Assess the Overall Chain

After evaluating evidence for each step, make a judgment about the mechanism as a whole. Did every step pass at least a hoop test? Were there any smoking guns? Which steps still have weak or missing evidence?

A strong process tracing analysis requires every step to pass its hoop test, since one failed hoop test breaks the chain. The overall body of evidence should also fit your mechanism better than plausible alternatives. A smoking gun for every step is welcome but not necessary.

### Step 5: Test Alternative Explanations

Identify at least one or two alternative mechanisms that could explain the same outcome. Subject them to the same evidence tests. If the evidence fits an alternative mechanism just as well, you cannot claim strong support for your preferred explanation.

This step is required. One of the most common weaknesses in student theses is confirming the preferred explanation while giving alternatives only passing attention. [Bennett and Checkel (2015)](https://doi.org/10.1017/CBO9781139858472) emphasize that the inferential power of process tracing depends on active engagement with competing hypotheses.

<div class="exercise-box" markdown="1">

**Exercise: Draft your causal mechanism**

1. State your research question and the outcome you want to explain.
2. Write out the proposed causal mechanism as a step-by-step chain (aim for 3-5 steps).
3. For each step, list at least two pieces of observable evidence you would expect to find if the step occurred.
4. Identify the strongest alternative explanation for your outcome and note how you would distinguish it from your preferred mechanism.
5. Bring this to your supervisor for feedback before you begin detailed evidence collection.

</div>

---

## Structuring Your Thesis

Process tracing maps directly onto a standard thesis structure, with specific requirements for each chapter. Here is how to organize the key sections.

### Introduction

Present your research question (a *how* or *why* question about a specific case) and motivate the puzzle, then briefly preview the proposed mechanism. State clearly that you are using process tracing as your method.

### Literature Review

Review the scholarly debate around your topic. Identify the competing explanations in the literature for the type of outcome you are studying. Those competing explanations become the basis for the alternative mechanisms you will test.

### Analytical Framework

The analytical framework chapter has three jobs.

1. **Explain and justify your method.** Define process tracing and explain why it is appropriate for your research question, citing the methodological literature (e.g., [Beach and Pedersen 2019](https://doi.org/10.3998/mpub.10072208) and [Bennett and Checkel 2015](https://doi.org/10.1017/CBO9781139858472)).
2. **Specify the proposed causal mechanism.** Lay out the full mechanism step by step, explaining the theoretical logic behind each step. Derive the mechanism from your theory before you turn to the data.
3. **State the observable implications.** For each step, identify what evidence you expect to find and what types of evidence tests you will apply. Also specify the alternative mechanisms you will test and their observable implications.

<div class="tip-box" markdown="1">

**The mechanism must appear before the findings.** A common mistake is to present the mechanism only after describing the evidence, which makes the analysis look like a post hoc narrative instead of a genuine test. Specify the mechanism in the analytical framework chapter. That way, the reader knows what you are testing before you present the results.

</div>

### Findings

Organize the findings chapters around the steps of the mechanism, letting the causal sequence drive the order of presentation. For each step, do the following.

- Present the relevant evidence
- Assess what type of test the evidence represents
- State whether the step passes or fails

If your mechanism has three to five steps, you might dedicate a subsection to each step within a single findings chapter. For longer mechanisms, split the analysis across two chapters. Either way, the steps of the mechanism supply the organizing logic.

Address alternative explanations within the findings chapters or in a dedicated section. Show that the evidence fits your mechanism better than the alternatives.

### Conclusion

The conclusion evaluates the overall causal chain. Did the mechanism hold? Which steps were most strongly supported? Where was the evidence weakest? What does this tell you about the broader theoretical debate you engaged in your literature review? Discuss limitations honestly. Pay particular attention to any steps where evidence was thin, and suggest directions for future research.

<div class="info-box" markdown="1">

**Example structure for a process tracing thesis.**

1. Introduction
2. Literature Review
3. Analytical Framework (method justification, full mechanism specification, observable implications, alternative mechanisms)
4. Findings I: Steps 1-2 of the mechanism
5. Findings II: Steps 3-4 of the mechanism and alternative explanations
6. Conclusion and Discussion
7. Bibliography

</div>

---

## Example from the Literature

George and Bennett (2005, ch. 10) use the end of the Cold War as an illustrative case. The question is *how* the Cold War ended peacefully. Through what causal mechanism did Soviet foreign policy shift from confrontation to cooperation in the late 1980s? Simply noting that Gorbachev came to power and the Cold War ended would establish a correlation, no more. Process tracing instead unpacks the intervening steps. Among them are the diffusion of new ideas among Soviet policy intellectuals, Gorbachev's receptiveness to those ideas, specific policy decisions (such as accepting asymmetric arms reductions), and the feedback effects of Western responses. Each step is specified in advance and evaluated against the documentary and testimonial record. The analysis also considers alternative mechanisms, such as economic decline forcing Soviet concessions regardless of leadership, and shows why the evidence better supports an ideas-driven explanation.

The useful model is the sequence. State the mechanism before the findings. Then test each link against evidence and alternatives. For a concise overview, see [Collier (2011)](https://doi.org/10.1017/S1049096511001429), who uses simpler examples to demonstrate the same logic of diagnostic evidence and step-by-step evaluation.

---

## Common Pitfalls

**Confusing narrative with process tracing.** Process tracing requires a theorized mechanism specified in advance and explicit evidence tests for each link in the causal chain. A findings chapter that only tells the story in chronological order is doing narrative work.

**Late mechanism specification.** If you derive your mechanism from the same evidence you use to test it, you are engaged in circular reasoning. The mechanism should come from theory, namely your literature review and analytical framework, before you turn to your data. You can refine the mechanism during research. The version you test must be stated before you present findings.

**Cherry-picking evidence.** Selecting only the evidence that supports your explanation while ignoring contradictory evidence undermines the entire exercise. Process tracing requires that you actively look for disconfirming evidence and report it transparently. If a step fails a hoop test, say so.

**Ignoring alternative explanations.** Showing that evidence is consistent with your mechanism gives you only part of the argument. The same evidence may also be consistent with other mechanisms. If you do not test alternatives, you cannot claim that your mechanism is the most plausible explanation. At minimum, identify the strongest competing explanation from the literature and subject it to the same evidence tests.

**Treating all evidence as equal.** A straw-in-the-wind test does not carry the same inferential weight as a smoking gun. Be explicit about what kind of test each piece of evidence constitutes. A thesis that relies entirely on straw-in-the-wind evidence remains weak, even if there is a lot of it.

**Vague or unfalsifiable mechanism steps.** Each step must be specific enough that you could, in principle, find evidence against it. "Elites were unhappy" is too vague to test. "Business leaders in the export sector publicly opposed the sanctions policy" is testable.

<div class="reflection-box" markdown="1">

**Ask yourself**

- Read through your findings draft. For each paragraph, can you identify which step of the mechanism it addresses and what type of evidence test it represents? If not, you may be narrating instead of tracing.
- Have you presented any evidence that contradicts your mechanism? If everything in your findings supports your argument perfectly, consider whether you have been sufficiently self-critical.

</div>

---

## Key Readings

**Essential**

- [Beach, D., & Pedersen, R. B. (2019). *Process-Tracing Methods: Foundations and Guidelines* (2nd ed.). University of Michigan Press.](https://doi.org/10.3998/mpub.10072208). The most comprehensive methodological guide. Covers the theory-testing, theory-building, and explaining-outcome variants in detail. Start here for method design.

- [Collier, D. (2011). Understanding process tracing. *PS: Political Science & Politics*, 44(4), 823--830.](https://doi.org/10.1017/S1049096511001429) ([Free PDF](https://polisci.berkeley.edu/sites/default/files/people/u3827/Understanding%20Process%20Tracing.pdf)). A clear, concise introduction to the method and the four evidence tests. Excellent starting point for students new to process tracing.

**Advanced**

- [Bennett, A., & Checkel, J. T. (Eds.). (2015). *Process Tracing: From Metaphor to Analytic Tool*. Cambridge University Press.](https://doi.org/10.1017/CBO9781139858472). A multi-author volume that explores different traditions and applications of process tracing. Particularly useful for MA students seeking deeper methodological grounding.

- [Mahoney, J. (2012). The logic of process tracing tests in the social sciences. *Sociological Methods & Research*, 41(4), 570--597.](https://doi.org/10.1177/0049124112437709). Formalizes the logic of the four evidence tests. Important for understanding the inferential foundations of the method.

- [Seawright, J. (2016). *Multi-Method Social Science: Combining Qualitative and Quantitative Tools*. Cambridge UP.](https://doi.org/10.1017/CBO9781316160831). Develops the temporal logic of causal chains (T₁ through Tₙ) and explains how process tracing integrates with cross-case methods. Useful for thinking about what each step in a mechanism must look like as an observable state of affairs at a specific moment.

- George, A. L., & Bennett, A. (2005). *Case Studies and Theory Development in the Social Sciences*. MIT Press. A foundational text on case study methods more broadly, with a landmark treatment of process tracing in the context of theory development. Chapter 10 is the key chapter.

<div class="info-box" markdown="1">

**Where to start.** BA students should begin with [Collier (2011)](https://doi.org/10.1017/S1049096511001429) for a clear overview, then consult [Beach and Pedersen (2019)](https://doi.org/10.3998/mpub.10072208) for practical guidance on designing the analysis. MA students should read Beach and Pedersen in full and engage with [Bennett and Checkel (2015)](https://doi.org/10.1017/CBO9781139858472) for a more advanced treatment.

</div>

---

## Related Methods

Process tracing usually sits next to one other method.

- **[Comparative Case Study]({{ '/methods/qualitative/comparative-case-study' | relative_url }}).** Use comparison to identify the variable or case difference that needs explaining. Use process tracing to test the mechanism inside one case.

- **[Building a Corpus]({{ '/methods/building-a-corpus' | relative_url }}).** Use it when the evidence comes from documents, speeches, policy records, or media coverage. A clean source base makes it easier to test each step of the mechanism.

</div>
</div>
