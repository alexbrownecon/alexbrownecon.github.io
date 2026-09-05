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

## 2026-08-23 — Phase 3, Pass 5 (mobile) — Alex approved; PHASE 3 CLOSED

- Phone-width (≤700px) design pass, CSS-only: hero photo 120px + tighter
  spacing (About text now starts on the first 812px screen); nav type/gaps
  reduced; student cards became horizontal rows (96px photo left, text
  right) instead of full-width squares; "Current" badge hidden on phones
  (redundant under the Current Students heading); tighter section/stats/
  theme spacing; scroll-margin-top 110px ≤880px so anchors clear the
  wrapped two-row sticky nav.
- Verified by geometry at 375px and 320px: no horizontal overflow;
  student rows 122px tall.
- OPEN ITEM deferred by Alex: research filter buttons keep full category
  titles on mobile for now (~238px bar at 320px). "Revisit the short
  labels later" — candidate for the Phase 4 polish loop.
- All five Phase 3 passes approved and committed. Next: Phase 4 (QA,
  deploy prep, Alex's WCAG audit; git identity fix before first push).

## 2026-08-23 — Phase 3 RE-RUN authorized (Alex: "full, not a reskin")

- Alex identified a process failure: the strategy's four polish-loop
  techniques (8-pillar self-grade, batch-with-intent, ruthless comparison
  vs kirbyknielsen.com + anaikowl.com, Alex's manual flat-section pass)
  were written as prompts for Alex to fire while driving; when execution
  shifted to Claude marching the numbered passes, they lost their trigger
  and never ran. Claude also read the paragraph during this session and
  failed to schedule them. LESSON: convert loop techniques into scheduled,
  owned steps; unnumbered plan items silently read as done.
- Result: the Phase 3 passes restyled the March mockup's structure rather
  than redesigning against the references. Alex judged it "too much like
  the march site" and rejected an incremental Pass 6 in favor of a full
  structural re-run of Phase 3 ON A BRANCH (`redesign`); main keeps the
  approved pass 1-5 site as fallback until Alex picks a winner
  side-by-side.
- Re-run process: (1) ruthless-comparison brief (references studied for
  real this time) + 8-pillar self-grade of the current site; (2) design
  plan with structure on the table, approved BEFORE code; (3) build all
  five pages on the branch with stop-gates; (4) Alex's side-by-side pick,
  then his flat-section scroll on the winner.
- Survives regardless (settled, not design): frozen About/Teaching text
  verbatim, Spectral, navy/gold rules, four research categories + colors
  as wayfinding, all content decisions, people.tamu.edu URLs, Phase 2
  accessibility requirements.

## 2026-08-23 — Redesign forks, build, and side-by-side VERDICT

- Forks resolved by Alex (logged in full on branch `redesign`): LIGHT
  ground; placeholders hidden; signature = option c (typographic), with
  agreed fallback to option a at full scope (~37 finding lines in Alex's
  voice) if c doesn't land. Only two photos ever needed: Alex teaching,
  and a campus/building shot.
- Redesign built on branch `redesign` (bd1fcbe): comparison brief
  (references MEASURED — kirbyknielsen.com is dark charcoal, serif body,
  type-as-structure, haiku signature; earlier secondhand summaries were
  wrong), design plan, full five-page "title page" build. Frozen text
  byte-verified, W3C clean, 320/375px verified.
- VERDICT (Alex, comparing :8213 redesign vs :8215 main): "I most like
  the big M under about... otherwise the old version is better." The
  pass 1-5 design STAYS. Drop cap ported to main (.dropcap on the About
  first paragraph, 2.6em mobile). Branch `redesign` kept for reference —
  do not delete without Alex. Signature question now OPEN: does the drop
  cap alone suffice, or invoke the option-a fallback on the old design?
- Teaching page (Alex, same session): frozen paragraphs MOVED verbatim
  (verified, single copy) from below the course list to the top; photo
  placeholder now sits between text and courses.
- Building photo installed (Alex requested): ECON.jpeg from
  artsci.tamu.edu/economics — West Campus Social Sciences Building
  (matches the 2935 Research Parkway address), 881x496, recompressed to
  assets/images/wcssb.jpg (120 KB), filling BOTH campus/office slots on
  index (sidebar + contact). Remaining photo need: Alex teaching.
## 2026-08-23 — Alex's review batch (9 items, his wording where given)

- Stats band, publications: journals spelled out — Quarterly Journal of
  Economics, Journal of Economic Literature, Journal of Economic Theory
  (added), AEJ: Microeconomics (per Alex, not plain "AEJ"), Nature Human
  Behaviour, Management Science, Journal of Marketing (added), Strategic
  Management Journal (added).
- Stats band, students: CFPB placement claim REMOVED — Alex: "I never
  placed a student at the CFPB" (corrects the Phase 2-era copy). Current-
  students clause replaced with Alex's exact wording: "current students
  working on topics from decision theory, non-choice processes and game
  theory".
- Research theme colors: Alex says the four colors were always arbitrary
  and colored HEADINGS aren't differentiable. Theme h3s now ink navy;
  colored top rules kept (tie to research-page filter colors). Full color
  removal offered as follow-up.
- Research in Progress: now its own section on research.html (was inside
  Working Papers); ALERT (Brown and Hegarty) moved there; "request copy"
  mailto and redundant venue line removed per Alex.
- TEACHING TEXT AMENDED BY ALEX (new frozen baseline): parenthetical
  "(Prospective students should know...)" cut; "my first paper, Brown and
  Kagel (2009), and set" → "my first paper and set" with "paper" linked
  to doi.org/10.1007/s10436-007-0092-0 (Annals of Finance 2009).
- Econ 459 description: "evolutionary refinements" removed (Alex).
- Duplicate photos resolved: the two photos at the top of index REMOVED
  (About-column teaching photo, sidebar building photo). Building photo
  now only in Contact; teaching photo only on teaching.html.
- Drop caps: Alex asked about "My work requires" (index para 2) and the
  teaching page. Decision: one drop cap per page opening — teaching.html
  first para gets the big I; "My work requires" does NOT (mid-page,
  second cap would dilute the device). Alex to veto if he disagrees.

## 2026-08-23 — Review batch 2 (Alex)

- Hero name: mixed-weight "Alexander"(600)/rest(300) treatment REMOVED
  ("extra bold for Alexander is weird") — whole name now Spectral 500;
  span markup dropped.
- Stats band, students (supersedes batch 1 wording): "current students
  focus on topics in decision theory and analysis of behavioral economic
  concepts using biometric data" (Alex's exact words).
- AWARD SENTENCE AMENDED BY ALEX (new frozen About baseline): "Along
  those lines, a recent paper of mine on consumer financial vulnerability
  won an award for responsible research from the American Marketing
  Association." → "A recent paper on consumer financial vulnerability
  received a responsible research award from the American Marketing
  Association."

## 2026-08-23 — Students page: badges + full status verification (3 agents)

- "Current" badge → red "On Market" badge (Alex): on BOTH Zhang and
  Hegarty (Alex confirmed Colin is on market). Badge now shows on mobile
  too (it carries recruiter-relevant info; the old hide rule was for the
  redundant "Current"). Class renamed .market-badge.
- Colin photo: no better one exists publicly — TAMU's own profile uses
  the same t-shirt shot; no personal site found. Ask Colin for a market
  headshot this fall.
- All 9 former students verified via 3 parallel web-research agents
  (2026-08-23). CORRECTED: Vitaku → Assistant Professor, American
  University of Sharjah (own site/CV; AUS directory not yet updated —
  "incoming" Fall 2026); Stephenson → Associate Professor, Virginia
  Commonwealth University (was wrongly "Professor, Texas A&M" — he never
  left VCU; stale Chapman CV + RateMyProfessors artifacts explain the
  confusion); Viriyavipart → Associate Professor, Chulalongkorn
  University (left AUS 2024; Chula directory + PIER + own site);
  Castillo Garcia → "Associate Professor, ESPOL (Ecuador); formerly Vice
  Minister of Economy and Finance" — ESPOL's official HR CV shows Vice
  Minister ended 2022-07-05 and the IADB board post ended 2025-07-07, so
  the earlier "Ex-" was right after all (Alex's same-day de-"Ex-" edit
  reverted on evidence); Je confirmed Assistant Professor, University of
  Seoul. CONFIRMED UNCHANGED: Liu (Shandong), Kovaliukaite (Vienna
  postdoc — medium confidence, two official UniVie person records now
  404; recheck at next maintenance pass), Williams (Assoc Prof + Chair,
  PSU). Wang: rank CONFIRMED Assistant Professor — the UESTC faculty page
  loaded for Alex locally and still lists it (2026-08-23). The page is
  blank from US browsers (anti-bot/geo), so Wang's name link stays on his
  reliable personal WordPress site rather than the UESTC page.
- Link fixes: Jose's dead LinkedIn pub-URL → his Google Scholar profile;
  Williams → the PSU dept page that carries the Chair title.
- Also: Methods tag added to the Plott and Zeiler generalization paper
  (Alex).

## 2026-08-23 — Research tag system overhaul (Alex)

- Chip renames: Decisions → "Decision Making" (Alex's catch-all for
  decision theory + behavioral biases in individual choice; his interim
  pick "Behavioral" was superseded same-session as not fitting the
  uncertainty-resolution papers), Games → "Equilibrium", Policy →
  "Policy Applications", Methods → "Methodology" (strict sense fits: the
  category's papers STUDY methods; also matches his frozen About/Teaching
  wording "experimental methodology").
- Full category title "Experimental Methods" → "Experimental
  Methodology" everywhere: research filter button, index theme heading,
  research meta description.
- Retags: loss-aversion meta-analysis + Methodology; the three
  policy-tagged traffic/travel papers (Express Lanes nudges, COVID
  transit, Managed Lane users) + Decision Making. Plott-Zeiler
  generalization + Methodology (earlier same session). Final chip counts:
  Decision Making 20, Equilibrium 23, Methodology 11, Policy
  Applications 7.

## 2026-08-23 — Color plan A applied + About para 2 amended (Alex)

- Color plan A (from the color report card, Alex: "Do your A plan"):
  category colors now live ONLY on the research page. Home theme rules
  uniform navy; Equilibrium recolored #1d4ed8 → #0e7490 teal (link-blue
  collision); award lines + grant amounts amber → navy; course numbers +
  filter hover off link blue → navy. CLAUDE.md brand rules updated.
- FROZEN ABOUT PARA 2 AMENDED BY ALEX (new baseline), two sentences:
  opening → "I use most of the tools of economics, whether theory,
  econometrics, or experimental design, plus a knowledge of the
  literature on psychology and human behavior." (Alex's words; grammar
  patch: added "or" + commas). Award sentence → Option 1: "My coauthors
  and I received an award for responsible research from the American
  Marketing Association for our work on consumer financial
  vulnerability." (Trophy photo IMG_0850 confirms "presented to
  Alexander L. Brown".)
