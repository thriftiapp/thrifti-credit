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

### Brand decision (2026-11-07)
- AD picked the logo as the light thrifti mark on an indigo (#4C5FD5) rounded square:
  `brand/thrifti-logo-badge.svg` (same as `thrifti-logo-preview.svg`). Use it for all
  thrifti products. The credit website colours move from teal to this indigo when it is
  rebuilt.
- Launch plan doc: https://claude.ai/artifact/GLLviFbYCY8pvoBgko9kiH

### Tally (2026-11-07)
- Waitlist form built and published through the Tally connector: https://tally.so/r/YjRJYN
  (form id YjRJYN). Notifications to contact@thrifti.app. Hidden field `source` for
  tracking links, e.g. https://tally.so/r/YjRJYN?source=instagram

### Next session to-do (AD, 2026-11-07)
1. Find free startup law clinics in Ontario (university small business clinics) for a legal check of gift card interviews, consent wording, privacy page and interview script.
2. Research faceless finance creators and named Facebook groups and subreddits for the launch plan.
3. Rebuild the website in thrifti indigo and design the Facebook page.
4. Competitor map: who already does cash-flow scoring, rent reporting, fair-rate consolidation and newcomer credit in Canada and the US, and what thrifti does differently.

### 2026-11-08
- Site redesigned in indigo (not pushed). Tagline A/B test: A "AI that works for the people", B "AI for the people", C "Using AI for the people", D "AI for Canadians"; version saved in Tally hidden field `tagline`.
- Gift card for interviews dropped for now (AD). Removed from the site and the Tally form. Older docs (launch plan, handover, NGO emails) still mention $25 and need updating before use.
- Privacy page now says Tally may store data outside Canada. "How we use AI" note added: CARE Score is rules-based today.
- LIVE 2026-11-08: https://thrifti-credit.blue-shape-8f74.workers.dev (Cloudflare Workers, deploys on every push to main). Tested: all pages and files load, four taglines A-D, calculator, waitlist link with source and tagline, privacy page, 404 page, font loads.
- Not yet: thrifti.app domain (keep Zoho email records safe), registered company name in footer, update older docs that mention the $25 gift card.
- Removed the $25 interview gift card from docs (handover, kickoff prompt, MVP steps, NGO emails) and from the launch plan and handover Claude docs. $500 NGO coordination fee kept. Original copies in D:\Claude\Thrifti	hrifti 2.0\chat_import are kept unchanged as the archive.
- thrifti.app currently serves the GROCERY app (Vercel: A 216.198.79.1, www CNAME vercel-dns). DNS at Google Cloud DNS. Zoho MX mx/mx2/mx3.zoho.eu, SPF include:zohomail.eu, DKIM zoho._domainkey, google-site-verification TXT. Domain for credit site not set up yet: waiting on AD.
- Nameservers changed at Squarespace to jacob/serenity.ns.cloudflare.com (2026-11-08 10:45). Waiting for Cloudflare Active.
- Agreed domain plan (AD): thrifti.app = brand home page with two cards; grocery.thrifti.app = grocery app (Vercel); credit.thrifti.app = credit site. Order: credit domain first, then add grocery.thrifti.app alongside, then home page (AD approves), then switch thrifti.app with redirects. Grocery work runs in its own session in the grocery project; check hardcoded URLs and Vercel Hobby non-commercial terms first.
- LIVE on credit.thrifti.app (2026-11-08), Cloudflare custom domain via wrangler.jsonc routes. Grocery www.thrifti.app still 200. Profile PNGs in brand/ (thrifti-profile.png 1080px for social).
- LIVE 2026-11-08: tagline shown large in the hero (A-D). Form asks (optional) "Did you notice the short line..." and "Which of these was the line you saw?" (4 taglines + I do not remember). Hidden fields: source, tagline (letter), tagline_text. Measure per tagline: noticed, correctly recognised, sign-up rate. Visitor counter per tagline not built yet.

## 2026-11-12 (evening)
- Look approved direction: Care for your tree (roots, flowers, leaves, fruit, winter), no coins, TM on thrifti and CARE.
- Rating shown in 5 parts, weights private. Required vs optional data; optional earns points, "coming soon" hint only.
- Bank statements by upload for now; open banking line saved in design/README.md, not on the site.
- Architecture and costs: docs/architecture-and-costs-v1.html (tech floor about $530 a month; people and legal need quotes).
- Working prototype built: app/ (16 screens, live forms, what-if, loan maths). Not deployed.
- All work on D; C copies backed up in _chats/c-drive-copy-2026-11-12.
- Next: investor deck with verified statistics.

- Investor deck: docs/17_thrifti_investor_deck.pptx (12 slides, built by docs/deck/build-deck.js, screens from the app). Stats checked on Equifax, FCAC/Bank of Canada, IRCC, FinRegLab, Windmill pages. Amber boxes mark where our survey will add data.
