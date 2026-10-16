# People-first UI/UX brief

**Status:** Product/UX direction and composition confirmed by the user. Internal planning, not public copy, a finished visual design, implementation approval, or evidence of user validation.

**Goal:** A coherent whole-site experience that helps people outside the field understand who Ghandy is and what he could contribute, while supporting client acquisition.

**Product authority:** [PRODUCT.md](../PRODUCT.md). Preserve the confirmed interdisciplinary breadth. The optional local draft at `docs/website-profile-blueprint.md` belongs to another workstream and is not part of this committed unit or an approved set of requirements.

## 1. The design decision

Make the entry understandable without specialist knowledge, with meaningful depth available for people who want it.

Do not force visitors into an industry, professional role, service category, or personality type. Client acquisition is a desired outcome of comprehension and trust, not permission to turn every page into a sales pitch.

### Selected composition: Bridges between perspectives

The user chose this composition from three structural schematics. It inherits the existing visual identity; it does not select new logos, palette, or type.

- **First view:** a plain-language personal introduction and contribution beside a simple explanation of connected perspectives. Immediately below, one understandable work example shows its problem, contribution, evidence, and limits.
- **Reading order:** identity and relevance remain clear without interpreting a diagram. Connections support the text; they never become a quiz, a sector filter, or required navigation.
- **Across the site:** About expands perspective and method; project details connect decisions to artifacts; articles let readers deepen their understanding. Normal navigation and contact remain available.
- **Honest risk:** an abstract connection map can make the profile harder to understand. If it competes with the person or the evidence, simplify the map rather than require visitors to learn its notation.
- **Execution boundary:** the selected round is code-led, without an approved image comp or stored build-path preference. It authorizes this design choice, not application edits or a claim that the composition has passed usability testing.

Selection reference: `seed:139bd0d4de8cb1a5`. This is development-only context, not public-site content.

## 2. What is known, assumed, and unverified

| Status | Meaning for this brief |
|---|---|
| Confirmed by the user | Client acquisition matters; the whole UI/UX matters; non-specialists must understand identity and potential contribution; knowledge, aspiration, and complicity guide relevance. |
| Known from the repository | The site already has Home, About, Projects, Blog, detail pages, shared navigation, and an MDX content model. |
| Design hypotheses | A clear first layer, concrete explanations, and accessible evidence will make the experience easier to understand. These need evaluation, not invented statistics. |
| Not established | Actual visitor behavior, customer segments, conversion rates, testimonials, client outcomes, or a universally optimal design. |

Design Thinking helps separate understanding the problem from selecting solutions. An ethnographic lens asks whose language, context, symbols, and assumptions the interface privileges. Without observing people, this is an informed design lens, not completed ethnographic research.

## 3. Knowledge, aspiration, and complicity

| Relevance criterion | Experience contribution | Failure to avoid |
|---|---|---|
| Knowledge | Explain a real problem, a choice, and what the work demonstrates. Define necessary technical terms where they matter. | A wall of technologies or an unexplained claim to solve everything. |
| Aspiration | Make a useful future possibility concrete through credible examples and appropriately labeled demonstrations. | Guaranteed ROI, borrowed achievements, hype, or prototypes presented as client results. |
| Complicity | Use recognizable situations, respectful language, and an understandable working approach. Let people decide whether there is a fit. | Artificial intimacy, stereotypes, presumed agreement, or treating visitors as fans. |

These are overlapping criteria, not three personas, three navigation tabs, or three mandatory blocks on every page.

## 4. Proposed information architecture

Offer an understandable first layer and connected paths into deeper material:

1. **Orientation:** who Ghandy is, what kinds of situations his work addresses, and what the visitor can explore.
2. **Understanding and evidence:** examples, contribution, reasoning, limits, and an explanation of how he works.
3. **Optional depth:** architecture, tools, methods, articles, experiments, and background for readers who want more.

This is not one forced funnel. People may enter through an article, a project, About, or Home. Preserve useful cross-links and the ability to read or explore without being repeatedly pushed toward contact.

Technical detail remains valuable; it should clarify the work rather than become an entrance exam.

## 5. Jobs of the existing surfaces

| Surface | Proposed visitor job | Structural intent |
|---|---|---|
| Home | Understand the person and possible relevance. | Establish identity in plain language; offer intelligible evidence and exploration paths. |
| About | Understand perspective, methods, and working relationship. | Connect the interdisciplinary profile through examples and readable sections, not an endless list of skills. |
| Projects | Find work worth exploring. | Make summaries understandable and distinguish maturity and evidence; do not equate quantity with credibility. |
| Project detail | Understand the problem, contribution, choices, and limits. | Lead with context and explain technical depth in layers. Preserve artifacts and accurate outcome labels. |
| Blog | Find an idea worth reading. | Make topic and reader value apparent; allow both accessible introductions and genuinely technical articles. |
| Article detail | Learn without losing orientation. | Provide a readable hierarchy, definitions where useful, and a clear way to keep exploring. |
| Navigation and 404 | Know where to go and recover from a wrong path. | Use meaningful names, visible location and focus, understandable recovery, and consistent behavior. |

