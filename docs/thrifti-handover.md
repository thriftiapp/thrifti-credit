# thrifti project handover

Prepared November 2026 for AD. Save this file in D:\\Claude\\thrifti\\docs and use Part 9 as the first message in a new Claude Code conversation.

*Generated with the support of AI. AI may have been used to collect information. Numbers are approximate and must be verified against primary sources before use with partners or funders.*

<!-- Imported 2026-11-07 from https://claude.ai/artifact/LMhvUUkUPgmMYB4ApvgCiE (markdown export, rev 1). -->

## 1. How to use this document

1. Plug in the D drive and create the folder D:\\Claude\\thrifti.
2. Export this document as Word and save it as D:\\Claude\\thrifti\\docs\\thrifti-handover.docx. Also save Thrifti\_MVP\_Practical\_Steps.docx in the same folder.
3. Create the Tally waitlist form (Part 8) and copy its link.
4. Open Claude Code in D:\\Claude (not inside your other project) and paste Part 9, with the Tally link filled in.
5. When the website is live, paste Part 10 to build the demo.

## 2. The idea in short

- The name is always written thrifti, all lowercase.
- thrifti is a research-stage idea in Canada. Nothing is launched. It is not a lender. (Incorporated, but not said publicly for now.)
- Problem: many Canadians with lower credit scores pay 20 percent or more on credit cards, even when they pay rent and bills on time. Low scores often come from one-off shocks such as job loss or medical bills, not from unwillingness to pay.
- Product idea: fair-rate debt consolidation (target 8 to 10 percent APR), and later a debt relief bank.
- Core innovation: a transparent CARE Score based on income stability, expense predictability, cash flow resilience, payment behaviour on rent and bills, and engagement.
- Model: a licensed partner (credit union or card issuer such as Collabria) holds the licence and lends. thrifti scores, refers and supports the borrower.
- Possible revenue: share of interest, referral fees, or a success fee tied to verified savings. The success fee must be tested with users before it is adopted.

## 3. Market and evidence (approximate)

### Market size, Canada

- Credit card balances reached about $124 billion in Q4 2024 (TransUnion), with about 64 percent revolving, so roughly $80 billion is collecting interest.
- Average credit card debt per borrower was about $4,681 in Q4 2024.
- Average FICO score in Canada was about 760 in 2024. Roughly 15 percent of scored Canadians fall in lower score bands, about 4 to 5 million people (estimate).
- Surveys on living paycheque to paycheque vary widely, from about 47 percent (Leger, 2024) to 85 percent (H&R Block, 2025), because definitions differ.
- Realistic first market: people with stable income and on-time rent and bills, whose scores were damaged by a shock, in Ontario and Quebec. Estimated at a few hundred thousand people. This needs validation.

### Research supporting the hypothesis (verify each before citing)

- Ganong and Noel, Why Do Borrowers Default on Mortgages? NBER Working Paper 27585. Finds only about 3 to 4 percent of underwater mortgage defaults are strategic. Most follow income or expense shocks.
- Bradley, Cutts and Liu, Strategic Mortgage Default, Urban Institute. Among strategic defaults studied, borrowers with scores of 500 to 680 had a rate of about 4 percent, versus about 32 percent for scores above 800.
- Anderson and Dokko, Liquidity Problems and Early Payment Default Among Subprime Mortgages, Federal Reserve (2011). Liquidity constraints drive early defaults.
- Adams, Einav and Levin, Liquidity Constraints and Imperfect Information in Subprime Lending, NBER Working Paper 13067. Subprime borrowers are highly cash constrained.
- Adelino, Schoar and Severino, The Role of Housing and Mortgage Markets in the Financial Crisis. Middle and higher income borrowers drove much of the 2008 default increase.
- CFPB pandemic analysis: when payment relief and stimulus improved ability to pay, 43 percent of subprime consumers moved up at least one score tier.

Caution: most of this research is from the US and on mortgages. It supports the idea, but it does not prove the CARE Score works in Canada. Only a backtest on real lender data can do that.

