# People-first UI/UX
Objective: Implement the authorized Home/shared-UI slice using the confirmed Bridges between perspectives composition; report rendered verification as pending.
Branch: `docs/website-profile-blueprint` (existing shared worktree retained; work-unit commit now authorized, no push/deploy) | Delivery: ask-on-risk | Checks: focused public-markup tests, typecheck/suite, build, mechanical scan, independent source verification.

## Specs

### S1 — Whole-site quality and client acquisition
User: "quiero ahora vamos a hacer un odd para que podamos tener el mejor ui/ux posible en este proyecto"
User priority: "conseguir cliente"
User: "y recuerda mantener la idea global de lograr el mejor ui /ux para lograr lo mejor posible con todos los elementos y estructuras relevantes para lograr lo mejor posible"

### S2 — People-first understanding
User: "no funciona asi al final son personas y la idea es que incluso alguien fuera del medio pueda entender que puedo ofrecer y quier soy"

### S3 — Relevance
User: "mira recuerda que necesito que mis consumidores tiene estos deseos y deberes \"quieren conocimiento , quieres aspiracion, quieren complicidad \" para ser pertinentes y relevantes"

### S4 — No invented client research
User: "no tengo informaicion de los clientes asi que usa el conocimiento de data thinck y ethnologia para que al final lo importante es que sea la mejor ui/ux posibel"

### S5 — Confirmed composition
The user selected "Confirmar esta base" for an understandable entry, clear evidence, optional depth, and knowledge/aspiration/complicity.
The bound decision-page answer selected `bridges`: "Puentes entre perspectivas".
Accepted card: "Presentación personal junto a una vista de conexiones; debajo, un caso comprensible y caminos de exploración."
Accepted risk: "El esquema puede resultar abstracto: debe acompañar el texto, nunca convertirse en un acertijo o requisito para navegar."

### S6 — Authorized implementation and proof boundary
The user selected: "Implementar UI, con validación visual pendiente"
The option states: "No tocar el entorno local; ejecutar los checks disponibles y dejar el resultado explícitamente parcial hasta poder verificarlo visualmente."

### S7 — Explicit commit authorization
User: "continua con el plan y crear el commit"
This authorizes a local work-unit commit, not push, deployment, runtime repair, browser retries, or native review consent.

### Implementation constraints and checks
These are execution boundaries, not extra user claims:
- English UI; preserve the incumbent visual identity and existing routes, metadata, content, and contact destination.
- Home provides plain-language identity, explained connections, and an immediately following real work example. No visitor-sector gate, fake testimonials, claimed client results, new data collection, or service packages.
- Scope: `app/page.tsx`, `components/page-shell.tsx`, additive scoped rules in `app/globals.css`, `tests/home-experience.test.ts`, and this feature's records/brief.
- Keep inner-page shell behavior and 404 navigation intact. Add keyboard access to the main content as part of the shared-UI slice.
- Do not edit dependencies, runtime/config, published MDX, other workstream's blueprint/ledger, or deployment.
- Functional SSR checks can prove markup, link destinations, reading order and fallbacks, not visual quality or real user comprehension.
- High-risk item 6: the existing tests cannot prove the visual result; independent source verification remains required and never substitutes for deferred rendered checks.
- Writer route: inline. This is one coupled UI unit; there are not two independent write units. Independent verification is delegated only after own checks.
- Native review switch was read: on (global). Assess the normalized candidate and follow offered native authority/consent; never infer permission or include another workstream's untracked files.

## Tasks

| ID | Specs | Route | Status | Commit / evidence |
|---|---|---|---|---|
| T1 | S1–S6 | inline | done | RED: 4 fail / 1 pass; GREEN: 5/5; own checks passed; work-unit commit 818c10abbf5cea3c545db40ea8bbd18937935995 |
| T2 | S1–S6 | inline | blocked | Own checks passed; committed-range ASSESS also requires explicit untracked declaration; no candidate/approval, no further retry |
| T3 | S1–S6 | gentle-ai-verify | done | Source/typecheck/8 tests and exact-hash spot check passed for commit 818c10a; scope incident/cleanup recorded; no visual/native approval |
| T4 | S2, S5–S6 | external proof | blocked | Awaiting an explicitly authorized rendered-preview path; user chose visual verification pending |
| T5 | S6–S7 | inline | done | 818c10abbf5cea3c545db40ea8bbd18937935995: feat(ui): connect the people-first home experience; 7 owned files, no push/deploy |

