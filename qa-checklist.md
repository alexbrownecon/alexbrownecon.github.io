# Manual QA checklist — Phase 4, Alex's checks
Run against http://localhost:8213 now; re-run the quick version against
https://alexbrownecon.com after deploy. Check items off as you go; report
anything odd back in Cowork (screenshots beat descriptions).

## A. Desktop Safari (your primary browser — Chrome checks are not enough)

- [X ] Open http://localhost:8213 — hero renders: name in Spectral, photo,
      gold rule under the navy band
- [X ] About: drop-cap H, new question opener reads right to your ear
- [X ] Click each of the 4 Research Theme headings — each should open the
      Research page with ITS filter already active (button filled, paper
      list reduced): Decision Making, Equilibrium, Policy, Methodology
- [X] Back on Home: click each of the 5 Selected Publications titles —
      each should land on that paper's entry on the Research page, card
      outlined in navy, not hidden under the sticky nav
- [X] Selected Grants links: TTI technical report (should download/open a
      PDF — note it's the capital-R URL now), Research@TAMU archive link,
      ALERT project page
- [X ] Research page → Other Publications → the Handbook of Experimental
      Game Theory link (e-elgar.com): THE one link automation could not
      verify (Cloudflare). Confirm it loads for a human
- [X ] Research page: click "journal version" on 3–4 papers (DOI links) and
      2–3 "most recent version" PDFs on people.tamu.edu — all should open
- [X ] CV page: embedded PDF shows in Safari; Download link works
- [X ] CV page Safari-specific: narrow the window below ~700px (viewer
      disappears, download link remains), then widen back — the viewer
      must COME BACK (this exercises the Safari reload fix)
- [X ] Students: 11 photos load; two red "On Market" badges (Zhang,
      Hegarty); click 2–3 student links (they now point at verified pages)
- [X ] Teaching: drop-cap I; the word "paper" links to Brown-Kagel DOI;
      three catalog links work
- [X] Nav "Contact" from any page: smooth-scrolls, heading clears the nav

## B. Keyboard only (no mouse — any browser)

- [ ] On Home press Tab once: "Skip to main content" appears top-left;
      Enter jumps past the nav
- [ ] Keep tabbing: every link shows a visible focus outline; order runs
      top to bottom sensibly
- [ ] Research page: Tab to the filter buttons; Enter or Space activates
      each; the list updates; focus stays visible on the active button
- [ ] No dead ends: you can Tab through an entire page without the focus
      vanishing or looping

## C. Zoom

- [X ] Desktop at 200% (Cmd+ five times or so): no horizontal scrollbar,
      no overlapping text, everything readable
- [X ] Push briefly to ~400%: content reflows to one column, still usable

## D. Your iPhone (Safari)

- [ ] Same Wi-Fi: open http://<your-Mac-name>.local:8213 (ask me for the
      exact address if it doesn't resolve) — or defer to post-deploy
- [ ] Home: no sideways scrolling anywhere; hero stacks; stats read as
      single lines
- [ ] Research: filter buttons show the SHORT labels (Decision Making,
      Equilibrium, Policy Applications, Methodology); each is comfortable
      to tap; filtering works
- [ ] Students: compact horizontal rows, photos left; badges visible
- [ ] CV: viewer hidden, Download link opens the PDF
- [ ] Rotate to landscape: nothing breaks
- [ ] Tap a couple of paper PDFs — they open

## E. Reduced motion (2 minutes, optional but good)

- [ ] macOS: System Settings → Accessibility → Display → Reduce Motion ON,
      reload: filter changes snap (no fade), anchor jumps are instant

## After your checks

- [ ] Bring findings back to Cowork (this chat or a fresh one)
- [ ] Then: the full WCAG audit review (Phase 4 step 3)
- [ ] Then: deploy go-ahead — reminders queued: git identity re-author,
      "bad photos?" folder excluded (gitignored), GitHub Pages + DNS wiring
