# thrifti credit app (working prototype)

Mobile web app, plain HTML, CSS and JavaScript, no framework. Sample data only, no real customer data, no live loans.

- Run locally: `node app/serve.js 4321`, then open http://localhost:4321
- `js/data.js` is the one data layer. Every screen reads from it. Swap its functions for back end calls later; screens do not change.
- `js/app.js` all 16 screens and their interactions; routes are `#welcome`, `#signup`, `#consent`, `#debt`, `#evidence`, `#habits`, `#rating`, `#whatif`, `#save`, `#review`, `#offer`, `#home`, `#tree`, `#me`, `#reviewer`.
- Rating numbers are a placeholder curve (assumption), weights private; customers see 5 parts only.
- Loan payment uses the standard amortization formula. Saving = card interest at the same monthly payment minus loan interest.