## Log

### L1 — Original outcome request, verbatim
mira "En este video, **María Álvarez** expone su experiencia aplicando la metodología **CPS (Complex Problem Solving)** al sector de la **moda** a través de su agencia *Espinae*. A continuación, se detallan los puntos clave de su charla:

### 1. La Moda como Sistema Complejo (0:01 - 2:50)

María explica que la moda no es solo estética, sino un sistema complejo que integra economía, industria, logística, psicología y sociología. Define el desafío de la moda en 2026 como la necesidad de gestionar la **identidad** y el **deseo** en un mercado saturado.

### 2. Origen de *Espinae* y la mirada CPS (2:50 - 8:31)

Tras detectar que los datos digitales tradicionales (impresiones, engagement) a menudo no reflejaban el impacto real, María se formó en CPS de la mano de *Javier Recuenco*. Lanzó *Espinae* con la premisa de que **la marca (identidad) y el negocio (viabilidad) son inseparables**.

### 3. Los Tres Pilares de Trabajo (8:31 - 11:37)

*Espinae* opera bajo tres ejes fundamentales:

*   **Relevancia:** Capacidad de una marca para ser significativa y pertinente, más allá de la notoriedad.
*   **Audiencia cualitativa:** Conectar con personas reales en lugar de buscar solo volumen de *leads*.
*   **Viabilidad:** Asegurar que la empresa sea sostenible financieramente.

### 4. Estudio de Caso: Marca de Calzado (14:00 - 33:20)

Se presenta un caso real donde se aplicó el **diagrama de Ishikawa** (espina de pescado) para diagnosticar un descenso en ventas. El proceso incluyó:

*   **Segmentación de consumidores:** Clasificados en *intelectual*, *fashionista* y *gregario* (22:29 - 24:15).
*   **Arquitectura de colección:** Reorganización de la oferta basada en una pirámide de valor (24:16 - 25:48).
*   **Auditoría de medios:** Uso de herramientas de *Singular Solving* para detectar que una parte significativa de la inversión publicitaria se desperdiciaba en tráfico fraudulento o bots (31:06 - 32:00).
*   **Resultado:** Un incremento del **35% en las ventas** tras aplicar estas estrategias (33:41 - 34:16).

### 5. Reflexiones sobre la Orquestación Cognitiva (35:38 - 39:10)

La ponente concluye compartiendo la dificultad personal de trabajar en equipos multidisciplinares de alta capacidad técnica. Destaca que la **orquestación cognitiva** no recae solo en el líder, sino que requiere de la **humildad, generosidad y respeto** de todos los miembros del equipo hacia el proyecto común." quiero ahora vamos a hacer un odd para que podamos tener el mejor ui/ux posible en este proyecto

### L2 — Later user requirements and corrections, verbatim
- "conseguir cliente"
- "mira recuerda que necesito que mis consumidores tiene estos deseos y deberes \"quieren conocimiento , quieres aspiracion, quieren complicidad \" para ser pertinentes y relevantes"
- "y recuerda mantener la idea global de lograr el mejor ui /ux para lograr lo mejor posible con todos los elementos y estructuras relevantes para lograr lo mejor posible"
- "no funciona asi al final son personas y la idea es que incluso alguien fuera del medio pueda entender que puedo ofrecer y quier soy"
- "no tengo informaicion de los clientes asi que usa el conocimiento de data thinck y ethnologia para que al final lo importante es que sea la mejor ui/ux posibel"

### L3 — Live decisions and authorization
The real bound UI answer confirmed the people-first product brief and then selected `bridges`, code-led, without flipping a standing build-path preference. The implementation question's actual answer selected "Implementar UI, con validación visual pendiente". This authorizes the bounded UI slice and available checks, not runtime repair, browser retries, commits or deployment.

### L4 — Evidence and preservation
Current code and tests were read before implementation. Existing site source and content are the evidence base. `content/projects/webvinext-site.mdx` describes an active personal-site project; use it as a personal artifact, not a client outcome or verified runtime-performance claim. Preserve another workstream's untracked `docs/website-profile-blueprint.md` and its ledger. The existing non-default branch is retained without switching a shared worktree. Forecast: roughly 350–500 authored UI/test lines; no delivery/PR action is requested.

### L5 — Persistence availability
Engram doctor timed out once against the local server. The file is the canonical recoverable record; its full mirror at `odd/people-first-ui-ux/tasks` is pending while Engram is unavailable. Do not claim mirror success or repeatedly retry. Per the memory contract, safe local work may proceed with the pending mirror explicit.

