# thrifti credit

thrifti is the brand. It has two separate projects that must not be mixed:
- **thrifti grocery**: the grocery price app, `D:\Claude\grocery-price-compare`
  (GitHub `thriftiapp/thrifti-app`, deployed on Vercel). Do not touch it from here.
- **thrifti credit**: this folder. Business files and the credit waitlist website.

The research proof of concept for the credit score is a third, separate folder:
`D:\Claude\Thrifti` (Windows treats `thrifti` and `Thrifti` as the same name, which is
why this project is `thrifti-credit`).

Source material: `docs/thrifti-handover.md` and `docs/07_claude_code_kickoff_prompt.txt`.
The prompts were written for `D:\Claude\thrifti` with two repositories and GitHub Pages.
AD changed that on 2026-11-07: one repository, this folder, under the thriftiapp GitHub
account. Read the prompts' folder and repository steps with that in mind.

## Working rules
- Call the user AD. Plain, natural language. No em dashes. No contractions.
- Blunt and fact based. Short replies. No flattery. Show results, not progress.
- If unsure, say so. Never invent sources, numbers, APIs or commands.
- If something is unclear, ask one question before acting.
- Documents for others include: "Generated with the support of AI. AI may have been
  used to collect information." Deliver documents as Word, not PDF.
- End each reply that produces work with one line confirming these rules were followed.

## About thrifti credit
- Always "thrifti", all lowercase, everywhere.
- Research-stage idea in Canada. Not incorporated. Not a lender.
- Fair-rate debt consolidation (target 8 to 10 percent APR), later a debt relief bank,
  using a transparent CARE Score (income stability, expense predictability, cash flow
  resilience, payment behaviour on rent and bills, engagement). A licensed partner
  (credit union or Collabria) lends; thrifti scores, refers and supports.
- Market figures are approximate and must be verified before use (handover Part 3).
- Open banking: Consumer-Driven Banking Act passed March 2026; final rules targeted late
  2026 or early 2027. Use an aggregator such as Flinks until the regulated channel is live.
- First target: stable income, on-time bills, score hurt by a shock, Ontario or Quebec.

## Plan
1. Weeks 1 to 6: 20 to 30 NGO-sourced interviews, waitlist site, one-page synthesis.
   Kill or pivot if fewer than 60 percent say 8 to 10 percent consolidation would change
   their situation.
2. Months 2 to 3: clickable demo and rules-based CARE Score v0 on fake data only.
3. Months 3 to 6: pilot LOI with a lending partner, lawyer review, backtest on the
   partner's anonymized past applicant data.
4. Months 6 to 12: 50 to 100 real users through the partner, after security review and a
   privacy impact assessment, with a human engineer reviewing production code.
- Never use real customer financial or personal data in testing.

## Brand standard (all thrifti communication)
Decided by AD on 2026-11-07. Applies to everything thrifti: websites, social media,
emails, documents, decks, posters.
- Logo: the light thrifti mark on an indigo #4C5FD5 rounded square,
  `brand/thrifti-logo-badge.svg`. Light-only mark for coloured backgrounds:
  `brand/thrifti-logo.svg`. Indigo mark for white backgrounds: `brand/thrifti-logo-indigo.svg`.
- Main brand colour: indigo #4C5FD5. The teal in the first site draft is replaced.
- Name always "thrifti", lowercase.

## Domain and email (do not break)
- Domain thrifti.app, DNS at AD's current registrar.
- Email contact@thrifti.app on Zoho. Never change or delete MX, SPF, DKIM or Zoho
  verification records.

## Folders
- `docs\` plans and research. `research\` anonymized interview notes only.
- `logs\session-log.md` dated summary of every session, decisions, next steps.
- `site\` the waitlist website: plain HTML, CSS, a little JavaScript, no framework, no
  database. Tally link set in one place: `TALLY_URL` in `site/js/main.js`.
- Live at https://thrifti-credit.blue-shape-8f74.workers.dev (Cloudflare Workers;
  `wrangler.jsonc` serves `site/`). Every push to main goes live, so push only after
  AD approves the design.
- Git: one repository for everything, commits as "thrifti" <contact@thrifti.app>. The D
  drive does not record file ownership, so git commands need
  `-c safe.directory=D:/Claude/thrifti-credit`.
- Never write to C:. End of every session: update the log, commit and push.

## Website copy rules
Grade 8 English, no em dashes, no contractions, no hype. Never promise approval, a rate
or a score increase.

## Next
After the website, ask AD before starting anything else. Likely next: demo at
`/demo` (`docs/08_claude_code_prototype_prompt.txt`), interview guide, NGO outreach
tracker.
