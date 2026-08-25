---
description: Get this chat fully up to speed on the site-2026 project state
---

Bring yourself completely up to speed on this project before doing anything else, then report back and STOP for instructions.

Do all of the following, read-only (change nothing during catch-up):

1. Read CLAUDE.md in this directory in full (design rules, non-negotiables, environment notes).
2. Read DECISIONS.md in full. The bottom entries are the current state. Note especially: the current FROZEN text baselines (About, Teaching, theme paragraphs — never rewrite these), and the most recent "STILL OPEN" / to-do items.
3. Run `git log --oneline -15` and `git status` to see recent work and any uncommitted changes.
4. Check whether the live site is current: compare `git log origin/main..main` (unpushed commits = live site is behind).
5. Check whether a local preview server is running on port 8213 and actually serving THIS directory (verify content, not just a 200 — stale servers from old sessions have bitten us).

Then give Alex a compact recap:
- One line: where the project stands (live at https://alexbrownecon.com, current phase).
- The last 3–5 decisions/changes, one line each.
- The open to-do list from DECISIONS.
- Any anomalies found (uncommitted changes, unpushed commits, stale/absent server).

Standing rules that apply to every session regardless of task: stop for Alex's explicit go-ahead at every decision point; commit after each approved pass; pushing deploys the live site, so never push without Alex's instruction; delegate mechanical work to subagents no lower than Opus; frozen texts are carried verbatim and proven by diff.