No new route, filter, accordion, form, or service catalog is required merely because it is a common pattern.

## 6. Whole-experience quality

- **Content and hierarchy:** prioritize comprehension; preserve depth through organization rather than deleting the broader identity.
- **Semiotics and identity:** examine what language, images, metaphors, status labels, and visual emphasis communicate. A technical aesthetic must not imply that outsiders are unwelcome.
- **Visual craft:** typography, layout, color, imagery, spacing, and motion must reinforce meaning. This brief does not select a new visual world.
- **Interaction:** links, affordances, focus, feedback, and navigation must be consistent and predictable.
- **Accessibility and responsiveness:** propose WCAG 2.2 AA as the implementation baseline, supplemented by cognitive-accessibility guidance. Do not claim conformance without the applicable checks.
- **Performance and maintenance:** avoid adding effects, scripts, assets, or content structures without a clear contribution to the experience.
- **Trust and contact:** make existing contact paths understandable; do not introduce collection of personal data, promises, or new service packages by assumption.

## 7. Evaluation criteria

A future comprehension check should ask a person unfamiliar with the field to:

- Explain who Ghandy is and what contribution they understood.
- Point to an example that supports that understanding.
- Distinguish an experiment or study from a demonstrated outcome.
- Find an understandable path to learn more or initiate contact.

These are proposed tasks, not completed interviews, validated insights, pass rates, or permission to collect personal data. No invented timing target or conversion benchmark is attached.

Implementation also needs proportionate checks of navigation, heading structure, focus, contrast, reflow, touch use, motion preferences, links, and relevant route/content behavior. A screenshot alone does not establish usability.

## 8. ODD continuation and boundaries

The source reconnaissance already exists; do not repeat it to manufacture more certainty.

The product/UX direction and Bridges between perspectives composition are confirmed. Do not reopen those decisions without new evidence or a user correction.

The user subsequently authorized a UI-only first slice with visual verification pending. Home, the shared shell, scoped styles, and regression tests are implemented in the working tree. The feature ledger records observed RED/GREEN, a passing 40-test suite, typecheck, build, and qualified independent candidate source checks. These are not visual quality or visitor-comprehension results.

The native readability/reliability review of the committed UI slice completed as approved, and its exact acknowledgement burned the review authority. That approval applies only to the frozen range ending at `b50a7932a65145ece47f7cfb1d8dd03843095a7c`, not later recordkeeping or rendered behavior. The remaining proof is separately authorized rendered desktop/mobile verification; it has not been completed or silently waived. Wider site changes are not implied by this first slice.

Published MDX, content schemas, dependencies, runtime configuration, the other workstream's blueprint, and deployment were not changed for this slice. No commit, push, publication, or browser retry is implied.

The previous runtime/browser problem is not reopened here. Before visual iteration or implementation is claimed verified, its required proof must have a separately authorized, available path.

## Direction contract

**THESIS:** A person connects perspectives into useful, inspectable work. Technical labels and portfolio counts are not the entrance.

**OWN-WORLD:** Keep the existing dark surfaces, cyan/violet accents, Manrope body and Syne display vocabulary. Do not add a new brand, type system, or visual-world costume.

**STORY:** Recognize Ghandy, understand the perspectives, inspect a personal artifact with explicit limits, then explore work and ideas or start a conversation.

**FIRST VIEWPORT:** Identity and a plain-language contribution sit beside an explained, fully readable relation list. A real personal-site example follows immediately. The primary action reaches that example; contact remains available.

**FORM:** Connected disciplines with a readable index, candidate 6 of 7; selection reference \`seed:139bd0d4de8cb1a5\`.

**SIGNATURE INTERACTION:** A normal in-page link bridges explanation and evidence. No diagram gate, hover-only content, or entrance animation. Keep semantic links, skip access, reduced-motion behavior, and optional depth.

Implementation authorization is UI-only for Home and shared components, with visual verification explicitly pending. Runtime/configuration repair, browser retries, commits, and deployment remain outside scope. Progress and proof: [feature ledger](../odd/tasks/people-first-ui-ux.md).

## 9. Sources and their limits

- [GOV.UK: Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) distinguishes researched needs from assumptions and recommends framing needs as people's problems rather than predetermined solutions. Its government-service context is not evidence about this portfolio's visitors.
- [W3C: Use Clear and Understandable Content](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/) supports familiar words, short blocks, understandable structure, and clear visual separation. This supplemental guidance is not itself a WCAG conformance requirement.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) provides the proposed accessibility baseline, not proof that the current site satisfies it.
- [Design Council: The Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/) is methodological background, not customer research or a guarantee of design quality.

The user-supplied CPS and fashion examples guide questions about relevance and meaning. Their attributed speakers, timestamps, consumer labels, and reported sales result are not validated audience data or this user's achievements.