## 4. Pros and cons

### Pros

- Research supports the core idea that most defaults come from shocks, not unwillingness to pay.
- Partner-led lending keeps capital needs and licensing low.
- Open banking will make bank data cheaper, more reliable and more trusted.
- A strong social mission fits credit unions, impact investors and social finance programs.

### Cons and risks

- The business depends on the CARE Score predicting repayment better than credit scores. This is unproven.
- Credit union partnerships can be slow.
- A savings-based success fee may confuse or put off users.
- Larger players (Borrowell, banks, fintechs) could copy the approach once open banking is live.
- Handling financial data creates privacy and security obligations (PIPEDA) and partner due diligence.

## 5. Canadian open banking status

- The Consumer-Driven Banking Act (Bill C-15) received Royal Assent on March 27, 2026.
- Draft regulations were published in the Canada Gazette on June 27, 2026, with consultation to August 26, 2026. Final rules are targeted for late 2026 or early 2027.
- The Bank of Canada oversees the framework. Rollout will be staggered: read access first, payment (write) access later, reportedly around mid-2027 (verify).
- What it means for thrifti: use an aggregator such as Flinks until the regulated channel is live, then switch. Later, become accredited or work through an accredited provider. Do not wait for the framework to start.

## 6. Plan and costs (estimates in CAD)

| Phase | Timing | Goal | Approx. cost |
| --- | --- | --- | --- |
| 1. Validate | Weeks 1 to 6 | 20 to 30 interviews through NGOs, waitlist site, one-page synthesis | 2,000 to 5,000 |
| 2. Prototype | Months 2 to 3 | Clickable demo and rules-based CARE Score v0 on fake data | 1,000 to 3,000 |
| 3. Partner | Months 3 to 6 | Pilot LOI with a lender, lawyer review, backtest on anonymized data | 1,000 to 5,000 |
| 4. Pilot | Months 6 to 12 | 50 to 100 real users through the partner, security review, privacy assessment | 60,000 to 150,000 |
| Loan capital | Throughout | Funded by the lending partner | 0 for thrifti |

- Kill or pivot test in Phase 1: if fewer than 60 percent say consolidation at 8 to 10 percent would change their situation, the problem is likely income or emergencies, not rates.
- Pilot success test: on-time payment of 90 percent or more after 6 months.
- A lawyer is not needed for idea testing. Bring one in when you collect real financial data, sign a partner document, incorporate or take money, or use the score for real decisions.
- Real customer data must never be used in testing or pasted into Claude chats.

### Claude Code and vibe coding

- Claude can fully build the landing page, prototype, CARE Score v0 and an admin dashboard.
- Production systems with real bank data need a human engineer to review and own the code, plus a security review.
- The earlier full-bank architecture is too large for now. Build only what each phase needs.

## 7. Partners and funding

### Lending and card partners

- Collabria Financial: issues credit cards for over 98 percent of Canadian credit unions, through the National Credit Card Program. Strongest single partner target. Media contact listed publicly: Greg Feniak, CMO.
- Credit unions with a social mandate: Alterna Savings, Vancity, Meridian, DUCA, Desjardins, Affinity.
- Strongest ask: a backtest of the CARE Score on a partner's anonymized past applicant data.
- Partnership contacts are not public. Use LinkedIn or call the main line and ask for partnerships or community investment.

### NGO partners for validation

- Credit counselling agencies, financial literacy programs, newcomer services, housing organisations.
- Validation email templates were drafted. Key message: this is only an idea, it is research, the organisation receives $500 for coordinating, and nothing is sold.

### Grants and funding (verify eligibility directly)