- Award photo (IMG_0850.HEIC, trophy shot): Alex decided NOT on the site
  (he only wanted the engraving read back). Stays in "bad photos?".
- Distinguished Winner question resolved: AMA's list names the ARTICLE
  the Distinguished Winner (paper card mirrors that); trophies are
  presented to each author (About sentence says "my coauthors and I
  received"). Both phrasings correct; no change.
- FHWA grant title on index: "ML Use" → "Managed Lane Use" (Alex chose
  readability over the official abbreviation).

## 2026-08-23 — Working papers: completeness check, tags, RIP removed

- Cross-check (site vs cv_brown.tex vs old live site vs Google Scholar,
  all fetched 2026-08-23): two working papers were missing from the new
  site and are now ADDED — "Empirical Bias of Extreme-Price Auctions:
  Analysis" (Velez and Brown, arXiv 1905.08234, placed beside its
  Experimental Evidence companion) and "Empirical Strategy-Proofness"
  (Velez and Brown, people.tamu.edu/~alexbrown/papers/ESP-June142022.pdf).
- Old-site comment forensics: the old site VISIBLY lists only 4 Research
  in Progress items; 9 more (incl. "The Paradox of Monotone Structural
  QRE") are commented out in its HTML — QRE is not missing anywhere, it
  is retired. Scholar's odd titles are old names of existing papers.
- Working-paper venue lines ("Working paper"/"Under review") removed —
  Alex: unnecessary.
- Working-paper tags went through two Alex decisions same session: first
  "only the Liu paper, Methodology"; then superseded by a full per-paper
  assignment (his list): AI dc,gt · Peer Evaluations dc,gt · Biometric gt
  · Oil/Coasian gt,policy · Benign dc · Lies-Labels dc,gt ·
  Extreme-Price Experimental gt · Extreme-Price Analysis gt ·
  Disequilibrium gt · ESP gt; Liu paper keeps methods. (This also
  reversed the earlier oil+biometric policy-tag request in part:
  biometric ended gt only.) Journal-section tags verified byte-identical
  through it all.
- RESEARCH IN PROGRESS SECTION REMOVED entirely, including ALERT — Alex:
  "co-authorship is tricky." The a/b/c old-site candidates (Artifactual
  Social Learning; Vaccination Ambiguity; Debt Snowball) were reviewed
  and NOT added. If ALERT returns later, its authorship needs Alex's
  explicit sign-off first.
- Grants line: "ML Use" → "Managed Lane Use" (also in this batch: oil +
  biometric interim tags, superseded above).

## 2026-08-23 — Phase 4 step 1: automated QA sweep (results + fixes)

- Lighthouse unavailable (no node/npm in sandbox, as strategy predicted);
  covered equivalently: W3C, full link check, weight audit, structural
  a11y audit.
- W3C: 0 messages all pages (cv.html keeps its known single info note).
- A11y structure: every page has exactly one h1, all imgs have alt,
  lang/skip-link/nav-aria/canonical/title/description all present.
- FIXED during sweep: (1) double hairline under Selected Publications/
  Grants headings (pub-list border-top removed — Alex spotted it);
  (2) all four sub-pages' og:image still pointed at the 11.7 MB original
  headshot (the -1200 fix had only landed on the redesign branch) — now
  newhead4-1200 everywhere; (3) one http:// SSRN link upgraded to https;
  (4) TTI technical report link was genuinely DEAD — case bug, server
  wants 0-6907-R1.pdf capital R; fixed and verified serving.
- Link check, 123 hrefs: local files all exist; 75 external 200 OK;
  5 alexbrownecon.com canonicals unreachable (domain parked — expected
  until deploy); 2 font-preconnect 404s (normal, bare origins); ~29
  publisher 403s are bot-walls (DOI/SSRN/TTI-class verified fine in a
  real browser; rosap.ntl.bts.gov loads). ONE inconclusive: e-elgar.com
  Handbook page sits behind Cloudflare — Alex should click it once.
- Weight: published site would be 1.44 MB total IF unused Phase 0 images
  are pruned — assets/images still carries ~17 MB of unreferenced legacy
  files (newhead4.jpg 11.7 MB, abrown.png 4 MB, banners, TAM logos,
  newhead 1-3, Thumbs.db). PENDING ALEX: approve pruning before deploy.
- Sitemap: 5 URLs, matches pages.
- Still to do in Phase 4: manual checks (keyboard-only, 200% zoom,
  Safari + phone, every filter, every PDF link), Alex's WCAG audit,
  deploy prep (git identity re-author, exclude "bad photos?", DNS).

## 2026-08-23 — Prune + home-page deep links (Alex)

- PRUNE approved and done: 14 unreferenced Phase 0 legacy images removed
  from assets/images (11.7 MB original headshot, abrown.png, banners,
  TAM logos, newhead 1-3) + Thumbs.db. All remain in git history.
  assets/images now 1.2 MB; whole publishable site ~1.5 MB.
- Home-page theme headings now LINK to the research page with that
  category's filter pre-applied (research.html?filter=dc|gt|policy|
  methods). filters.js refactored: filtering logic into apply(btn),
  click handlers unchanged, plus a URLSearchParams preselect on load.
  filters.js now referenced as ?v=2 (cache-bust; a stale cached script
  ate the first test — the CLAUDE.md stale-CSS lesson applies to JS too).
- Selected Recent Publications titles now link to their entries on the
  research page via anchor ids (pub-card-act, pub-resolution,
  pub-loss-aversion, pub-beyond-income, pub-bargaining); anchored cards
  get scroll-margin under the sticky nav and a navy border via :target.