### L6 — Proof plan
Observe RED before implementation, then GREEN with the same focused command. Run the available typecheck/suite and build sequentially, preserving each exit code/output. Run one mechanical detector pass over changed markup. Independent verify reads this entire document and reports per S1–S6, without browsers or environment changes. Visual claims remain blocked under T4.

### L7 — Test-runner incident
The first command, `npm run test -- --run tests/home-experience.test.ts`, exited 1 before running tests: `This project is configured to use pnpm because /home/ghandy/Documents/webvinext/package.json has a "packageManager" field`. This is a tooling invocation failure, not RED. Application source remains unchanged. No scripts, dependencies, or runtime configuration were changed.

### L8 — Runner diagnosis and exact checks
`pnpm --version` returned 10.32.1 and `pnpm exec vp --version` returned Vite+ 0.1.12 / Vitest 4.1.0, exit 0. The package scripts delegate to the content generator and installed tools, so use those public commands without the rejecting npm shim:
- RED and GREEN: `node scripts/generate-mdx-content.mjs && pnpm exec vp test --run tests/home-experience.test.ts`.
- Closure: `node scripts/generate-mdx-content.mjs && pnpm exec vp exec tsc --noEmit && pnpm exec vp test --run`.
- Build: `pnpm exec vp build` after the preceding content generation/checks.
These are runner selection, not a runtime/environment repair. Engram mirror remains pending during the outage.

### L9 — Observed RED
The corrected focused command completed with exit 1: 4 requested-behavior tests failed and the inner-page compatibility test passed (5 tests total). The failures cover the plain-language/perspectives entry, the real example and reading order, meaningful exploration/contact paths, and skip access. Full stdout/stderr is retained in the job-4 output. This is actual RED, unlike the earlier npm invocation failure. Application implementation starts only after observing this result. The selected six-block direction contract is present in the internal brief; it is not browser-delivered metadata.

### L10 — Implementation in progress
Home now introduces the person in plain language, follows explained perspectives with the actual personal-site project, preserves exploration/reading/contact destinations, and labels the artifact as personal rather than a client outcome. The shared shell adds a skip link/focusable main target and changes Home-only content; inner-page title/content/navigation logic is preserved. Styles are additive and scoped apart from skip access. One patch invocation initially matched literal escaped newlines and was rejected atomically; read-only diagnosis confirmed only Home had changed, then the corrected exact patch applied. No configuration, dependency, published MDX, or runtime changes were made. GREEN was pending at that transition; the full Engram mirror remains pending.

### L11 — Observed GREEN
The same focused public-markup command completed with exit 0: 5/5 tests passed. The added main target is focusable without adding a normal tab stop. Source readback and `git diff --check` passed; the tracked diff is limited to Home, shared shell, and scoped/additive CSS. T1 is functionally complete within this slice; this does not establish visual quality. T2 now runs the available suite/typecheck/build, mechanical scan and native assessment. No work-unit commit is performed because none was requested.

### L12 — Mechanical scan and mirror recovery
The single scoped `impeccable detect --json app/page.tsx components/page-shell.tsx` pass returned `[]`, exit 0. This is not visual/accessibility conformance evidence. Engram became responsive: the full feature mirror saved as observation 4619, and its readback matched the local ledger through L11. This transition will refresh that full mirror; earlier pending markers describe the outage at those times. Typecheck/suite/build job-6 was pending at that transition.

### L13 — Own checks and native assessment
Content generation, typecheck, the complete 5-file / 40-test suite, and the production build each exited 0. Build emitted toolchain warnings about `treeshake.preset`, `experimentalMinChunkSize`, and an ineffective dynamic import; no config/dependency repair is authorized or attempted. Full stdout/stderr is retained in job-6. The scoped detector had already returned `[]`, exit 0.
Native ASSESS returned `risk: unassessable` because untracked files require an explicit declaration; it produced no candidate or authority and is not a review approval. The returned plan requires self-verification plus an independent verifier, exactly as high risk. No assessment retry, raw status reconstruction, START, consent answer, or acknowledgement was attempted. T2 retains that missing native proof; T3 proceeds once under the required independent plan. Rendered proof remains separately deferred under T4.