- No Canadian program reliably pays 100 percent of costs. Most require an incorporated business.
- NRC IRAP: contributions to R&D, mainly staff costs. Call an advisor after incorporating.
- SR&ED: refundable credit of 15 to 35 percent for private companies on eligible spending up to $6 million. Budget 2026 widens it to testing, technical validation, regulatory studies and IP costs.
- Investment Readiness Program: closest to full funding for social enterprises, up to about $100,000 through delivery partners. Next intake date unclear.
- Mitacs: co-funded interns. Ontario options: Starter Company Plus, Ontario Centre of Innovation, Ontario Innovation Tax Credit. Montreal option: PME MTL.
- Budget 2026 (tabled November 5, 2026) also announced the Canada Growth Incentive and a BDC and EDC merger. Neither changes the plan now.
- Recommendation: self-fund Phases 1 and 2. Choose Ontario or Quebec based on where the first lending and NGO partners are.

## 8. Setup checklist

- Domain thrifti.app: owned. Keep DNS at the current registrar.
- Email contact@thrifti.app: working on Zoho free plan. Never change or delete MX, SPF, DKIM or Zoho verification records.
- Hosting: GitHub Pages, free. Website repository must be public. Business files go in a separate private repository.
- Tally waitlist form at tally.so, titled thrifti waitlist. Fields: first name (required), email (required), province or territory dropdown (required), checkbox for paid 30-minute interview (optional), consent checkbox unticked by default (required). Notifications to contact@thrifti.app. Test once, then delete the test entry.
- Optional second Tally form: thrifti demo feedback, with 4 questions on understanding, trust, willingness to connect a bank, and confusion.
- Remote Control only works while the computer is on, Claude Code is running and the D drive is plugged in. The private GitHub repository is the copy for when you are away.

## 9. Claude Code kickoff message

Paste everything in this part as the first message in a new Claude Code conversation opened in D:\\Claude. Replace \[PASTE TALLY LINK\] first.

PROJECT KICKOFF: thrifti

Read this whole message before doing anything. Confirm your plan in a short list and wait for my OK before creating files or repositories.

WORKING RULES

- Call me AD. Plain, natural language. No em dashes. No contractions.
- Be blunt and fact based. Keep replies short. No flattery.
- If unsure, say so. Never invent sources, numbers, APIs or commands.
- If something is unclear, ask one question before acting.
- Documents for others must include: "Generated with the support of AI. AI may have been used to collect information." Deliver documents as Word, not PDF.
- End each reply that produces work with one line confirming these rules were followed.

ABOUT THRIFTI

- Always written thrifti, all lowercase, everywhere. Never Thrifti.
- Research-stage idea in Canada. Not a lender. thrifti is incorporated, but do not say so publicly for now: never write "inc.", "incorporated" or "not incorporated" in public material (AD, 2026-11-09).
- Fair-rate debt consolidation (target 8 to 10 percent APR) for Canadians with lower credit scores, using a transparent CARE Score. A licensed partner lends; thrifti scores and refers.
- Open banking rules are not final yet. Use an aggregator such as Flinks later.
- Domain thrifti.app, DNS at my registrar. Email contact@thrifti.app on Zoho. Never touch MX, SPF, DKIM or Zoho verification records.
- Read D:\\Claude\\thrifti\\docs\\thrifti-handover.docx for the full plan, market data and decisions.

STORAGE Everything lives on D:. I use Remote Control often, so work must also be in GitHub.

- D:\\Claude\\thrifti is a private GitHub repository named thrifti for business files.
- CLAUDE.md: summary of this message, kept up to date.
- docs: plans and research. research: anonymized interview notes only.
- logs\\session-log.md: dated summary of every session, decisions and next steps.
- site: the website, its own public repository named thrifti-site. Add site/ to the parent .gitignore.
- Never write to C:. At the end of every session, update the log, then commit and push both repositories.
- Nothing confidential in the public repository.
- Explain, without changing anything, whether setting CLAUDE\_CONFIG\_DIR on Windows would store conversation transcripts on D:, how that affects my other project, and what happens if D is unplugged. Check current official docs.
- GitHub is already connected for another project. Do not touch it. If you cannot create repositories, tell me.

FIRST TASK: WAITLIST WEBSITE (D:\\Claude\\thrifti\\site)