- Link styling: theme/pub title links inherit color, underline on hover.

## 2026-08-23 — About para 1 amended (Alex); manual QA underway

- FROZEN ABOUT PARA 1 AMENDED BY ALEX (new baseline): now OPENS with his
  question "How do we balance behavioral impulses and cognitive
  limitations with the strong pull from the economic incentives of
  optimization?" (his sentence; grammar patch ","→"and"), and "predicts"
  softened to "aims to predict" (his call). Rest verbatim. Drop cap is
  now the H. Approved via his qa-checklist checkmark ("reads right to
  your ear").
- qa-checklist.md created in-repo (also for semester maintenance).
  Alex's progress: section A (Safari click-through, incl. Elgar link,
  Safari CV-viewer resize, theme/pub deep links) ALL CHECKED; section C
  (200%/400% zoom) CHECKED. Remaining: B (keyboard-only), D (iPhone),
  E (reduced motion, optional). Then WCAG audit, then deploy.

## 2026-08-23 — Teaching photo: INTERIM version installed

- Alex supplied four classroom shots ("bad photos?" folder in site-2026;
  room clutter concerns). Chosen: IMG_9850's angle (Alex rejected the
  9848/9849 angle — door behind him). Alex re-exported a better Live
  Photo frame (IMG_9850_mod.HEIC, mouth closed, eyes to camera —
  independently verified better than the original mid-word frame).
- Processing: cropped to body + smartboard (kills cart/outlet/ceiling
  wires), then the under-tray cables ERASED via Python/Pillow diffusion
  inpainting with wall grain cloned back (several iterations; lessons:
  wire path must be measured not assumed, the wall's drywall-seam shadow
  is a real feature to keep, and the grain-donor strip must not overlap
  a cable). Result: assets/images/teaching.jpg (1400px, 257 KB), on
  index About column + teaching.html.
- STATUS: Alex calls it "ok, maybe a placeholder... better than before."
  INTERIM — he will try for a better shot when teaching starts Tuesday
  2026-08-25 (same angle as 9850 recommended; regular photo beats Live
  Photo frame for sharpness). Rerun = same crop + inpaint recipe.
- Live Photo option documented: export Unmodified Original gives
  .heic + .mov; no ffmpeg on this Mac but Swift/AVFoundation can dump
  frames; best workflow is pick-moment-from-video then set key photo in
  Photos for a full-quality export.
- DEPLOY FLAG: the untracked "bad photos?" folder sits INSIDE site-2026 —
  exclude or relocate it before Phase 4 deploy so personal source photos
  never get published.
- Environment lessons (added to CLAUDE.md): hidden browser pane FREEZES
  CSS transitions — computed styles stick at the transition's start value
  after runtime class changes; and a reused port may be a stale server
  from an old session serving the wrong directory — verify content, not
  just a 200.

## 2026-08-23 — Phase 4 steps 2+3: manual QA closed, WCAG audit done (Alex approved fixes)

- Manual QA (qa-checklist.md) COMPLETE: Alex finished B (keyboard — works
  via Option+Tab; Safari's plain Tab skips links by default, note added to
  the checklist), D (iPhone, all pass), E (reduced motion — "no visible
  difference" is the pass: the CSS kills the only two animations; verified).
- Full WCAG 2.1 AA audit of all 5 pages (computed contrast for all ~38
  color pairs, markup review, rendered geometry at 375/320px, live filter
  test). Result: 2 AA findings, both fixed on Alex's "yes go":
  (1) focus ring #1d4ed8 was 1.72:1 against the navy footer → footer
  focus outline now white (11.5:1). NOTE: no footer links exist today, so
  this was a latent guard, not a live failure.
  (2) SC 4.1.3: filter changes were silent to screen readers → hidden
  role="status" element on research.html + filters.js (?v=3) announces
  "Showing N of 45 papers". Verified live: 1x1px, correct text, no
  layout shift.
- Also: rel="noopener" on the 5 target="_blank" links (index grants,
  teaching catalogs). Advisory items NOT taken (Alex-approved skip):
  default filter-button border contrast, 44px touch targets (32-34px
  passes AA), new-tab hint text.
- site.css now referenced as ?v=2 on all five pages — the stale-CSS trap
  bit again during verification (cached sheet lacked .visually-hidden).
- Contrast margins for future reference: closest passes are the Decision
  Making tag chip (4.51:1) and link blue on white (5.17:1).
- Tag-count note: DECISIONS' old "chip counts" were estimates; Alex
  updated them manually. Live counts: dc 31, gt 24, policy 7, methods 7,
  45 cards total.
- W3C: 0 messages on the three re-validated edited pages.
- NEXT: deploy gate, each on Alex's explicit go-ahead — git identity
  re-author BEFORE first push, "bad photos?" exclusion, GitHub Pages +
  Cloudflare DNS.

## 2026-08-23 — Deploy prep steps 1+2 done (Alex: "do 1 and 2", delegated to Opus)

- Git identity fixed BEFORE first push: global user.name "Alex Brown" /
  user.email abrown.tx@gmail.com; all 30 main commits re-authored via
  rebase -r --root with original author dates PRESERVED (date-passing
  exec variant, an upgrade over the plain recipe in CLAUDE.md). Verified:
  single author across history, commit count unchanged, tree hash
  byte-identical (metadata-only), status clean. Old HEAD 9e9888c → new
  HEAD f5335ed; all hashes changed as expected.
- Branch `redesign` untouched (still bd1fcbe, old identity, now shares
  no history with rewritten main). Local reference only — re-author only
  if it would ever be pushed. CLAUDE.md push-reminder replaced with a
  DONE note so no future session re-runs the rebase.
- "bad photos?" exclusion: .gitignore already existed and already ignored
  the folder, but with an unescaped `?` (glob wildcard — also matched
  "bad photosX"). Tightened to literal `bad photos\?/`; verified the
  folder and its contents are ignored, nothing from it is tracked or in
  history, and the negative control (bad photosX) is NOT ignored.
  Committed as 66c679f (first commit under the new identity).
- No git remote configured yet — created at deploy (step 3).
- REMAINING deploy gate (Alex go-ahead needed): GitHub repo + Pages +
  Cloudflare DNS for alexbrownecon.com per GitHub's checklist.

## 2026-08-24 — DEPLOYED: alexbrownecon.com is LIVE (Phase 4 step 3 complete)

- GitHub: repo alexbrownecon/alexbrownecon.github.io (user site; account
  alexbrownecon), main pushed at c853a7b via new SSH key (~/.ssh/id_ed25519,
  passphrase-less, key added by Alex). Branch `redesign` NOT pushed (local
  reference only). Pages auto-enabled from main root.
- Domain verified on GitHub (account Settings→Pages→Verified domains):
  TXT _github-pages-challenge-alexbrownecon added at Cloudflare, verified
  green. Protects the domain from Pages takeover.
- Cloudflare DNS (all DNS only / gray cloud — proxying deliberately OFF so
  GitHub could issue the cert; ignore Cloudflare's "proxying required"
  nags): 4x A @ → 185.199.108-111.153; CNAME www → alexbrownecon.github.io;
  the challenge TXT. DNS work delegated to an Opus subagent (Alex asked to
  conserve Fable); records verified by screenshot + dig.
- STALL + FIX worth remembering: custom domain was saved (Safari) BEFORE
  DNS records existed → "DNS Check in Progress" hung ~45 min, cert never
  requested. Removing and re-adding the custom domain in repo Pages
  settings forced a fresh check; cert issued within a minute after that.
  (GitHub committed Delete CNAME/Create CNAME through this — pulled.)
- Enforce HTTPS: ON. Cert CN=alexbrownecon.com, expires 2026-11-22
  (auto-renews ~every 3 months).
- Verified live: http→https 301; https on all 5 pages 200; sitemap, css
  (?v=2), cv PDF 200; www→apex 301; github.io→custom domain 301;
  "bad photos?" content 404 (never published, as designed).
- Chrome now has GitHub + Cloudflare sessions; SSH pushes work from this
  Mac (git push origin main).
- STILL OPEN: Alex's quick post-deploy re-run of qa-checklist.md against
  https://alexbrownecon.com; better teaching photo (after class Tue
  2026-08-25); Colin Hegarty headshot; OPTIONAL Alex-approved-only TAMU
  homepage redirect (papers stay at people.tamu.edu forever).

