# site-2026 design rules (Phase 3+)

Read DECISIONS.md at the start of every session before doing anything (safety rail #7).

## Brand

- Deep navy `#1e3a5f` is the primary color.
- Gold `#f59e0b` is an accent ONLY — never body text, never thin essential
  indicators (it fails contrast on light backgrounds). Amber `#b45309` is the
  text-safe warm tone already in use.
- Off-white `#f8f9fc` for alternate sections.
- Keep the four existing research-theme colors: `#1d4ed8` (game theory),
  `#b45309` (decisions), `#047857` (policy), `#be185d` (methods).

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
