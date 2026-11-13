// One data layer for every screen. This week it returns sample data; later each
// function calls the real back end and the screens do not change.
// ASSUMPTION: every rating number below is a placeholder until the CARE model
// is refit on partner loan outcomes.
const DB = {
  user: { first: 'Maya', contact: 'maya@example.com' },
  consent: { bank: true, rent: true, bills: true, cra: true, applyForMe: false },
  cards: [{ name: 'Card 1', balance: 4200, limit: 5000, rate: 21.99 }, { name: 'Card 2', balance: 1800, limit: 2500, rate: 21.99 }],
  income: '$3,000 to $3,500', yearsAtAddress: 4,
  required: [
    { id: 'about', icon: '👤', name: 'About you', sub: 'Name, address, years there', done: true },
    { id: 'cards', icon: '💳', name: 'Your cards and loans', sub: 'Balances, limits, payments', done: true },
    { id: 'report', icon: '🧾', name: 'Your credit report', sub: 'Free from Equifax or TransUnion', done: true }
  ],
  optional: [
    { id: 'statements', icon: '🏦', name: 'Bank statements', sub: 'Last 12 months, PDF', pts: 100, done: true },
    { id: 'rent', icon: '🏠', name: 'Rent proof', sub: 'Lease and receipts', pts: 50, done: true },
    { id: 'cra', icon: '📄', name: 'CRA notice of assessment', sub: 'Verifies your income', pts: 100, done: false },
    { id: 'bills', icon: '💡', name: 'Utility and phone bills', sub: 'Last 12 months', pts: 50, done: false },
    { id: 'savings', icon: '🐷', name: 'Savings account', sub: 'Shows your saving habit', pts: 25, done: false }
  ],
  habits: [['Rent on time', '14 of 14 months'], ['Bills on time', '23 of 24'], ['Saved on payday', '9 of 12'], ['Card paid above minimum', '11 of 12']],
  hardship: false,
  review: { step: 2, reviewer: 'a person', received: '12 Nov' },
  loanRate: 10.5
};

const api = {
  get: () => DB,
  points: () => DB.optional.filter(o => o.done).reduce((a, o) => a + o.pts, 0),
  totals() {
    const b = DB.cards.reduce((a, c) => a + c.balance, 0), l = DB.cards.reduce((a, c) => a + c.limit, 0);
    return { balance: b, limit: l, use: l ? Math.round(b / l * 100) : 0 };
  },
  // ASSUMPTION: placeholder rating curve, shaped like the 5 published parts.
  rating({ use, rentMonths, cra } = {}) {
    const t = api.totals();
    use = use ?? t.use; rentMonths = rentMonths ?? 14; cra = cra ?? DB.optional.find(o => o.id === 'cra').done;
    const parts = {
      onTime: 0.9, creditUse: Math.max(0.1, Math.min(1, (100 - use) / 70)), history: 0.65, newCredit: 0.75,
      cashFlow: Math.min(1, 0.7 + rentMonths / 100 + (cra ? 0.08 : 0))
    };
    const w = { onTime: 0.3, creditUse: 0.2, history: 0.15, newCredit: 0.1, cashFlow: 0.25 };
    const score = Math.round(300 + 650 * Object.keys(w).reduce((a, k) => a + w[k] * parts[k], 0));
    return { score: Math.min(999, score), parts };
  },
  band(s) { return s >= 776 ? 'Very good' : s >= 709 ? 'Good' : s >= 642 ? 'Fair' : 'Building'; },
  level(p) { return p >= 0.8 ? 'Strong' : p >= 0.6 ? 'Good' : 'Fair'; },
  payment(principal, ratePct, months) {
    const r = ratePct / 1200;
    return r ? principal * r / (1 - Math.pow(1 + r, -months)) : principal / months;
  },
  // Interest saved: same monthly payment applied to the cards versus the loan.
  saving(months) {
    const P = api.totals().balance, pay = api.payment(P, DB.loanRate, months);
    const loanInterest = pay * months - P;
    let bal = P, cardInterest = 0, n = 0;
    const r = DB.cards[0].rate / 1200;
    while (bal > 0 && n < 600) { const i = bal * r; cardInterest += i; bal = bal + i - pay; n++; }
    return { principal: P, pay, saved: cardInterest - loanInterest };
  }
};
