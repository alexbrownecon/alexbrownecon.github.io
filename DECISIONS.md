# DECISIONS.md — site-2026 decision log

Read this file at the start of every session before doing anything (safety rail #7).
Append a short dated entry after every approved phase or pass: what changed, what
Alex approved or rejected, and why.

---

## 2026-08-21 — Phase 0 executed (v1 structure)

- Created `site-2026/`: `mockup.html` copied in as `index.html`, images and
  `cv_brown.pdf` copied in. Originals (`web/index.html`, `web/mockup.html`)
  untouched per Rule #1.
- Git initialized; baseline commit `ba3c4ce`.
- Verified self-containment: no `../` paths in index.html; only local asset
  reference is the headshot (`newhead4.jpg`).
- Noted for Phase 3: `newhead4.jpg` is 11.7 MB — needs optimization before launch.

## 2026-08-22 — Hosting FINAL (Alex, recorded per instruction)

- **Host: GitHub Pages. Custom domain: alexbrownecon.com** (verified available
  Aug 21; NOT yet purchased). Canonical URL: `https://alexbrownecon.com`.
  Register at an at-cost registrar (e.g., Cloudflare Registrar); enforce HTTPS;
  follow GitHub's custom-domain checklist exactly. Exit hedge: site always also
  exists at the free `*.github.io` address.
- **REMINDER: Alex must buy the domain BEFORE Phase 2 starts** — that's when
  canonical URLs get baked into every page.
- **Paper PDFs STAY at their existing `people.tamu.edu/~alexbrown/` URLs.**
  The new site links to them there. Never move, copy, or re-host them — their
  URLs preserve Google Scholar indexing and years of inbound links. The eventual
  TAMU redirect (Phase 4, Alex-approved only) applies to the homepage ONLY.
- Alex handles all TAMU uploads manually (as with the original site).
- Alex is confident in these choices stylistically but not the tech: if anything
  is illogical or breaks something, push back in plain language before proceeding.

## 2026-08-22 — Phase 0 conformance to strategy v2

- Strategy updated in Cowork (transcript-informed v2): images moved from
  `images/` to `assets/images/` per revised Phase 0 structure; the one reference
  in index.html updated. DECISIONS.md created (new safety rail #7).

## 2026-08-22 — Phase 1a: publications verified & applied (Alex approved)

- Verified all 31 journal pubs against Crossref/publisher, ORCID, and Scholar.
- Status changes: CARD Act → Management Science, Articles in Advance, 2026
  (DOI 10.1287/mnsc.2024.06339, online Aug 10 2026 — vol/issue TBD, recheck at
  each maintenance pass); TRR Nudges → 2680(4): 377-396, April 2026.
- Six title corrections to match publisher records (NHB, MS 2013, AEJ Micro,
  JEL "Loss Aversion", QJE "Saving", ExpEcon Plott-Zeiler subtitle).
- Working papers: full CV list added (AI Incentives, Biometric, Benign,
  Lies-Labels, Extreme-Price, Disequilibrium Dynamics); Peer Evaluations
  authors fixed (Brown, Van Essen, Wooders). BDM elicitation paper retitled to
  current "Testing Strategy-Proofness and Simplicity Refinements in Elicitation
  Mechanisms" (Alex: same paper, many titles). ALERT paper confirmed real
  (live site "Research in Progress"; Brown, Hegarty, Liu) — kept, relabeled.
- Other Publications section added (NICR report, Handbook chapter, Palgrave).
- All links populated: journal → DOI; paper PDFs → existing people.tamu.edu
  URLs (never moved, per hosting decision). Author display: full lists (no et al.).
- CV (cv/cv_brown.tex) updated with the same A-item status changes + retitle,
  recompiled, new PDF in assets/. Alex explicitly authorized editing the CV.
- Alex confirmed the "Participatory Communication/churches" Scholar entry is
  not his — he will remove it from his Scholar profile himself.
- Live-site extras NOT yet in the new site (awaiting Alex): "Empirical Bias of
  Extreme-Price Auctions: Analysis" (arXiv 1905.08234), "Empirical
  Strategy-Proofness" (ESP-June142022.pdf), and the Research in Progress
  section (Beckett social learning; vaccination ambiguity; debt snowball).

## Standing resolutions (from strategy)

- CV style: `cv/cv_brown.tex` (Option 4 header + Blevins body), embedded as
  `assets/cv_brown.pdf`.
- Still open: heading font (Phase 3); reference sites (Phase 3); publications
  approval table (Phase 1 gate); separate pages vs. one long page (Phase 2);
  whether the stats band stays (Phase 3, Pass 3).

## 2026-08-22 — Post-1a corrections (Alex)

- ALERT paper: Jinliang Liu removed from the author list — Alex confirms he is
  not a contributor to that project. (He remains a coauthor on "Testing
  Strategy-Proofness and Simplicity Refinements in Elicitation Mechanisms.")
- Photo permissions obtained (Alex, by email): J. Forrest Williams and Jose
  Castillo Garcia approved headshot use. Jose: good 1024x1024 photo found on
  WAPLAC team page, pending Alex's pick. Forrest: no usable public photo
  exists (PSU profile has none; old Google site is login-walled) — Alex to
  request a photo file from him directly.
- Photos installed (Alex-approved): Jose Castillo Garcia (WAPLAC 1024px,
  optimized to 600px) and J. Forrest Williams (photo URL supplied by Alex from
  PSU econ page, 300px) — self-hosted in assets/images/students/. Forrest's
  title updated to Associate Professor and Chair (per his PSU page).
- Alex removed the mis-attributed "churches" paper from his Scholar profile.

## 2026-08-22 — Domain PURCHASED

- alexbrownecon.com registered by Alex at Cloudflare Registrar, 3 years
  (expires 2029-08-22), auto-renew ON. Verified in Verisign registry.
- Domain is parked: NO DNS records or nameserver changes until Phase 4
  (GitHub Pages wiring per GitHub's checklist). Canonical URL for Phase 2:
  https://alexbrownecon.com — now unblocked.

## 2026-08-22 — About-text method change (Alex; REJECTED first drafts)

- Alex rejected the first About/teaching drafts as "very AI-ish, highly
  synthetic" (em dashes, three-part lists, inflated phrasing). New standing
  method for ALL site copy:
  1. identity.md interview answers ARE the draft, in Alex's voice. Minimal
     editing only: trim, reorder, fix grammar. Keep his phrasing, rhythm,
     word choices. Connective tissue must imitate his sentences.
  2. Match Alex's supplied writing sample over any house style.
  3. Banned regardless: em dashes (unless his sample uses them), forced
     three-item lists, "not just X, it's Y," adjectives doing
     impressiveness work.
  4. Run results through the Humanizer skill (installed v2.11.2 at
     ~/.claude/skills/humanizer via repo-archive fallback; /plugin is
     terminal-only) and show critique plus both versions.
  5. Alex audits in a separate fresh chat naming exact failing lines;
     expect one fix round.
