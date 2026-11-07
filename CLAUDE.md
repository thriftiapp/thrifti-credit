# thrifti (business files)

Summary of the kickoff message (`docs/07_claude_code_kickoff_prompt.txt`) and the
handover (`docs/thrifti-handover.md`). Keep this file up to date.

## Folder note
This project lives in `D:\Claude\thrifti-business`, not `D:\Claude\thrifti` as the
kickoff and prototype prompts say. Windows treats `thrifti` and `Thrifti` as the same
folder, and `D:\Claude\Thrifti` is a separate research project (alternative credit
scoring proof of concept). Read every `D:\Claude\thrifti\...` path in the prompts as
`D:\Claude\thrifti-business\...`.

## Working rules
- Call the user AD. Plain, natural language. No em dashes. No contractions.
- Blunt and fact based. Short replies. No flattery.
- If unsure, say so. Never invent sources, numbers, APIs or commands.
- If something is unclear, ask one question before acting.
- Show results, not progress. Ask only real questions.
- Documents for others include: "Generated with the support of AI. AI may have been
  used to collect information." Deliver documents as Word, not PDF.
- End each reply that produces work with one line confirming these rules were followed.

## About thrifti
- Always "thrifti", all lowercase, everywhere.
- Research-stage idea in Canada. Not incorporated. Not a lender.
- Fair-rate debt consolidation (target 8 to 10 percent APR), later a debt relief bank,
  using a transparent CARE Score (income stability, expense predictability, cash flow
  resilience, payment behaviour on rent and bills, engagement). A licensed partner
  (credit union or Collabria) lends; thrifti scores, refers and supports.
- Market figures are approximate and must be verified before use (see handover Part 3).
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

## Domain and email (do not break)
- Domain thrifti.app, DNS at AD's current registrar.
- Email contact@thrifti.app on Zoho. Never change or delete MX, SPF, DKIM or Zoho
  verification records.

## Storage and repositories
- `D:\Claude\thrifti-business` = private GitHub repository "thrifti" (business files).
- `site\` = the website, its own public repository "thrifti-site". `site/` is in the
  parent `.gitignore`.
- `docs\` plans and research. `research\` anonymized interview notes only.
- `logs\session-log.md` dated summary of every session, decisions, next steps.
- Never write to C:. End of every session: update the log, commit and push both repos.
- Nothing confidential in the public repository.
- GitHub is already connected for another project. Do not touch that connection.

## Website (site\)
- Plain HTML, CSS, a little JavaScript. No framework, no database. GitHub Pages from main.
- Waitlist form is Tally. The link is set in one place: `TALLY_URL` in `site/js/main.js`.
  Until AD sends it, it is a placeholder and the buttons show a "coming soon" note.
- Copy rules: grade 8 English, no em dashes, no contractions, no hype. Never promise
  approval, a rate or a score increase.

## Next
After the website, ask AD before starting anything else. Likely next: demo at
thrifti.app/demo (`docs/08_claude_code_prototype_prompt.txt`), interview guide,
NGO outreach tracker.
