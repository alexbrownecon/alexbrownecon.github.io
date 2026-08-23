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

## 2026-08-22 — Fresh-chat audit + AMA award (audit chat)

- Audit of the three About/Teaching texts done in the fresh Cowork chat as
  planned; fixes ran three rounds. Key correction: the round-2 draft claimed
  bounded-rationality MODELS fail at contingent thinking; Alex confirmed the
  opposite meaning (people fail at contingent reasoning). Logged in
  identity.md — though Alex later cut the loss-aversion/contingent-thinking
  material from the About text entirely (candidate for Research Themes
  instead).
- NEW (Alex): "Beyond Income: Dynamic Consumer Financial Vulnerability"
  (J. Marketing 2023) named Distinguished Winner, AMA-EBSCO-RRBM Award for
  Responsible Research in Marketing, 2026 (verified at ama.org). Featured:
  award line on its paper card (new `.paper-award` style); one About sentence
  queued for when the text is placed; added to `cv/cv_brown.tex` as a new
  Honors and Awards section and the PDF recompiled (prior PDF kept as
  `cv_brown_before_ama_award.pdf`).
- Collaborations line: "transportation and electrical grids" (Alex's choice)
  replaces "traffic and chemical engineering"; CFPB stays, now with "(CFPB)"
  after the spelled-out name.
- About text still NOT placed in index.html — STOP RULE: awaiting Alex's
  approval of the final wording.

## 2026-08-22 — Phase 1 CLOSED (logged retroactively)

- Final About/Teaching text placed in index.html and AMA award featured in
  commits e944d93 + 08a6c94 (prior Cowork chat); CV gained Honors and Awards
  section, PDF synced to assets/. The About and Teaching text is FINAL,
  approved word-by-word: carry verbatim forever, never rewrite or regenerate.

## 2026-08-22 — Phase 2 executed (Alex approved)

- Open decision #5 resolved: SEPARATE PAGES. index.html (home + about +
  contact section), research.html, teaching.html, students.html — plus
  cv.html, added mid-phase when Alex flagged that a bare nav→PDF link loses
  the site header (reverses the initial direct-link choice). Shared
  assets/css/site.css and assets/js/filters.js; favicon.svg placeholder
  (restyle in Phase 3); sitemap.xml with 5 canonical URLs.
- All ten Phase 2 requirements met: semantic landmarks, one h1/page,
  keyboard-operable filters with focus-visible, AA contrast fixes (grays
  #888/#999 darkened; gold-as-text → #b45309), 320px reflow with wrapped nav
  (no hamburger needed), prefers-reduced-motion, per-page title/description/
  canonical/OG, JSON-LD Person on index, visible Scholar/ORCID/RePEc-IDEAS
  links (IDEAS verified: ideas.repec.org/f/pbr451.html), sitemap, and all
  people.tamu.edu paper URLs untouched. W3C validator: 0 messages every page
  (one info note on cv.html). Frozen About/Teaching text carried verbatim,
  proven byte-identical by diff.
- Photos: Alex WAIVED the ask-first rule and authorized self-hosting the
  remaining student photos ("waive I authorize"). All 9 downloaded and
  optimized (≤600px) into assets/images/students/; no hotlinks remain.
  Notes: Liu = right-square crop of his conference photo (only public image
  he offers); Wang source is only 178px (soft); Je = full-body campus shot
  from his own site.
- Research categories (Alex, several rounds): card/filter order = Decisions,
  Game Theory, Policy, Methods. Renames: "Behavioral Decision Making and
  Theory" (rejected "Behavioral Decision Theory" as reading non-quantitative;
  chip stays "Decisions"); "Equilibrium Feasibility, Selection, and Mechanism
  Design" (filter uses the full title; chip stays "Game Theory"); "Policy
  Applications". Theme paragraphs rewritten by Alex with Humanizer-checked
  edits (question-openers, em dash, from-X-to-Y removed); four distinct
  paragraph openers (These papers / My work / Several projects / Studies in
  this area). Hero pills now: Behavioral Economics, Experimental Economics,
  Game Theory, Consumer Behavior, Decision Theory. "and" spelled out in all
  labels; "&" only in "Texas A&M". cv.html: single Download link above the
  embedded viewer (viewer hidden ≤700px).

## 2026-08-22 — Working preference (Alex)

- Delegate mechanical/boilerplate build work to subagents on cheaper models
  to conserve usage; drop down only as far as OPUS. (Set after this
  session's cv.html subagent ran on Sonnet; future delegation observes the
  Opus floor.)

## 2026-08-23 — Phase 3 setup + Pass 1 (typography) — Alex approved

- frontend-design skill installed (repo-archive fallback, ~/.claude/skills/).
  CLAUDE.md created in site-2026 with the strategy's design rules + carried
  non-negotiables. References confirmed: kirbyknielsen.com (Kirby Nielsen,
  Caltech, experimental econ — restraint/structure) and anaikowl.com
  (Akshata Naik, Owlstown award winner — warmth/whitespace). Blend, never clone.