## 2026-08-24 — FROZEN ABOUT TEXT REPLACED BY ALEX (new baseline, both paragraphs)

- Alex personally rewrote both About paragraphs in `index.html` and supplied
  complete replacement wording. The new text was inserted VERBATIM — no
  editing, rephrasing, reformatting, or text-improvement tooling of any kind.
  Byte-for-byte match against Alex's supplied text was verified before commit.
- Markup untouched: paragraph 1 keeps `<p class="dropcap">` at the same
  position in the About column; paragraph 2 keeps the bare `<p>` full-width
  below the landing grid. Neither paragraph contained (or now contains) any
  inline HTML. The drop-cap letter is unchanged — the new paragraph 1 also
  begins with "H" ("How"), so the `dropcap` class renders exactly as before.
- `git diff` touched only those two lines. W3C Nu validator: zero messages.
- THIS IS THE NEW FROZEN BASELINE. Future diffs of the About text must be
  taken against the two paragraphs reproduced in full below. The
  non-negotiable in CLAUDE.md still applies: never rewrite, rephrase, or
  regenerate this text.

NEW FROZEN PARAGRAPH 1 (About column, `<p class="dropcap">`):

How do behavioral impulses and cognitive limitations interact with the economic incentives that push people toward optimization? My research uses the formal framework of economic theory to predict and explain human behavior in novel ways. It sits between purely empirical work that documents deviations from theory and purely theoretical work that derives predictions without testing them. While I have written papers at both ends of this spectrum, my broader goal is a unified theory of human behavior with the formality of economics.

NEW FROZEN PARAGRAPH 2 (full-width, below the landing grid, `<p>`):

I use most of the tools of economics, whether theory, econometrics, or experimental design, along with knowledge of the literature on psychology and human behavior. My research often begins with formal economic theory, which I distill into sharp predictions that can be tested in the lab. From there I follow the scientific approach: results either support the theory or do not, and those insights feed back into further theoretical development. I also aim to apply behavioral economic theory outside traditional economic settings. I have collaborated on federally sponsored projects to improve traffic and electricity systems and to study disclosure policies aimed at consumer protection. More recently, my coauthors and I received an award for responsible research from the American Marketing Association for work on consumer financial vulnerability.

## 2026-08-24 — FROZEN TEACHING TEXT REPLACED BY ALEX (new baseline, single paragraph)

- Alex personally rewrote the Teaching statement on `teaching.html`. Inserted
  VERBATIM, word for word. The new text REPLACES THE ENTIRE prior statement:
  the previous version was two paragraphs (a `<p class="dropcap">` plus a
  following plain `<p>`); both are gone, replaced by this ONE paragraph.
- The drop-cap is UNCHANGED: the single new paragraph carries the same
  `<p class="dropcap">` markup and still begins with "I", so the big I renders
  exactly as before.
- Per Alex ("keep link in paper of my first paper"), the existing anchor on the
  word "paper" was carried into the new final sentence unchanged —
  `<a href="https://doi.org/10.1007/s10436-007-0092-0">paper</a>` (Brown's first
  paper, Annals of Finance 2009). Only its position moved. No other links in
  the statement.
- Nothing else in `teaching.html` was touched; the git diff is confined to the
  statement block, and the W3C Nu validator returns zero messages.
- THIS IS THE NEW FROZEN BASELINE. Future diffs of the Teaching text must be
  taken against the paragraph reproduced in full below. The non-negotiable in
  CLAUDE.md still applies: never rewrite, rephrase, or regenerate this text.

NEW FROZEN TEACHING PARAGRAPH (top of teaching.html, `<p class="dropcap">`):

I teach courses in experimental methodology, behavioral financial economics, and game theory. The material is demanding, and a full understanding requires substantial quantitative work. I also provide optional materials for students interested in developing research ideas. I have worked with students at the undergraduate, MS, and PhD levels, several of whom have become coauthors. My own undergraduate research produced my first paper and helped set the direction of my career.

## 2026-08-24 — RESEARCH THEME PARAGRAPHS REPLACED BY ALEX (home page)

- Alex rewrote all four Research Theme paragraphs in the `.theme-grid` section
  of `index.html`. His wording is FINAL and APPROVED WORD BY WORD; it was
  inserted VERBATIM (including "2,000" with its comma). No editing,
  rephrasing, or text tooling was run over it.
- Scope of the change: ONLY the four `<p>` contents were replaced. The four
  `<h3>` headings, their `<a>` anchors, and the research-page filter
  deep-links (`research.html?filter=dc` / `gt` / `policy` / `methods`) are
  untouched and byte-identical, as are all classes, card wrappers, and
  everything else on the page. The git diff is exactly four changed lines
  (4 insertions, 4 deletions), all of them paragraph lines.
- Verified by strip-tags comparison: each stored paragraph matches Alex's
  supplied text exactly, and no paragraph contains inline HTML. The W3C Nu
  validator returns zero messages for `index.html`.
- THESE FOUR PARAGRAPHS ARE THE NEW BASELINE for the home-page theme cards.
  Future diffs must be taken against the text reproduced in full below.

NEW THEME PARAGRAPHS (index.html, `.theme-grid`):

**Behavioral Decision Making and Theory** (`research.html?filter=dc`)

These papers study choices under uncertainty, over time, or both. Topics include the robustness of loss aversion, behavioral strategies and impediments to savings and debt reduction, capital allocation within firms, and preferences over ambiguity and the resolution of uncertainty.

**Equilibrium Feasibility, Selection, and Mechanism Design** (`research.html?filter=gt`)

This work asks when equilibrium, the primary solution concept in game theory, is a useful predictor of human behavior. Applications include estimating non-equilibrium models of limited strategic thinking in field settings and testing whether auctions and mechanisms perform as designed.

**Policy Applications** (`research.html?filter=policy`)

Several projects apply experimental and behavioral results to policy. Examples include spillover effects of the CARD Act on student loan borrowing, informing drivers to improve traffic-grid utilization, and measuring and addressing consumer financial vulnerability.

**Experimental Methodology** (`research.html?filter=methods`)

These studies examine the tools of experimental economics themselves, especially whether elicitation methods accurately measure underlying preferences. One paper also finds consistent bargaining and trade results across 2,000 classroom experiments.

## 2026-08-24 — Stats band: "NSF" spelled out (Alex)

- Grant-funding stat description now reads "National Science Foundation,
  Federal Highway Administration, ..." (was "NSF, ..."). Only occurrence
  of "NSF" sitewide. Verified live.

## 2026-08-24 — Phase 5 scoped from GPT critique (Alex approved via questionnaire)

