# Session log

## 2026-11-07

Done
- Created `D:\Claude\thrifti-business` (not `D:\Claude\thrifti`: on Windows that is the
  same folder as the research project `D:\Claude\Thrifti`).
- Added `CLAUDE.md`, `docs\` (handover, MVP steps, NGO emails, kickoff and prototype
  prompts), `research\` (empty), `.gitignore` with `site/`.
- Built the waitlist site in `site\`: `index.html`, `privacy.html`, `CNAME`
  (thrifti.app), `favicon.svg`, `css\style.css`, `js\main.js`. Checked locally at phone
  width: no sideways scrolling, FAQ opens and closes, waitlist buttons show a "not open
  yet" note while the Tally link is a placeholder.
- Checked GitHub Pages DNS and HTTPS steps against docs.github.com (2026-11-07).
- Checked CLAUDE_CONFIG_DIR against code.claude.com docs (2026-11-07).
- `git init` in both folders, branch `main`. No commits yet.

Decisions
- Tally link lives in one place: `TALLY_URL` in `site\js\main.js`.

Blocked / waiting on AD
- Tally form link.
- GitHub repositories `thrifti` (private) and `thrifti-site` (public): the GitHub
  command-line tool is not installed here, so AD creates them or installs the tool.
- Name and email to use for git commits (the site repository is public).

Next
- Put in the Tally link, commit, push both repositories, turn on Pages, add DNS records,
  enforce HTTPS.

### Later on 2026-11-07
- AD: credit stays separate from the grocery app, under the thrifti brand. Folder renamed
  to `D:\Claude\thrifti-credit`. The website is now part of this one repository (no
  separate site repository). Credit files briefly copied into the grocery app were
  removed before any commit; the grocery repository is unchanged.
- GitHub sign-in for the thriftiapp account now works on this computer (read access to
  `thriftiapp/thrifti-app` confirmed).
- Waiting on AD: create an empty private repository `thriftiapp/thrifti-credit`, the
  Tally link, and a decision on where the website is hosted.