- Heading font: SPECTRAL (Alex picked from Fraunces/Spectral/Source Serif 4
  specimens). 18px root size; serif h1-h3 + nav wordmark; sans body kept.
- Site identity flipped to "Alexander L. Brown" (hero, wordmark, footer,
  titles, metadata; JSON-LD alternateName "Alex Brown"). "Publishes as" line
  removed. Alex decided (Aug 23) the site will NOT carry an "I go by Alex"
  line anywhere — the alternateName metadata is the only informal-name
  reference; do not resurrect. Nav wraps ≤880px so the wordmark never splits.
- Next up when work resumes: Phase 3, Pass 2 (see strategy).
- About restructure (Alex liked): para 1 alone in the About column; para 2
  moved verbatim to full width below the grid. AMENDMENT by Alex: the award
  sentence in para 2 SHORTENED to "Along those lines, a recent paper of mine
  on consumer financial vulnerability won an award for responsible research
  from the American Marketing Association." — this amended text is the new
  frozen baseline. Full award citation stays on the Beyond Income paper card.
- Fixes: Management Science CARD Act → "forthcoming" (site + cv_brown.tex
  recompiled and synced to assets/); paper chips "Game Theory"→"Games";
  cv.html single Download link; CV embed switched to iframe + matchMedia
  reload script (Safari destroys hidden PDF viewers — Alex verified fix).
- Colors: no new decisions — palette per CLAUDE.md, first visible in Pass 2.

## 2026-08-23 — Phase 3, Pass 2 (hero) — Alex approved

- Gradient hero replaced: flat deep navy band (#1e3a5f, subtle same-hue
  lightening at top), thin gold rule at the band's base (the one accent,
  echoing the nav's active-link underline). Name in Spectral aligned to the
  940px content edge; subtitle one line (comma, not bullet); interest pills
  collapsed to one quiet middot-separated text line. Headshot moved to the
  RIGHT in a hairline-ring circle — Alex explicitly approved photo-right and
  the gold rule.
- Sub-pages get the same compact navy band + gold rule; inline h1
  font-size styles removed (stylesheet rules them now).
- Phase 0 image flag resolved: hero + og:image now use newhead4-1200.jpg
  (216 KB, 960x1200, sips-downscaled from the 11.7 MB original, which stays
  untouched). Alt text fixed to "Alexander L. Brown".
- Frozen About/Teaching text proven byte-identical; W3C 0 messages (cv.html
  pre-existing info note only); desktop/mini/mobile screenshots verified.
- Next: Pass 3 (layout — stats band judgment call, editorial publication
  list on the home page; cards stay on Research).

## 2026-08-23 — Phase 3, Pass 3 (layout) — Alex approved

- Stats question resolved: the 30+/$3.4M/9+ NUMBERS STAY (they serve search
  committees and prospective students) but the card chrome is gone —
  understated band on off-white: Spectral navy numerals, small-caps labels,
  hairline dividers (vertical on desktop, horizontal stacked on mobile).
- Selected Publications AND Selected Grants → editorial hairline lists
  (.pub-list): title left, venue/funder right in italic; grants keep amber
  amount + team + links lines. feat-card/featured-grid/highlight-* CSS
  removed (index.html was the only user).
- Research Themes de-carded: two-column .theme-grid, 3px colored top rule +
  colored heading per theme, no boxes/hover. Paper cards on research.html
  untouched per strategy ("cards stay on Research").
- Sticky nav background made solid #fff (was rgba .97 — scrolled text
  ghosted through behind the wrapped nav rows on mobile).
- Checks: frozen About text untouched (diff), W3C 0 messages, 375px no
  overflow, mobile stacking verified by screenshot.
- Next: Pass 4 (motion, lowest priority), then Pass 5 (dedicated mobile
  design pass).

## 2026-08-23 — Phase 3, Pass 4 (motion) + stats-band rework — Alex approved

- Motion, subtle only: paper cards fade in (0.25s, 4px rise, pure CSS
  keyframe — filters.js untouched) when research filters reveal them;
  blanket `transition: all` replaced with targeted color/border/shadow
  transitions site-wide; smooth scrolling for in-page anchors. No scroll
  reveals. prefers-reduced-motion block still kills everything.
- Sticky nav background made fully opaque (see Pass 3 entry).
- Stats band REWORKED after Alex flagged the stacked layout ("30+ on an
  island", label on a new line in a different color): each stat is now ONE
  phrase on one line, all Spectral navy — number 1.5rem, label 1rem, shared
  baseline via flex; "+" set as a raised superior figure (0.62em) because
  Spectral's serif plus sits low next to lining figures. First attempt
  wrapped "Grant Funding" at desktop widths — type scale tightened until all
  three phrases measure one line in a 287px column. Alex: "very different
  now but connected" — approved.
- Lesson recorded: browser-pane screenshots return blank while the pane is
  hidden; stat-band fix was verified by measuring rendered geometry
  (getClientRects) instead.
- Next: Pass 5 (dedicated mobile design pass) closes Phase 3.
