# Visual-first website — first delivery
Objective: stabilize the shared footer and deliver a more visual Home plus the real WebVinext case, preserving Ghandy's identity.
Baseline: 3a745f5; current feature branch: docs/website-profile-blueprint. Keep unrelated drafts and untracked artifacts out of commits. Delivery: bounded behavior commits and a fresh preview before production; promote only a verified corrected candidate under the user's earlier explicit production request.

## Specs
- S1 — User: "ok mira vamos a hacer un nuevo odd para resolver todos los problemas que tenemos y comenzar on las mejoras de la web en general , colocarle mas imagenes y mejores cosas para que sea aun mejor la web para que sea mejor y tenga mas imagenes y se muestre mejor nuestra"
- S2 — User: "error mio lo que quiero es que se genere el plan y poder comenzar la mejora"
- S3 — Confirmed first delivery: "base corregida + Home más visual + un proyecto bien presentado."
- S4 — User authorization: "me encanta vamos a comenzar a implementar"
- S5 — User direction on the earlier timeout: "COÑO olvida el test ahora"
- S6 — Existing user constraints: "quieren conocimiento , quieres aspiracion, quieren complicidad"; "incluso alguien fuera del medio pueda entender que puedo ofrecer y quier soy". Preserve existing identity/routes/contact and factual content; no fabricated clients, outcomes, or research.

## Tasks
| ID | Specs | Route | Status | Commit / evidence |
|---|---|---|---|---|
| V1 | S3–S5 | inline: evaluate footer year at render time | done | Fresh preview `cf3298e4-5f17-4b26-b3ac-1bddb1351815`: `/` and `/projects/webvinext-site` both return HTTP 200 and © 2026 Ghandy; the previous ©1970 output is absent. The earlier timed-out test was not retried. |
| V2 | S1, S3, S6 | inline: author two original SVG diagrams | done | Both standalone SVGs parse; mobile-scale minimum label sizes are 12.2px and 17.5px at 350px; source flow verified against generator, content loader, route, and Worker. Browser rendering remains V4. |
| V3 | S1, S3, S6 | inline: compose Home and the real WebVinext case | done | Home and WebVinext-only flow figures have accessible alternatives/captions and responsive styles. Focused route tests pass 7/7, including unchanged behavior for another project; browser review remains V4. |
| V4 | S3–S6 | checks: suite, typecheck, build, detector, preview functions and responsive visual inspection | blocked | Suite 42/42, typecheck, build, remote route/year/assets checks pass. Detector exited 2 for unchanged baseline CSS patterns. Native assess is unassessable due untracked files. Cloudflare Browser Run returned 2001 rate limit for the one fresh screenshot request; no screenshot/local Chromium retry. Preview remains live and production traffic is unchanged. |
| V5 | S3–S4 | commit and push the bounded first-delivery implementation | in_progress | Source commit `f891f17` contains 302 changed lines across 11 owned paths; push pending. The hook reports 1,234 authored lines in 8 branch commits from `origin/main`; this is the current delivery boundary, separate from earlier people-first commit `818c10a`. No further source commit is planned; record boundary before the ledger follow-up. |
| V6 | S3–S4 | conditionally promote the fresh preview to production | blocked | Waiting for the user's decision: accept HTTP functional proof without responsive screenshots, or hold production until visual proof is available. Do not promote before this is resolved. |

## Design intent
- Retain current dark cyan/violet identity and typography; add editorial visual storytelling, not a new logo or generic stock photography.
- Home: a connected-perspectives illustration supporting the existing plain-language entry, plus a visual preview of the real personal-site case.
- Case: reuse the authored site/content architecture visual with an honest caption and existing source link; keep all actual project text and metadata intact.
- Accessible images have intrinsic dimensions, descriptive alternatives and captions; below-fold imagery is lazy-loaded; layouts remain usable without images. SVG assets introduce no third-party requests or animation.
- Private preview screenshots/logs remain private. Existing generated PNGs/legacy logos are not used without checking provenance and purpose.

## Log
### L1 — Current implementation authorization, verbatim
me encanta vamos a comenzar a implementar

### L2 — Prior request and scope acceptance
The user requested a plan to resolve pending issues and improve the site with meaningful images. The first delivery proposed and accepted was "base corregida + Home más visual + un proyecto bien presentado." Remaining whole-site rollout (Projects catalogue, About, Blog) belongs to later deliveries, not this slice.

### L3 — Baseline and carry-over
Current branch is docs/website-profile-blueprint at 3a745f5, with owned uncommitted people-first ledger notes and an untracked site-footer.test.tsx. Preserve unrelated .codegraph/.impeccable and profile-blueprint drafts. Existing preview showed ©1970; user manually reviewed its visual design. Production has not changed. The earlier test timeout was real, but its .tsx file is excluded by the configured tests/**/*.test.ts pattern; S5 means no retry of that test command. Never relabel the timeout as RED.

