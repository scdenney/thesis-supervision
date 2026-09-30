# AI policy for take-home written work

Steven Denney, Leiden University, Faculty of Humanities. Version 2026-09. Licensed CC BY 4.0: copy, adapt, and attach to a syllabus or thesis guide.
Full page with the evidence behind these rules: https://scdenney.github.io/thesis-supervision/ai-policy/

## Scope

These rules apply to theses and to all take-home written work that I supervise or assess. They add to the Faculty of Humanities Guidelines for the Use of GenAI in Assessment (27 August 2025, https://www.organisatiegids.universiteitleiden.nl/en/regulations/humanities/guidelines-for-the-use-of-genai-in-assessment), which already require that any GenAI use in assessed work be explicitly permitted by the teacher, fully disclosed and cited, and documented in a record of prompts and outputs handed over on request, and which treat rewriting or paraphrasing AI-generated text as fraud.

## The rules

1. **Agree AI use in advance.** Before building any generative or agentic AI tool into your workflow, tell me which tools you plan to use and for which tasks, and show that you understand what the tool does and where it fails. We agree it in writing, normally as a short section of the proposal. Without prior agreement, no AI-generated text or analysis may enter assessed work.

2. **Disclose fully and accurately.** The submission includes an AI-use statement listing every tool, every task it was used for, and what you checked. Keep prompts and outputs and share them on request, as the Faculty guidelines require. An inaccurate or incomplete statement is a breach in its own right.

3. **The manuscript is yours.** A manuscript generated primarily or entirely by AI will not be accepted, whatever the disclosure says. The question, reading, evidence, interpretation, and argument must be work you can explain and defend. Light AI-shaped editing from grammar tools is understandable and is what the margin in rule 5 is for. Wholesale drafting is not.

4. **Verify every source, because I will.** I check every reference list against Crossref and OpenAlex and spot-check that cited passages say what the text claims. A fabricated source, or a real source cited for something it does not contain, is grounds for a failing grade and referral to the Board of Examiners under the university's plagiarism regulations. This rule has no margin.

5. **Expect a Pangram check, with lines at 25% and 50%.** I run every submission through Pangram (pangram.com). Students are encouraged to run it themselves and attach the report. Under 25% of the text flagged as AI-generated or AI-assisted, nothing follows from the check alone. Between 25% and 50%, a meeting is automatic and may lead to an ad hoc oral defence that I arrange. Above 50% is grounds for a resit and possible failure. Below the lower line is not clearance, and rules 1 to 4 still apply.

6. **Be ready to defend it in conversation.** I may ask a student to explain any passage, choice, or finding without notes. This is the most reliable way to certify that the understanding is theirs.

7. **Protect data and sources.** Do not upload confidential, personal, copyrighted, or otherwise protected material to AI tools without checking the tool's data terms and, where participants are involved, the ethics arrangements.

## Consequences

- Undisclosed substantial AI generation is plagiarism under the university's regulations, which name AI-generated text presented as one's own.
- Fabricated or misattributed sources lead to a failing grade and referral.
- More than 50% of the text flagged by Pangram is grounds for a resit and possible failure.
- An inaccurate disclosure statement is a breach on its own.

## Why the check is set up this way

- **The threshold follows the false-positive rate.** Set the false-accusation rate the institution can tolerate first and derive the line from that (Jabarian and Imas 2025, NBER WP 34223). Pangram reports a false-positive rate of about 0.004%, roughly one human document in 24,000, and an independent evaluation (Jabarian and Imas 2025) found 0.1% or lower at every threshold, the only tool to meet a strict cap without losing accuracy. Its miss rate on fully AI text is about 0.3% in the vendor report and 0.5% to 4% in the independent evaluation. Lines at 25% and 50% keep the check well on the safe side.
- **The flagged share is not the AI share.** Pangram labels passages as human, AI-assisted, or AI-generated and gives a document-level verdict (Human at 90% or more human text, AI at 80% or more AI text, Mixed in between). On documents that are 25% to 75% AI it misses about a third of cases for the Mixed verdict, and one 2026 study found human text with light AI editing flagged 38% to 80% of the time. The number is a triage trigger, not a measurement.
- **Citation verification carries the weight. Detection carries the conversation.** Verification is deterministic and rests on the existing plagiarism regulation. Detection is probabilistic and only decides whether to look more closely.
- **Non-native writers.** Earlier detectors were biased against non-native English (Liang et al. 2023, Patterns). The current tool reports near-zero false positives on learner writing, but a flag is only ever the start of a conversation.

## AI-use statement template

> In preparing this work I used the following tools. [Tool and version.] I used them for the following tasks. [Task by task.] I did not use them for the following. [For example drafting any section of the argument, interpreting sources, or generating analysis.] All outputs were checked against the original sources by me. Prompts and outputs are retained and available on request. The use described here was agreed with my supervisor on [date]. A Pangram report is attached as Appendix [X].

## Key evidence in one paragraph

Studies that measure work done with an AI tool available find gains. Studies that then test the same people without the tool find no gain or a loss. High-school students with unrestricted GPT-4 scored 48% higher in practice and 17% lower on the unaided exam, while a guardrailed tutor kept the practice gain with no exam penalty (Bastani et al. 2025, PNAS). Junior patent lawyers gained most from AI-assisted drafting and nothing on later unaided review, while senior lawyers improved on both (Autor et al. 2026, NBER WP 35720, working paper). Experienced developers believed AI made them 20% faster and were measured 19% slower (Becker et al. 2025, METR). Users cannot judge from the inside whether the tool is helping them learn, which is why the policy relies on agreement, disclosure, verification, and conversation rather than on self-report. Full references: https://scdenney.github.io/thesis-supervision/ai-policy/#sources
