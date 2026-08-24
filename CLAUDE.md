# site-2026 design rules (Phase 3+)

Read DECISIONS.md at the start of every session before doing anything (safety rail #7).

## Brand

- Deep navy `#1e3a5f` is the primary color.
- Gold `#f59e0b` is an accent ONLY — never body text, never thin essential
  indicators (it fails contrast on light backgrounds). Amber `#b45309` is the
  text-safe warm tone already in use.
- Off-white `#f8f9fc` for alternate sections.
- Research-category colors REMOVED (2026-08-24 Phase 5 add-on, Alex-approved;
  supersedes the 2026-08-23 color plan A): the research page is monochrome —
  tag chips share one muted-gray treatment, filter buttons fill navy when
  active. The four category hexes (#0e7490, #b45309, #047857, #be185d) must
  not reappear anywhere. Award lines and grant amounts are navy. Home-page
  theme rules are uniform navy.

## Typography

- Distinctive serif for headings (Alex picks from 3 Google Fonts candidates);
  clean sans for body. Never Inter as first choice. ~18px body, real type
  scale, tightened heading spacing.

## Banned

- Multi-color gradient heroes, emoji icons, pill tag clouds, purple,
  card grids where a list reads better.

## Feel

- Editorial, restrained, academic authority — university press, not SaaS.
- The frontend-design skill's push toward "memorable/unexpected" is capped by
  these rules and by the audience list in web/website-update-strategy.md
  (search committees, editors/referees/researchers, graduate students).
- Never violate the Phase 2 accessibility requirements for a visual effect:
  WCAG 2.1 AA contrast, keyboard operability with visible focus, 320px
  reflow, prefers-reduced-motion, semantic HTML with one h1 per page.

## Non-negotiables (carry from earlier phases)

- The About text (index.html) and Teaching text (teaching.html) are FINAL,
  approved word by word. Never rewrite, rephrase, or regenerate them; if
  markup around them changes, carry the text verbatim and prove it with a
  diff against the committed version.
- Rule #1: `web/index.html` and `web/mockup.html` (outside this folder) are
  archives — never modified, never deleted.
- STOP RULE: stop for Alex's explicit go-ahead at the end of every pass and
  at every decision point. Commit after each approved pass.
- Working-paper PDFs stay at their people.tamu.edu URLs. Never move them.
- All asset paths relative and inside site-2026/. Test via
  `python3 -m http.server` in this folder, not file://.
- Delegate mechanical build work to subagents on cheaper models — but drop
  down only as far as Opus.

## Environment notes (verified Aug 2026 — save yourself the rediscovery)

- **Preview server:** `python3 -m http.server` in this folder (rail 6; never
  file://). Port 8213 was used previously — a stale server may still be
  running; reuse it or pick another port.
- **Cowork browser pane:** screenshots return blank or time out whenever the
  pane is hidden in the user's UI (the page stops compositing). Front the tab
  or resize the viewport to wake it; when it stays hidden, verify layout via
  javascript_tool computed styles/scrollWidth instead of screenshots. To
  paint a whole page in one screenshot, set a very tall viewport. Editing an
  HTML file auto-opens pinned file:// preview tabs that cannot navigate —
  keep one dedicated localhost tab for testing. Widths <768 emulate mobile
  (touch, mobile UA).
- **Stale CSS:** after editing site.css, a plain reload may serve the cached
  file — cache-bust (`site.css?v=N`) or confirm via computed styles before
  concluding a fix failed.
- **Safari PDF embeds:** Safari destroys a CSS-hidden PDF viewer and never
  restores it on unhide. cv.html therefore uses an <iframe> plus a matchMedia
  script that reloads the frame when the viewport crosses back above 700px.
  Do not regress to <object> or bare display:none. Alex tests in Safari —
  Chrome-only verification is not enough.
- **Toolchain gaps:** pdflatex works (CV recompiles: run twice, then copy
  cv_brown.pdf to assets/). poppler is NOT installed — no pdftotext or PDF
  page rendering; verify PDF text via python zlib stream extraction, or ask
  Alex to eyeball. `sips` handles image resizing (no ImageMagick) — beware:
  `sips -Z` happily UPSCALES small images; check source dimensions first.
- **Frozen-text guard:** before touching index.html or teaching.html, snapshot
  the About/Teaching paragraphs from git HEAD and diff after editing (the
  amended award sentence in DECISIONS.md 2026-08-23 is the current baseline).
- **W3C validation:** `curl --data-binary @page.html
  "https://validator.w3.org/nu/?out=json"` works fine from this machine.
- **Git identity: DONE 2026-08-23** — global identity set to Alex Brown
  <abrown.tx@gmail.com> and all of main re-authored (dates preserved,
  tree hashes identical). Do NOT re-run the rebase. Branch `redesign`
  still carries the old machine identity and no longer shares history
  with main — fine as a local reference; re-author it only if it would
  ever be pushed. No git remote is configured yet (added at deploy).