- Alex had GPT critique the live site. Assessment: no redesign (the redesign
  branch was already built and rejected 2026-08-23); scoped polish instead.
  Rejected critique items, with reasons: shorten homepage intro (About text
  frozen, Alex rewrote it 2026-08-24), stats band removal (settled Pass 3;
  GPT's "30+ imprecise" claim wrong — 31 journal pubs, the 45 cards include
  working/other papers), replace cv.html (Safari iframe fix + Alex's
  keep-the-header decision stand), hamburger menu (no-hamburger stands),
  per-paper abstracts (all copy must be Alex's own words; declined).
- APPROVED Phase 5, four passes with stop-gates, mechanical work to Opus:
  1. Research hierarchy — reorder to Working Papers → Journal Publications
     → Other Publications; jump-link line under the h1.
  2. Filter upgrades — URL updates on click (shareable), always-visible
     count, clear reset state.
  3. Card scannability — link labels standardized to "Published version" /
     "Free PDF" (supplemental materials unchanged); bold Alexander L. Brown
     in author lists (full lists stay).
  4. Mobile nav polish — intentional two-row styling, ~44px touch targets,
     revisit the deferred mobile filter-button labels.
- ADD-ONS approved: remove the four tag colors (research page goes
  monochrome — supersedes color plan A's category colors; Alex had called
  the colors arbitrary) and Contact as its own page (contact.html, sixth
  page). Featured-papers block DECLINED (would require Alex-written blurbs).

## 2026-08-24 — Phase 5 Pass 1 done: research hierarchy + WP abstracts (Alex approved)

- research.html reordered: Working Papers (11) → Journal Publications (31)
  → Other Publications (3). Filter bar stays on top; all 45 cards verified
  byte-identical through the move. The three groups are now nested
  <section id="working-papers|journal-publications|other-publications">
  elements inside .paper-list (they inherit the existing section[id]
  scroll-margins); the old outer wrapper section became <div class="page-
  column"> (needed for W3C zero-messages), with the section CSS extended
  to cover it.
- Jump-link index line added under the filter bar. First version ("Jump
  to:" + muted middots) judged "not all that professional" by Alex;
  restyled to a small uppercase letterspaced navy line, no prefix:
  WORKING PAPERS · JOURNAL PUBLICATIONS · OTHER PUBLICATIONS.
- ABSTRACTS added to all 11 working papers (Alex asked mid-pass),
  collapsed <details class="paper-abstract"> per card — native toggle, no
  JS, no motion. Method: VERBATIM from each paper's own source (SSRN/
  arXiv/people.tamu.edu PDF via PyMuPDF — which IS installed, despite no
  poppler); only extraction repairs (ligatures, line-break hyphenation,
  whitespace). Two had no public source; Alex pasted both (Coasian
  oilfield; Lies-Labels).
- Delegated calls (Alex: "your calls on 1-3 are fine"): two typos in
  Alex's Coasian paste fixed ("not known commonly known" → "not commonly
  known"; "this explanations" → "this explanation"); BDM abstract's
  literal LaTeX "---" ×2 normalized to em dashes (curly quotes kept —
  correct typography); Disequilibrium Dynamics KEPT as-is: card title
  matches the 2016 draft/CV, abstract taken from the 2017 "most recent
  version" PDF whose title differs ("Predicting Behavior in
  Disequilibrium in Continuous Space and Time...") — KNOWN MISMATCH,
  pre-existing in the links, revisit if Alex retitles.
- site.css ?v=4 (v3 was the mid-pass state); W3C zero messages; 320px
  no-overflow verified with all abstracts open; home-page deep-link
  anchors intact; filters unaffected.
- Pre-existing bug logged for Pass 4: at 320px the wrapped nav is 130px
  tall but scroll-margins are 90-110px, so anchor jumps land slightly
  under the nav. Fix in Pass 4 (nav height may change there).
- Request-copy mailto subjects (Alex asked): all three now carry the PAPER
  TITLE in quotes instead of the bare author list — Coasian oilfield,
  Lies-Labels, and "Experiments in Continuous Time" (Brown and
  Stephenson, Other Publications).
- NOT pushed — live site unchanged until Alex says deploy.

## 2026-08-24 — No research-page split (Alex: "we will not split...to be clear")

- Alex asked how much sense separate nav tabs for Working Papers vs.
  Publications would make. Recommendation against (nav already at 7 items
  with contact.html coming; unified filters across all 45 papers; Pass 1
  reorder + jump links already solved WP discoverability; link equity on
  the live research.html). Alex CONFIRMED: no split. Research stays one
  page — settled.

## 2026-08-24 — Phase 5 Pass 2: filter upgrades (built; at gate)

- URL sync on click: category buttons write research.html?filter=<key>
  via history.replaceState (DELIBERATE: replaceState, not pushState —
  shareable/bookmarkable without polluting back-button history; verified
  history.length unchanged across clicks). "All" restores the clean URL.
  Existing hash preserved. Load-time preselect unchanged; bogus
  ?filter= values degrade to All (URL left as typed, harmless).
- Count line now ALWAYS VISIBLE: the WCAG 4.1.3 role="status" element
  un-hidden (same element, announcements still fire — verified), default
  "Showing 45 of 45 papers" ships in the markup so it's right before JS
  runs; filters.js self-corrects if the card count ever changes. Styled
  0.85rem muted #5f6672, placed buttons → count → jump links; filter-bar
  margin 30px → 14px so the count reads as attached to the buttons.
  .visually-hidden utility now unused but kept in site.css.
- Reset state: already strong (All ships active/navy-filled,
  aria-pressed) — no change needed.
- Cache-busts: filters.js ?v=4, site.css ?v=5 (all five pages).
- Verified: W3C zero messages; live counts dc 31 / gt 24 / policy 7 /
  methods 7 / All 45; direct ?filter= loads work; home-page deep links
  land filtered; real trusted-click test passed; 320px no overflow.
- Approved by Alex ("look over was good") and committed (89fa1fa).

## 2026-08-24 — Phase 5 Pass 3: link labels + name bolding (built; at gate)

- LABEL DECISION (Alex, via questionnaire + follow-up): avoid the word
  "free" anywhere near publishers. Scheme chosen: "published version"
  (was journal version, 31), "PDF" (was most recent version 21 + final
  version 15 — no card had both, so no collisions), "open access
  version" (was free published version, 1 — Testing-Simplicity card).
  This SUPERSEDES the scope entry's original "Published version / Free
  PDF" wording. Lowercase label convention kept; PDF stays an initialism.
- KEPT UNCHANGED (named-source labels carry meaning): NBER version,
  original working paper (+2009/2012), request copy, supplemental
  materials, web appendix, publisher page, full report, encyclopedia
  version.
- Alex's name bolded (<strong>, weight 600, color inherits) in all 45
  author lists — 27 "Brown, Alexander L." + 18 "Alexander L. Brown";
  verified exactly one per card, no other Browns exist in any list.
- site.css ?v=6 all five pages; W3C zero messages; 320px no overflow;
  filters unaffected; hrefs byte-identical (text-only replacements).
- Approved by Alex ("looks good keep going"); committed 63aeb4a.

## 2026-08-24 — Phase 5 Pass 4: mobile nav polish (built; at gate)

- CSS-only, ≤800px: nav becomes a deliberate centered stack — wordmark
  centered with a hairline (#e6eaf0) under its row, link row centered
  beneath; ≤600px the links break as a balanced 3+3 block (max-width
  300px) instead of ragged 5+1/4+2 wraps. Desktop >880px verified
  PIXEL-IDENTICAL before/after; 801-880px left as its clean single row
  (real wrap threshold measured at ~748px — stacking tablets would waste
  sticky-nav height for nothing).
- Touch targets at ≤700px, all ≥44px effective (measured at 375px): nav
  links 45.8, filter buttons 44.5, paper links 45.8, jump links 45.8,
  abstract summaries 45.2. Desktop sizing untouched. Jump links go one
  per line below 640px (middot separators collapse via font-size:0 —
  they dangled at line ends otherwise).
- Filter-bar note: label-short was ALREADY live on phones (2d3f766 had
  closed the Pass 5 deferred item; the DECISIONS open item was stale).
  Bar at 320px: 117.5px inherited → 153.5px with 44px targets (vs 297.5
  had full labels still been on).
- Anchor-offset bug FIXED: scroll-margins retuned per breakpoint (75px
  ≤880, 115px ≤800, 162px ≤600, now covering section[id] AND
  .paper-card[id]) — all jump links, home deep links, and #contact land
  with ~13-18px clearance at every width; verified at 320px.
- Checks: W3C zero messages (research + index); zero horizontal overflow
  at 320px on all five pages (abstracts open, filters applied);
  focus-visible rules intact; no new motion; site.css ?v=7.
- FLAG for Alex (pre-existing, all widths): the nav wordmark renders
  link-blue #2563eb, not navy — global a-color beats nav .logo. One-line
  fix (nav .logo a{color:inherit}) would change desktop too; his call.
- Subagent also chose not to pad the wordmark to 44px (passes WCAG 2.5.8,
  duplicates Home, would grow the 149px phone nav).
- Approved by Alex ("good") + wordmark fix ordered: nav .logo a
  {color:inherit} — wordmark now navy everywhere (was link-blue, a
  pre-existing bug at all widths). site.css ?v=8. Committed 8e39519.
- Phone-preview how-to for Alex: http://alexs-macbook-pro-8.local:8213
  or http://192.168.0.113:8213 (same Wi-Fi; python server binds all
  interfaces; macOS firewall may need one "Allow").

## 2026-08-24 — Phase 5 add-ons: contact.html + monochrome tags (built; at gate)

- CONTACT PAGE: new contact.html (sixth page) mirroring the sub-page
  skeleton — hero-mini "Contact", canonical/OG for
  alexbrownecon.com/contact.html, .landing-grid transplanted
  BYTE-IDENTICAL from index (email/phone/office/mailing + wcssb.jpg);
  the h2 dropped (hero h1 covers it); content wrapper is .page-column
  (research.html precedent) for W3C zero messages. Contact section
  DELETED from index.html; all six navs point at contact.html
  (aria-current on the new page); zero "#contact" strings remain
  sitewide; sitemap now 6 URLs (parses clean). Frozen About paragraphs
  proven byte-identical (md5 both sides). Homepage is shorter as a
  side-benefit (GPT critique #3).
- MONOCHROME RESEARCH PAGE: 9 category-color rules deleted (per-category
  filter-button default/active fills + 4 chip fills). Chips: one shared
  quiet treatment — #5f6672 text, hairline #dde3ec border (existing
  stats-band hairline), no fill; AA verified (5.58:1 on the #fafbfc
  card). Filter buttons all fill navy #1e3a5f/white when active; new
  .filter-btn.active:hover #23456b (existing lighter navy) so active
  buttons still respond — flag if unwanted. The four category hexes now
  appear NOWHERE (grep-verified, incl. pastel fills). CLAUDE.md brand
  rules updated to match.
- Checks: W3C 0 messages (contact/index/research); counts dc 31/gt 24/
  policy 7/methods 7 intact; 320px zero overflow both new/changed pages;
  site.css ?v=9 on all six pages; index.html diff = exactly nav line +
  section removal + version bump.
- Corrections/observations logged by the subagent: (1) old CSS comments
  claim #5f6672 is 6.3:1 — actually 5.78:1 on white (still AA); fix
  comments sometime. (2) chips now match .jump-links' visual voice —
  two different things, one treatment, watch it. (3) short pages
  (contact, cv) leave the footer mid-screen on tall windows — no
  min-height mechanism sitewide; Alex's call if it bothers him.
- Alex should eyeball the active-filter navy fill once in Safari (the
  hidden-pane transition quirk forced scripted verification).
- Alex: "commit and close" — committed 8bf3bcc. PHASE 5 CLOSED.
  NOT YET PUSHED: live alexbrownecon.com still runs the pre-Phase-5
  site; deploy is a single git push origin main on Alex's go.

## 2026-08-24 — Phase 6 opened: GPT re-review loop (Alex's framing)

- Phase 6 = Claude writes a response to GPT's critique; Alex sends it
  back to GPT, which re-reviews the updated site ON THE LOCAL COMPUTER
  (http://localhost:8213 — preview server must be running; GPT's
  browser must run on this machine to reach localhost, else deploy
  first and point it at the live site).
- Response doc saved OUTSIDE the deployable folder (web/, not
  site-2026/) so it can never be published by GitHub Pages.

## 2026-08-24 — Phase 6: GPT re-review verdict + fix batches (Alex approved, committed)

- GPT's second pass VALIDATED Phase 5: retracted its CV-viewer and
  30+-imprecise claims, endorsed hierarchy/abstracts/filters/labels/
  monochrome/nav, would not reopen settled decisions. Named 3 blockers
  + refinements, all built:
- FIX BATCH: (1) ≤360px filter bar becomes a balanced grid — All spans
  the row, categories 2×2 equal cells (361px+ untouched; breakpoint by
  measurement, flex stays clean to ~355px). (2) contact.html email/
  phone now mailto:/tel: links (+19798457392), ≥44px targets on phones;
  Maps link stays inline with padded hit area (inline-block stranded
  "232" on its own line). (3) CV download is a navy button on BOTH
  desktop and mobile (desktop was a lone text line over the PDF frame;
  one deliberate desktop delta), ~59px tall mobile. (4) Mobile header
  trimmed 148.7 → 132.1px (logo line-height was the dead space), still
  3+3, links ≥44px effective; scroll-margins retuned (145px ≤600, new
  103px 601-700 band) and anchor landings re-verified. cv.html also
  swapped its headingless <section> for .page-column — its last W3C
  info note is gone; ALL SIX pages now validate with zero messages.
- TITLES (Alex picked "Both"): quotes stripped from all 45 titles;
  43 titles now link (WP → PDF, journal → published version/DOI, Other
  → full report/publisher page/encyclopedia version); the 2 request-
  copy-only cards (Coasian oilfield, Lies-Labels) stay unlinked.
  .paper-title now navy #1e3a5f; title links inherit, underline on
  hover/focus. Button rows unchanged beneath.
- COAUTHOR LINKS ported from the old site (Alex: port and verify):
  96 occurrences/67 people from the archive map + 13 more added after
  Alex's follow-up = Ashraf → linkedin.com/in/sruthiashraf (Alex:
  "look for sruthi on linkedin"; profile verified via WSP/TTI match),
  Medina → Bauer College UH directory profile (Alex: "at houston
  bauer"), Wang → xwangsite.wordpress.com/about (same as students
  page, per Alex), Imai → taisukeimai.com root, Stephenson →
  danielgstephenson.com, Williams → PSU page (the students-page URLs).
  Styling: inherit color + hairline #d1d5db underline, navy on hover —
  deliberately quieter than titles. Alexander L. Brown bold and
  UNLINKED everywhere (verified: no <a> inside any <strong>).
  Flagged-but-kept: 403 bot-walls (Lovallo, Hill, Huey) + LinkedIn
  999s; soft-200s: Bardolet → generic Bocconi listing, Lin → MobLab
  about page. Old-site names with no URL stay plain.