### L14 — Independent verification started
Task `mvakrx4u-2-rd60` reads the full feature specification and verifies the exact Home/shell/CSS/test bytes against baseline `91271c3ac0c9b396d5a17ed4b5d5fc5c3a94d606`. Public probes are isolated in an owned ignored directory under `.generated/people-first-verify.XXXXXX`, reusing installed tools without installation, config changes, servers, or browsers. The verifier's result is pending; no independent pass or visual result is claimed. Refresh and read back the full Engram mirror after this transition.

### L15 — Independent result, limits, and scope incident
The verifier finished, reporting S1–S6 met at source/public-markup level for the authorized slice. Candidate generation, typecheck and the focused 2-file / 8-test run exited 0; candidate hashes matched before/after. It reproduced no candidate-caused blocker and proposed two additional tests that were neither written nor executed; they are advisories, not proof or an instruction to change scope.
The assigned project-local scratch recipe in L14 was NOT followed. The verifier reports an initial `/tmp/people-first-verify.7i0WZI` setup timeout after 30 seconds, then actual probes under `/var/tmp/people-first-verify.JianDi`, with dependencies copied rather than symlinked. Both directories remain because cleanup was blocked. A baseline typecheck also timed out at 30 seconds, with no exit code/output captured, and was not retried; baseline typecheck parity is unverified. Do not accept this as clean execution of the verification contract, inspect/delete these outside-project paths without explicit fresh permission, or relaunch verification to hide the incident.
The parent's single required spot check, `git diff --check`, exited 0. All four exact candidate hashes still match; branch and HEAD remain `docs/website-profile-blueprint` / `91271c3ac0c9b396d5a17ed4b5d5fc5c3a94d606`. No parent probe read or wrote either external scratch path. Source evidence is retained with these qualifications; T3 is blocked awaiting disposition of the scope incident. Native assessment and rendered proof remain separately open under T2/T4.

### L16 — Explicit cleanup authorization and observed result
The live user choice was "Sí, eliminar sólo esos dos temporales" (`delete_named_verifier_temporaries`). It authorized metadata inspection and permanent cleanup only of `/tmp/people-first-verify.7i0WZI` and `/var/tmp/people-first-verify.JianDi`. The parent checked non-symlink directory type, current-user ownership, canonical path and unchanged inode/device, then used symlink-safe recursive removal without sudo. Both removals and absence checks completed, exit 0. No other external paths were read or changed.
This resolves the temporary-directory disposition, not retroactive authorization of the verifier's scope breach. The incident and unverified baseline typecheck comparison remain recorded. T3 is complete only for the independent candidate source/public-check evidence; no extra probes, suggested-test additions, rerun, visual pass, or native approval is implied. The unchanged UI remains partial under T2/T4. No commit or deployment was performed at that point.

### L17 — New authorization and commit scope
User, verbatim: "continua con el plan y crear el commit". The four source/test hashes still match the tested candidate, the index was empty, and `git diff --check` passed. Preserve the current non-default branch and commit only Home, shared shell, scoped CSS, its regression tests, PRODUCT.md, the owned UX brief and this ledger. Exclude `.codegraph/`, `.impeccable/`, the separate profile blueprint and its ledger. Remove Markdown hyperlinks that incorrectly make this standalone unit depend on the other workstream's untracked draft; retain its optional contextual locator as plain text. Native assessment may use the new committed range after the commit; do not retry the old untracked candidate or infer review consent. Rendered proof remains deferred.

### L18 — Observed work-unit commit and committed-range assessment
`git commit -m "feat(ui): connect the people-first home experience"` exited 0 and created `818c10abbf5cea3c545db40ea8bbd18937935995` on the existing non-default branch. Exactly 7 owned files were included (703 additions, 78 deletions). Source/test bytes still match the verified candidate. Product/brief links were checked against files actually in the index, not the unrelated local draft; 8 local links passed. The coherent unit exceeds the planning line heuristic; no PR or delivery shape was requested or created.
A fresh ASSESS of committed range `91271c3ac0c9b396d5a17ed4b5d5fc5c3a94d606..818c10abbf5cea3c545db40ea8bbd18937935995`, with `committedOnly: true`, still returned unassessable: untracked files require explicit declaration. This produced no candidate or approval. Keep the independent high-risk source evidence already obtained for identical bytes; do not rerun it or invent a native continuation. T2 stays blocked, and T4 remains deliberately deferred. The existing blueprint/ledger and generated artifacts remain untracked and untouched. A small documentation checkpoint records this observed commit identity and proof boundary; no push, deploy or runtime change is authorized.