- Plain HTML, CSS, a little JavaScript. No framework, no database.
- Files: index.html, privacy.html, CNAME containing thrifti.app.
- Mobile-first, accessible, calm design, deep teal accent, no stock photos.
- Title: "thrifti | fairer credit, research stage". Favicon: lowercase t.
- Form links to my Tally form: \[PASTE TALLY LINK\]. No data stored in the site.
- Deploy with GitHub Pages from main. Give me exact current DNS records to add (check, do not guess) and steps to enforce HTTPS, required for .app. Show the page locally before pushing.
- Page copy rules: grade 8 English, no em dashes, no contractions, no hype, never promise approval, a rate or a score increase.

PAGE CONTENT

- Header: thrifti logo text, link "Join the waitlist".
- Hero title: Credit that looks at how you actually manage money.
- Hero subtitle: Millions of Canadians pay 20 percent or more on credit cards, even when they pay rent and bills on time. We are exploring a fairer way to consolidate debt, based on your real financial habits, not just a credit score.
- The problem: a single bad month can lower your score for years; a lower score usually means higher interest; scores often ignore on-time rent and utilities.
- The idea: look at stable income and on-time essential payments; one consolidation option at a fair rate through a licensed lending partner; clear decisions, no hidden fees.
- Honesty box: thrifti is an idea at the research stage. We do not offer loans or credit today, and joining the waitlist is not an application.
- Help us shape it: 30-minute conversations with people in Canada carrying credit card or high-interest debt.
- FAQ: Is this a loan application? No. Will you check my credit? No, we only collect name, email and province. Who is behind thrifti? A small team with long experience in finance and financial inclusion, contact@thrifti.app.
- Footer: (c) 2026 thrifti. Research project. contact@thrifti.app. Privacy link.
- privacy.html: what we collect, why, stored in Tally, never sold, deletion requests to contact@thrifti.app, follows PIPEDA. Marked "Draft, last updated November 2026".

AFTER THE WEBSITE Ask me before starting anything else.

## 10. Prototype prompt (send after the website is live)

NEXT TASK: thrifti clickable prototype (Phase 2). Same rules as the kickoff. Confirm your plan first.

- Build in D:\\Claude\\thrifti\\site\\demo so it publishes at thrifti.app/demo. Plain HTML, CSS, JavaScript, fake data only, noindex tag.
- Banner on every screen: "Demo with fake data. thrifti does not offer loans today. Nothing here is a real offer."
- Screens: welcome; pick one of 4 personas; simulated bank connection; CARE Score from 300 to 900 with a bar and plain explanation for each part; options (offer at 600 or above, otherwise a not yet screen with 3 improvement steps and a credit counselling referral); savings illustration comparing card debt at 21.99 percent with one loan at 9 percent over 36 months, assumptions shown; feedback questions linked to \[PASTE TALLY FEEDBACK LINK\].
- CARE Score v0, rules-based: income stability 25 percent, expense predictability 25 percent, cash flow resilience 20 percent, payment behaviour 20 percent, engagement 10 percent. Each part 0 to 100, weighted, scaled to 300 to 900. Document it in docs\\care-score-v0.md in plain language and flag judgment calls.
- Personas (fictional): Maria, 41, Toronto, steady income, past medical shock, $14,000 card debt, expected approved. Jay, 29, Montreal, gig income, $8,000, expected borderline. Priya, 34, Calgary, newcomer, thin file, stable salary, $6,000, expected approved. Sam, 45, Halifax, overdrafts and missed rent, $22,000 card and payday debt, expected not yet with referral.
- If a computed score does not match the expected outcome, tell me rather than adjusting data.
- Write docs\\prototype-test-script.md. Show me locally before pushing, then update the log and push.

Note: the demo tests understanding and trust only. It does not prove the score predicts repayment.

## 11. Open questions and next steps

- Send validation emails to the first 5 NGOs.
- Create the Tally form, run the kickoff message, publish the site.
- Decide Ontario or Quebec once first partners are known.
- Test the success fee idea in interviews.
- Approach Collabria and 2 or 3 credit unions after Phase 1 evidence is ready.