- COLOR POLISH (Alex picked both; gold focus rings DECLINED — CLAUDE.md
  bars gold as thin essential indicator): chips now pale slate #eef2f7
  fill, desaturated-navy #3b4d66 text (7.66:1), border dropped; global
  link blue #2563eb → #1d4ed8 sitewide (6.7:1 white), hovers → navy
  #1e3a5f; focus outlines stay #1d4ed8.
- QUOTES also removed from index.html Selected Publications (5, Alex
  ordered) AND Selected Grants (4 — judgment call for same-page
  consistency; revert on request). Frozen About + theme paragraphs
  proven byte-identical vs HEAD after the edit.
- site.css at ?v=11. All six pages W3C zero messages. Alex reviewed
  ("looks good to me") — committed e17a762. GPT's final pass then ran.

## 2026-08-24 — GPT final verdict: DEPLOY. Alex's closing decisions

- GPT round 3: "I would deploy this version. No new blocker or
  embarrassing regression surfaced." Independently verified: v11 CSS on
  all six pages, no overflow at any width, 45 cards (11/31/3), all
  abstracts open, filter counts + URLs correct, anchors clear header,
  zero quoted titles, 43+2 title links, 109 coauthor occurrences with
  Brown bold/unlinked, blockers fixed by its own measurements (filter
  grid 2x2 51px cells; contact targets 46/46/92px; CV button 59px;
  header 132px). Caveat: it verified coauthor-link markup/behavior, not
  a re-crawl of all 109 external URLs over the network.
- Alex (questionnaire): (1) DEPLOY NOW — approved. (2) Narrow-phone
  spacing tweak (<360px: 16px gutter + card padding, 12px gap, ~+22px
  text width) approved POST-deploy — build after push, gate, ship next
  push. (3) Redundant primary-version buttons KEPT — Alex chose the
  explicit labels over the ~2,000px mobile saving; GPT's title-arrow
  affordance idea therefore ALSO dropped (it was contingent on
  removal). Do not re-propose without new evidence.
- Card margins: GPT explicitly endorsed desktop card metrics — do not
  widen desktop cards. Tags stay above titles (its call too).

## 2026-08-24 — DEPLOYED v11 (second deploy); narrow-phone spacing built

- Pushed main (e382b97..c211fdd). Live verification: all six pages +
  sitemap 200 over https, site.css?v=11 live, 11 abstracts and the
  tel: link present in served HTML. Phases 5 and 6 are now the live
  alexbrownecon.com.