### L4 — Visual truth and asset decision
This is an extension of the code-defined dark cyan/violet visual world, not a new identity exercise. The two generated PNGs in `img/` are logos, including a misspelled “Ghandyit” variant; do not use them as project imagery. Author two original SVG diagrams: a connected four-perspective map for Home and an accurate WebVinext content/runtime flow for the one case. Give each a descriptive alternative and visible caption identifying it as an explanatory diagram, not a screenshot or client evidence. Use only existing copy and architecture facts; no external images, client claims, results, or new brand mark.

### L5 — Footer correction
Moved copyright-year evaluation out of module initialization and into a lazy `SITE_CONFIG.footer.copyright` getter, consumed by `SiteFooter` during render. Structural diff confirms the module-scope string is gone. Per S5, the prior timed-out test was not retried.

### L6 — Diagram review
The first worker draft created both requested SVGs. Parent review found that their 1180px and 1380px viewBoxes scale 14–22px labels down to roughly 4–6px on a 350px mobile viewport, so V2 remained open pending revision. The project-local Impeccable skill file is absent; the worker read installed skill/craft-floor copies.

### L7 — Verification status reconciliation
The footer lazy-getter source change is implemented and structurally reviewed, but no rendered-year proof exists. V1 is pending until V4's fresh-preview function check; the user's S5 instruction still forbids retrying the old timed-out test.

### L8 — Diagram validation
Revised both diagrams for mobile legibility. Parent parsed both SVGs as XML, confirmed intrinsic dimensions and no scripts/animation, and checked minimum label scaling at 350px (12.2px Home, 17.5px project). Verified the WebVinext flow against the actual generator, content loader, project route, and Worker source. Rendered-browser proof remains V4.

### L9 — Focused RED
`pnpm exec vp test --run tests/home-experience.test.ts` completed in 4.45s: 5 existing checks passed and the 2 new Home/WebVinext diagram assertions failed because the image markup was not implemented yet. The static SSR markup emitted `© 2026 Ghandy`; this supports local render-time behavior but does not replace fresh Cloudflare preview verification. The prior `.tsx` footer test was not run.

### L10 — Focused GREEN
After composing the Home perspective figure and WebVinext flow on Home plus the WebVinext-only detail route, with responsive styles and captions, `pnpm exec vp test --run tests/home-experience.test.ts` passed all 7 tests in 1.47s. The suite checks the separate-project route remains without the WebVinext diagram. Full checks and rendered preview remain V4.

### L11 — Full-suite wrapper failure
`pnpm run test` exited 1 before invoking `vp test`: its package script calls `npm run content:generate`, which npm refuses because this repository is configured for pnpm. No tests ran in that invocation. V4 remains open; execute the package's content generator via pnpm and the direct Vite+ runner once, without changing package configuration.

### L12 — Verification results
`pnpm run content:generate && pnpm exec vp test --run` passed 42/42 tests; `pnpm exec vp exec tsc --noEmit` passed; `pnpm exec vp build` exited 0 with an `INEFFECTIVE_DYNAMIC_IMPORT` warning in Vinext's navigation shim. The one Impeccable detector run exited 2 for gradient-text and decorative-grid patterns at unchanged CSS lines; `git diff --unified=0` confirms only new diagram styles were added to `app/globals.css`. Fresh-preview functional evidence remains pending.

### L13 — Native assessment
`gentle_review` assess returned risk medium but `nativeRisk: unassessable`, with zero changed paths because existing untracked workspace files require explicit declaration. It offered no `reviewDue` or native continuation, so no inspect/capture was started. Its plan retained writer self-verification, structural readback, and no independent verifier.

### L14 — Preview version uploaded
`pnpm exec wrangler versions upload --config dist/server/wrangler.json --message "Visual-first website first delivery"` completed successfully. Version `cf3298e4-5f17-4b26-b3ac-1bddb1351815` is available at `https://cf3298e4-app-router-cloudflare.matinvd4.workers.dev`; Wrangler states production traffic was not shifted.

### L15 — Fresh-preview HTTP verification
A single scripted HTTP check confirmed `/` and `/projects/webvinext-site` return 200, both render `© 2026 Ghandy`, and neither returns the stale 1970 year. `/images/home-perspectives.svg` and `/images/webvinext-flow.svg` both return 200 with `image/svg+xml`.

### L16 — Responsive visual proof unavailable
The one fresh Cloudflare Browser Run snapshot request for the new preview returned `2001: Rate limit exceeded`; no screenshot or visual inspection was obtained. This was a remote service request, not local Chromium. Do not retry the screenshot request or repair/launch local Chromium.

### L17 — Separate commit/push from production decision
Keep the explicitly authorized bounded commit and push moving. Split production promotion into a separate task because the requested desktop/mobile visual proof is unavailable. Before promotion, ask whether the user accepts the passing HTTP/SSR route, year, and asset checks as sufficient or wants production held until visual proof is available.

### L18 — Work-unit boundary
Commit `f891f17` (`feat(site): add visual first-delivery improvements`) contains 302 changed lines across 11 delivery-owned paths. Its hook reports 1,234 authored changed lines across 8 commits on the feature branch since `origin/main`; the earlier people-first UI commit `818c10a` is a separate slice. This feature's source work-unit is complete; no further source commit is planned. The next commit is only the ODD tracking record.