- Post-deploy spacing tweak built per Alex's pick: inside the existing
  ≤360px block — section/.page-column side padding 16px, .paper-card
  padding 16px, .paper-list/.paper-group gap 12px. Measured at 320px:
  card content width 219 → 254px (beats GPT's 241 estimate — gutter
  AND card padding both slim), zero overflow; 375px verified unchanged
  (22px/20px/16px). site.css ?v=12 on all six pages. Alex reviewed via
  a before/after demo artifact and said "push" — v12 PUSHED and
  verified live (889b62e). Live text-column at 320px: 234 → 254px by
  a consistent yardstick (card clientWidth minus padding; the entry
  above quoted GPT's 219 figure, which used a different measure).
- STILL OPEN after this: Alex's qa-checklist re-run against the live
  site; better teaching photo (class starts Tue 2026-08-25); Colin
  Hegarty market headshot; optional TAMU homepage redirect
  (Alex-approved only).

## 2026-08-24 — THEME PARAGRAPHS REPLACED AGAIN BY ALEX (new baseline); pushed

- Alex supplied replacement wording for all four Research Theme
  paragraphs; inserted VERBATIM (headings, anchors, filter deep-links,
  and everything else untouched — git diff is exactly 4 changed
  paragraph lines). W3C zero messages. SUPERSEDES the earlier
  2026-08-24 theme baseline. Committed and pushed on Alex's
  instruction ("A short update to push").

NEW THEME PARAGRAPHS (index.html, .theme-grid):

**Behavioral Decision Making and Theory** (research.html?filter=dc)

My research examines individual choices and preferences that deviate from conventional economic theory under uncertainty, over time, or both. Topics include loss aversion, behavioral strategies and impediments to savings and debt reduction, capital allocation within firms, social and nonpecuniary preferences such as charitable giving and lying aversion, and preferences over ambiguity and the resolution of uncertainty.

**Equilibrium Feasibility, Selection, and Mechanism Design** (research.html?filter=gt)

Another area of my work asks when equilibrium, the primary solution concept in game theory, is a useful predictor of human behavior. Applications include estimating non-equilibrium models of limited strategic thinking in field settings and testing whether auctions and mechanisms perform as designed.

**Policy Applications** (research.html?filter=policy)

Several of my projects apply experimental and behavioral results to policy. Examples include spillover effects of the CARD Act on student loan borrowing, informing drivers to improve traffic-grid utilization, and measuring and addressing consumer financial vulnerability.

**Experimental Methodology** (research.html?filter=methods)

I also study the tools of experimental economics themselves, especially whether elicitation methods accurately measure underlying preferences. One paper finds consistent bargaining and trade results across 2,000 classroom experiments.

## 2026-08-24 — TAMU redirect PROMOTED to the to-do list (Alex)

- Alex: "we need to do a redirect from tamu people site" — the
  people.tamu.edu/~alexbrown HOMEPAGE redirect is now a planned task,
  no longer optional. Standing constraints from the 2026-08-22 hosting
  decision still bind: the redirect applies to the homepage ONLY;
  paper PDFs stay at their people.tamu.edu URLs forever (Scholar
  indexing + inbound links); Alex performs all TAMU uploads manually.
  Likely shape: replace the old homepage with a small page that
  meta-refreshes/JS-redirects to https://alexbrownecon.com and shows a
  fallback link (TAMU hosting won't offer server-level 301s) — design
  it next session, Alex uploads.

## 2026-08-24 — /catchup command + TAMU redirect file built

- New project command `/catchup` (.claude/commands/catchup.md, committed;
  verified NOT published by Pages — Jekyll excludes dot-dirs, 404 live):
  any fresh chat types /catchup to read CLAUDE.md + DECISIONS.md in
  full, check git/server/live-site state, and report a recap + open
  list before doing anything.
- TAMU redirect homepage built at web/tamu-redirect/index.html (OUTSIDE
  the repo, never deployed by Pages): canonical + meta refresh 0 + JS
  location.replace to https://alexbrownecon.com/ with a visible
  fallback link. Alex uploads it manually to people.tamu.edu/~alexbrown
  replacing ONLY the homepage file; papers stay untouched. Step-by-step
  given in chat; after upload, verify the old URL redirects AND a paper
  PDF URL still serves.

## 2026-08-25 — TAMU redirect: humorous version (Alex's idea, at gate)

- Alex supplied his 2013 headshot (6-headshot.JPG, "with hair") for the
  redirect page. Endorsed: self-deprecating, harmless for the audience.
  Rebuilt web/tamu-redirect/index.html: circular 2013 photo (web copy
  headshot-2013.jpg, 600px/30KB, sips -Z from the 2MB original),
  caption draft "This photo is from 2013. So was this website.",
  redirect DELAYED to 4 seconds (meta refresh + setTimeout) so the joke
  is actually seen; prominent immediate link; note that paper links
  keep working. Canonical unchanged.
- AT GATE: caption wording is Claude's draft — Alex's copy method says
  he approves or rewrites it before upload. Upload = BOTH files
  (index.html + headshot-2013.jpg) to ~alexbrown/.

## 2026-08-25 — TAMU redirect copy: humanizer pass (GPT + Alex flagged AI-ish wording)

- Alex kept sentences 1-2 ("This photo is from 2013. So was this
  website.") as the delivery. Paper-links sentence CUT (explanation
  nobody needs; the §34 pattern). Info sentence rewritten by humanizer
  audit: em dash + passive "you will be redirected" replaced with
  "The new one is at alexbrownecon.com. This page will take you there
  in a few seconds." Applied to index.html AND preview.html in
  web/tamu-redirect/. Photo: recentered square crop (face midline at
  center) after two rounds of Alex feedback.
- Review server for GPT: python http.server on port 8216 in
  web/tamu-redirect (8214 was squatted by a stale server — lesson
  reconfirmed). preview.html = redirect-disabled copy for critique;
  index.html keeps the 4s redirect.
- Final page body is three lines: photo, name, joke + destination.
  Awaiting Alex's upload to people.tamu.edu (both index.html and
  headshot-2013.jpg).

## 2026-08-25 — TAMU redirect copy FINAL (Alex approved)

- Final wording, Alex's picks after GPT round + humanizer: "This photo
  is from 2013. So was this website." (period kept — ellipsis
  considered twice and declined: deadpan over telegraphed pause; GPT
  concurred) / "The new one is at alexbrownecon.com. You'll be there
  in three seconds." ("the new one" = Alex's explicit keep; ending =
  Claude's active-voice recommendation over GPT's "You'll be
  redirected").
- Mechanical batch applied: redirect 4s → 3s (meta + setTimeout),
  title "Alexander L. Brown | Website Moved", inline-block tap padding
  on the link. Both index.html and preview.html updated; verified
  served on :8216.
- READY FOR UPLOAD: Alex uploads index.html + headshot-2013.jpg to
  people.tamu.edu/~alexbrown (backup old homepage first; papers
  untouched; test redirect + one paper PDF after).

## 2026-08-25 — TAMU REDIRECT IS LIVE (Alex uploaded; verified)

- people.tamu.edu/~alexbrown/ now serves the redirect page — fetched
  live and byte-checked against our final: correct title, canonical,
  3s meta refresh + 3000ms setTimeout, final approved copy, photo
  referenced. headshot-2013.jpg serves 200 image/jpeg. Paper PDFs
  UNTOUCHED and serving (PeerEvaluations12232025.pdf 200
  application/pdf). The old-site → new-site transition is complete.
- Review server on :8216 stopped (its job ended with the upload).

## 2026-08-25 — TEACHING PHOTO FINAL: doctored first-day photo (Alex approved; deployed)

- Alex supplied IMG_4782.HEIC (web/, first 459 class of the semester,
  shot from the back: projection screen left, Alex right, students
  foreground). He liked the photo but not the screen content (Canvas
  syllabus in Chrome, dock visible). Screen DOCTORED at his request to
  show the "Brown et al. (2024)" JEL loss-aversion slide — same slide
  as the old interim teaching photo — rendered crisp from the actual
  deck: page 66 of "Unit 15-Loss Aversion and Disposition Effect.pdf"
  (~/Documents/prof/ECON 618/slides/2025 redesign/).
- Composite built by an Opus subagent (per the conserve-Fable rule):
  subpixel corner fits of the lit area, 4:3 slide pillarboxed on the
  ~16:9 screen, projective warp, per-pixel white-point field, black
  lift + veiling glare, blur matched to the photo's edge softness,
  level-dependent grain matched to the photo's noise. No occlusions.
  Fable reviewed the output visually before Alex saw it.
- Alex's picks: FADED tone variant (KB 0.235/0.170/0.140, glare 0.17)
  over the punchier default; CROP C (0,0,3900,2600 of the 4032x3024
  frame, wide 3:2, less foreground) over full-frame and right-trimmed
  candidates; new alt text approved ("...teaching a class, with a
  slide of his loss aversion meta-analysis on the screen").
- Shipped: assets/images/teaching.jpg 1400x933, 227 KB, EXIF/GPS
  stripped (verified 0 metadata bytes). teaching.html diff = the one
  alt line; frozen Teaching paragraph proven byte-identical (md5);
  W3C zero messages.
- Recipe + full-res outputs preserved in "bad photos?/doctor-recipe/"
  (gitignored, never published): compose.py etc. re-runnable if Alex
  ever re-shoots. Slide footer note: legible at full zoom it reads
  "Econ 618 (TAMU) ... 10/23/25 25/26" (last fall's compile date) —
  Alex accepted.
- Known context: photo is the 459 classroom; slide is from 618. Alex
  approved. Old teaching photo remains in git history.
- Stale-server lesson AGAIN: the long-running :8213 server 404'd
  everything (dead directory handle) while lsof still showed the right
  cwd — verify content, not just the process. Restarted in-place.

## 2026-08-25 — OLD TAMU CV: decision DEFERRED to next session (Alex)

- Old CV still serves at people.tamu.edu/~alexbrown/papers/cv.pdf
  (last-modified 2026-03-23 — predates CARD Act forthcoming, AMA award,
  retitles). The homepage redirect deliberately left papers/ alone.
- Options discussed: (1) overwrite with current CV + add a sync line to
  qa-checklist; (2) one-page pointer PDF "Current CV:
  alexbrownecon.com/cv.html" (Claude's recommendation — one upload,
  zero maintenance, soft landing for old links); (3) delete the file
  (Google self-corrects in weeks; direct-link followers hit a bare 404).
- Linking the NEW site to the TAMU copy was RULED OUT: TAMU sends
  X-Frame-Options: SAMEORIGIN, so cv.html's embedded viewer cannot
  frame it, and it would invert the dependency onto legacy hosting.
- ALEX'S OPEN CONCERN, must resolve BEFORE any change: something in
  TAMU administration/regulations may point at the old CV URL —
  specifically howdy.tamu.edu (faculty portal). Check what howdy or
  other TAMU systems (AEFIS/Workday/dept faculty page?) reference
  before overwriting, pointing, or deleting. Claude cannot see inside
  howdy (NetID login); Alex will need to check or ask the department.
- TO-DO (next session): resolve the howdy question, then pick 1/2/3.

## 2026-08-25 — CV UPDATED: website line + research fields (Alex ordered, deployed)

- Two edits to cv_brown.tex (Opus subagent; compiled 2x, verified):
  header URL people.tamu.edu/~alexbrown -> alexbrownecon.com; Research
  fields -> the site hero's five fields "Behavioral Economics,
  Experimental Economics, Game Theory, Consumer Behavior, Decision
  Theory" (Alex corrected mid-run from Claude's first read of "match
  website" = the four theme headings — the hero interests line was
  what he meant). Teaching fields untouched. Diff exactly 2 lines;
  11 pages, pages 2-11 byte-identical; zero new LaTeX warnings;
  people.tamu.edu now appears NOWHERE in the CV (mailto tamu.edu
  address remains, correct). Backup: cv/cv_brown_before_site_update.pdf.
- assets/cv_brown.pdf replaced; committed and pushed on Alex's "then
  post" instruction.

## 2026-08-25 — REVERT "Consumer Behavior" -> "Behavioral Consumer Finance"; CV phone fixed (Alex, after a suspicious review request)

- Alex received a weird review request and got cautious about the
  "Consumer Behavior" tag introduced earlier today. Reverted to the
  OLD-SITE wording "Behavioral Consumer Finance" — confirmed verbatim
  in the pre-March-2026 archive (web/index.html line 182) — in BOTH
  places: index.html hero interests line (its only site occurrence)
  and the CV Research fields line. Fields now: Behavioral Economics,
  Experimental Economics, Game Theory, Behavioral Consumer Finance,
  Decision Theory ("Decision Theory" kept; only the one tag changed).
- CV phone mismatch fixed per Alex ("use whatever was on old website;
  I would go to people.tamu all the time to find my numbers"): old
  site's contact block had exactly one number, (979) 845-7392 — which
  the new site already uses. CV "Phone: (979) 862-7392" -> 845-7392.
  KEPT the CV's Secretary (845-7351) and Fax lines — the old site had
  no such lines, so nothing to match against; flag to Alex in chat,
  drop on his word.
- Recompiled 2x, 11 pages, fields line wraps identically to the old
  CV's ("Behavioral Con-/sumer Finance"); 845-7392 present, 862
  absent, verified via PyMuPDF. assets/cv_brown.pdf replaced. Frozen
  About + theme paragraphs proven identical to HEAD; W3C index.html
  zero messages.

## 2026-08-25 — STANDING RULE: old website is the contact-info authority

- Alex, after the phone fix: "old website is the standard for all
  contacts. I would trust more than CV." Recorded in CLAUDE.md
  non-negotiables. The review request that triggered the check was
  genuine; the concern predated it.

## 2026-08-26 — CV/website TO-DO: CFPB IPA agreements as external support (Alex)

- New fact (from the LinkedIn profile session): both CFPB Visiting
  Scholar stints (Aug 2017–Jan 2018; Mar 2020–Jan 2021) were PAID
  under IPA (Intergovernmental Personnel Act) agreements — Alex
  remained a TAMU state employee detailed to the agency, which
  reimbursed the university.
- Idea Alex wants tracked: list the IPA agreements on the CV under
  grants/external support (e.g., "Intergovernmental Personnel Act
  agreement, Consumer Financial Protection Bureau, 2017–2018 and
  2020–2021"). He believes this is legitimate CV practice but never
  worked out the formatting; draft it when the amount is in hand.
- Amount: roughly $100K total, but Alex has to FIND the exact
  figure(s) in his records before anything is added. Blocked on that.
- Knock-on if added: the grant total could move ~$3.4M → ~$3.5M in
  BOTH places that state it — cv_brown.tex and the site stats band
  ("$3.4M+ Grant Funding" on index.html). Change them together or not
  at all. The LinkedIn build sheet says "more than $3.4 million,"
  which stays true either way — no LinkedIn edit needed.

## 2026-09-05 — CV fix: "Hagerty" → "Hegarty" (Alex go-ahead)

- Live-site verification (fetched, not assumed) found the published CV
  PDF listed the PhD student as "Colin Hagerty" while students.html
  says "Colin Hegarty." Alex: "it's hegarty but verify on
  econ.tamu.edu." Verified: department profile at
  artsci.tamu.edu/economics/contact/profiles/colin-hegarty.html, email
  ckhegarty@tamu.edu. CV was wrong; site was right.
- cv_brown.tex line 516 corrected; recompiled twice; text diff against
  the previous PDF shows exactly two changed lines (the name, and the
  auto "Last updated" month → September 2026). 11 pages, unchanged.
  assets/cv_brown.pdf replaced. Not pushed in this session unless Alex
  says so.
- Same verification pass confirmed: six pages serve, TAMU homepage
  redirect works, one phone number (845-7392) everywhere, stats band
  30+ / $3.4M+ / 9+, no banned category colors in live CSS, no broken
  internal links. Only remaining content defect anywhere is the stale
  March CV at people.tamu.edu/~alexbrown/papers/cv.pdf (on TAMU's
  server; recommendation pending with Alex: overwrite it).
- Project-level orientation now lives one level up: `../../START
  HERE.md`, README.md, session-log.md, CLAUDE.md (written 2026-09-05).

## 2026-09-05 — students.html: Colin Hegarty card (Alex: "do 1 and 2")

- Verified Colin has a personal site (sites.google.com/view/chegarty) and
  a department job-market profile with a JMC headshot. His card linked
  only the generic department PhD-students page.
- Link now goes to his personal site. Photo replaced with the
  department JMC headshot (Alex saved it from the browser; cropped to a
  400x400 square at native resolution — no upscaling — replacing the
  600x600 Aug 23 image). Title changed "Ph.D. Student" → "Ph.D.
  Candidate, Economics" to match Zhang's card and his own site.
- Sandbox lesson: the Cowork sandbox proxy blocks artsci.tamu.edu
  (403), so images from there are saved by Alex from the browser, not
  fetched by Claude.
