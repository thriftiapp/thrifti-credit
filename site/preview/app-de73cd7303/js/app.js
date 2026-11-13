const $ = s => document.querySelector(s);
const TM = '<sup class="tm">TM</sup>';
const money = n => '$' + Math.round(n).toLocaleString('en-CA');
const state = { term: 36, use: null, rent: 14, craSim: true, accepted: false };

const btn = (t, go, ghost) => `<a class="btn${ghost ? ' ghost' : ''}" href="#${go}">${t}</a>`;
const kv = (a, b, last) => `<div class="kv"${last ? ' style="border:0"' : ''}><span class="m">${a}</span><b>${b}</b></div>`;
const card = (x, st = '') => `<div class="card"${st ? ` style="${st}"` : ''}>${x}</div>`;
const blue = 'background:var(--brand-l);border:0', amber = 'background:var(--amber-l);border:0';
const ink = t => `<div class="m" style="color:var(--ink)">${t}</div>`;
const hdr = (t, back) => `<div class="hdr"><a class="back" href="#${back}">‹ ${t}</a></div>`;
const sp = '<div style="flex:1"></div>';
const steps = a => a.map(([d, t], k) => `<div class="step"><div class="dot${d ? '' : ' wait'}">${d ? '✓' : k + 1}</div>${t}</div>`).join('');
const nav = on => `<nav class="nav">${[['home', '⌂', 'Home'], ['rating', '◎', 'Rating'], ['evidence', '＋', 'Add data'], ['save', '$', 'Loan'], ['me', '☺', 'Me']]
  .map(([r, i, l]) => `<a href="#${r}"${r === on ? ' class="on"' : ''}><i>${i}</i>${l}</a>`).join('')}</nav>`;
const fld = (id, l, v, type = 'text') => `<label class="fl" for="${id}"><span>${l}</span><input class="in" id="${id}" type="${type}" value="${v}"></label>`;
const chk = (id, t, on) => `<label class="ck" for="${id}"><input type="checkbox" id="${id}"${on ? ' checked' : ''}><i></i><span>${t}</span></label>`;
const row = (ic, t, s, right) => `<div class="rw"><div class="ri">${ic}</div><div style="flex:1;min-width:0"><b>${t}</b><div class="m">${s}</div></div>${right}</div>`;
const pill = (t, cls = '', st = '') => `<span class="pill ${cls}"${st ? ` style="${st}"` : ''}>${t}</span>`;

function tree(small) {
  const br = [['Rent', -30, 62, 190, 'f', 5, 1], ['Utilities', -150, 62, 190, 'f', 4, 0], ['Phone', -55, 48, 150, 'f', 3, 1], ['Insurance', -125, 48, 150, '', 0, 0],
    ['Streaming', -15, 38, 112, 'l', 7, 0], ['Dining out', -165, 38, 112, 'l', 6, 0], ['Shopping', -90, 36, 85, '', 0, 0]];
  const f = n => n.toFixed(0), rad = d => d * Math.PI / 180, P = [], T = [];
  const flower = (x, y) => `<g transform="translate(${f(x)} ${f(y)})">` + [0, 1.26, 2.51, 3.77, 5.03].map(a => `<circle cx="${(4.2 * Math.cos(a)).toFixed(1)}" cy="${(4.2 * Math.sin(a)).toFixed(1)}" r="3.4" fill="#f28fb0"/>`).join('') + '<circle r="2.2" fill="#F5A524"/></g>';
  for (const [n, ang, ln, y0, ty, k, fr] of br) {
    const r = rad(ang), x1 = 160 + Math.cos(r) * ln * 2, y1 = y0 + Math.sin(r) * ln * 2, on = !!ty;
    P.push(`<path d="M160 ${y0} L${f(x1)} ${f(y1)}" stroke="${on ? '#8a6a4a' : '#cfc6bb'}" stroke-width="${on ? 5 : 3}" stroke-linecap="round"${on ? '' : ' stroke-dasharray="5 5"'}/>`);
    T.push(`<text x="${f(160 + Math.cos(r) * (ln * 2 + 20))}" y="${f(y1 + Math.sin(r) * 20 + 4)}" text-anchor="middle" fill="${on ? '#6b6f86' : '#a0a4bb'}">${n}</text>`);
    for (let j = 0; j < k; j++) {
      const t = .32 + .68 * j / k, px = 160 + Math.cos(r) * ln * 2 * t, py = y0 + Math.sin(r) * ln * 2 * t, sd = j % 2 ? 1 : -1, x = px + sd * 7 * Math.sin(r), y = py - sd * 7 * Math.cos(r);
      P.push(ty === 'f' ? flower(x, y) : `<ellipse cx="${f(x)}" cy="${f(y)}" rx="7" ry="3.6" fill="${j % 3 ? '#2bb37d' : '#1f9d6b'}" transform="rotate(${f(ang + sd * 35)} ${f(x)} ${f(y)})"/>`);
    }
    if (fr) P.push(`<circle cx="${f(x1)}" cy="${f(y1)}" r="7.5" fill="#F5A524"/>`);
    if (!on) P.push(`<circle cx="${f(x1)}" cy="${f(y1)}" r="9" fill="none" stroke="#a0a4bb" stroke-width="1.5" stroke-dasharray="3 3"/><text x="${f(x1)}" y="${f(y1 + 4)}" text-anchor="middle" font-size="12" fill="#4C5FD5">+</text>`);
  }
  const roots = '<line x1="40" y1="236" x2="280" y2="236" stroke="#c9b9a6" stroke-width="1.5"/><g stroke="#a88a6a" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M160 236 C150 252 120 262 92 270"/><path d="M160 236 C170 252 200 262 228 270"/></g><path d="M160 236 C160 256 162 266 160 282" stroke="#cfc6bb" stroke-width="3" stroke-dasharray="5 5" fill="none"/><g font-size="12" fill="#8a6a4a" text-anchor="middle"><text x="78" y="286">Chequing</text><text x="242" y="286">Savings acct</text><text x="160" y="298" fill="#a0a4bb">+ Income</text></g>';
  return `<svg width="100%" viewBox="0 0 320 304" role="img" aria-label="Your trust tree"${small ? ' style="max-height:220px"' : ''}><path d="M160 236 L160 80" stroke="#8a6a4a" stroke-width="11" stroke-linecap="round"/>${P.join('')}${roots}<g font-family="Inter,sans-serif" font-size="12.5" font-weight="600">${T.join('')}</g></svg>`;
}

function gauge(score) {
  return `<div class="gauge"><div class="gtrack"><span style="flex:642"></span><span style="flex:67"></span><span style="flex:67"></span><span style="flex:224"></span></div><div class="gmark" style="left:${score / 9.99}%"></div></div><div class="glabels"><span>0</span><span>642</span><span>709</span><span>776</span><span>999</span></div>`;
}

const PARTS = [['onTime', 'Paying on time', 'Cards, loans, rent, bills'], ['creditUse', 'How much credit you use', 'All cards and lines together'], ['history', 'Account history', 'Age and mix of your accounts'], ['newCredit', 'New credit', 'Recent applications'], ['cashFlow', 'Everyday cash flow', 'Income, essentials, savings']];
const STAGES = [['Seed', 'You joined and shared the basics'], ['Sapling', '3 months of essentials on time'], ['Young tree', '12 months on time, card use under 50%'], ['Full tree', '24 months on time, card use under 30%']];
const LCOL ={ Strong: 'var(--ok)', Good: 'var(--brand)', Fair: 'var(--amber)' };

const screens = {
  welcome: () => `<div class="body" style="justify-content:center;gap:18px"><div class="logo" style="font-size:24px"><div class="badge" style="width:40px;height:40px;font-size:20px">t</div>thrifti${TM} credit</div>
    <h1 class="display">Your reliability should lower your rate.</h1><div class="m" style="font-size:15px">We look at how you pay rent and bills, not only your card balance.</div>
    ${card(steps([[1, 'Show how you pay'], [0, 'Get your CARE' + TM + ' rating'], [0, 'We apply for a lower rate for you']]))}
    ${pill('Research preview: no loans offered yet', 'p-am', 'align-self:flex-start')}${sp}${btn('Get started', 'signup')}${btn('I have an account', 'home', 1)}</div>`,

  signup: () => `${hdr('Create your account', 'welcome')}<div class="body">${fld('first', 'First name', api.get().user.first)}${fld('contact', 'Phone or email', api.get().user.contact)}${fld('pw', 'Create a password', '', 'password')}
    ${card(ink('We will send a 6 digit code to confirm it is you.'), blue)}${sp}${btn('Send code', 'consent')}<div class="note">Signing up never affects your credit.</div></div>`,

  consent: () => { const c = api.get().consent; return `${hdr('You decide what we see', 'signup')}<div class="body">
    ${card(chk('c-bank', 'Bank statements I upload', c.bank) + chk('c-rent', 'Rent records', c.rent) + chk('c-bills', 'Utility and phone bills', c.bills) + chk('c-cra', 'My CRA income document, uploaded by me', c.cra) + chk('c-apply', 'Let thrifti apply for a loan for me and share my file with the funding partner', c.applyForMe))}
    ${card('<h3>Your rights</h3>' + ink('A plain reason for every decision. A person reviews every decision. Ask for a review at any time. We never use social media or health data.'), blue)}
    <div class="m">Change or delete any time under My data.</div>${sp}${btn('I agree to the selected items', 'debt')}</div>`; },

  debt: () => { const d = api.get(); return `${hdr('What are you carrying?', 'consent')}<div class="body">
    ${d.cards.map((c, i) => card(`<h3>${c.name}</h3>${fld('bal' + i, 'Balance ($)', c.balance, 'number')}<div style="display:flex;gap:8px;margin-top:8px">${fld('lim' + i, 'Limit ($)', c.limit, 'number')}${fld('rate' + i, 'Rate (%)', c.rate, 'number')}</div>`)).join('')}
    <button class="btn ghost" id="addcard" type="button">+ Add another card</button>${fld('income', 'Monthly take-home income', d.income)}${fld('years', 'Years at current address', d.yearsAtAddress, 'number')}
    <div class="save" id="interest" style="background:var(--amber-l);color:#9a6400"></div>${sp}${btn('Next', 'evidence')}</div>`; },

  evidence: () => { const d = api.get(), done = pill('Done', 'p-ok');
    return `${hdr('Your file', 'debt')}<div class="body">
    <div class="card"><div class="row2"><h3 style="margin:0">Needed for your base rating</h3><span class="m">${d.required.filter(r => r.done).length} of ${d.required.length}</span></div>${d.required.map(r => row(r.icon, r.name, r.sub, done)).join('')}</div>
    <div class="card"><div class="row2"><h3 style="margin:0">Optional: add more, earn points</h3><b style="color:var(--brand)">${api.points()} pts</b></div>
    <div class="soon">${pill('Coming soon', 'p-am')}<span>Ways to use your points. Keep collecting.</span></div>
    <div class="m" style="margin-bottom:4px">Each one takes a few minutes and can only help your rating.</div>
    ${d.optional.map(o => row(o.icon, o.name, o.sub, o.done ? done : `<button class="pill addbtn" data-add="${o.id}" type="button">+${o.pts} pts</button>`)).join('')}
    ${d.extras.map(x => row(x.icon, x.name, x.sub, done)).join('')}
    <div class="addmore"><label class="fl" for="more"><span>Add another document</span><select class="in" id="more"><option value="">Choose a type</option>${api.extraTypes.map((t, i) => `<option value="${i}">${t.name} (+${t.pts} pts)</option>`).join('')}</select></label>
    <button class="btn ghost" id="addmore" type="button">+ Add this document</button>
    <div class="m">Add as many as you have: every card, every bank account, every bill. More records give a fuller and fairer rating.</div></div>
    <div class="soon" style="background:var(--brand-l)"><span><b>Coming with open banking:</b> once Canada's open banking rules start, you will be able to connect your bank directly instead of uploading statements, only if you choose to.</span></div></div>
    ${btn('Continue', 'habits')}<div class="note">Points show the effort you put in. They are not money and cannot be bought or sold.</div></div>${nav('evidence')}`; },

  habits: () => { const d = api.get(); return `${hdr('Here is what we found', 'evidence')}<div class="body">
    ${card(d.habits.map((h, i) => kv(h[0], h[1], i === d.habits.length - 1)).join(''))}${btn('Something wrong? Correct or explain', 'habits', 1)}
    ${card('<h3>Had a hard stretch?</h3>' + ink('Job loss or illness can be recorded as hardship. It is scored separately from missed payments. It pauses your progress, it never resets it.') + `<button class="btn ghost" id="hardship" type="button" style="margin-top:10px">${d.hardship ? 'Hardship recorded ✓' : 'Record a hardship'}</button>`, amber)}
    ${sp}${btn('Looks right', 'rating')}</div>`; },

  rating: () => { const r = api.rating();
    return `${hdr('Your CARE' + TM + ' rating', 'home')}<div class="body">
    <div class="card" style="text-align:center"><div class="big" style="color:var(--brand)">${r.score}</div><div class="m">out of 999 · ${api.band(r.score)}</div></div>
    ${card('<h3>5 parts of your rating</h3>' + partsHtml(r.parts))}
    ${card('<h3>Helped you most</h3>' + ink('Rent and bills paid on time for 14 months.') + '<h3 style="margin-top:12px">Held you back most</h3>' + ink(`Using ${api.totals().use}% of your total card limits. Below 30% would help most.`), blue)}
    ${card('<h3>Using less credit raises your rating</h3>' + ink('Paying cards down and using less of your limit moves your CARE rating up, never down. Saving money helps your rating too. You never need to borrow or spend more to grow it.'), 'background:var(--ok-l);border:0')}
    ${card('<h3>Credit checks never lower your rating</h3>' + ink('Only your payments move your CARE rating. A credit check for a phone, hydro, rent or a loan never counts against you. Paying on time helps it. Leaving a bill unpaid for 3 months or more can lower it, but a payment 1 or 2 months late does not, and we look at the reason, such as a job loss or illness.'), 'background:var(--ok-l);border:0')}
    ${btn('Try the what-if simulator', 'whatif', 1)}${btn('See what it could save', 'save')}
    <div class="note">Each part counts your accounts together: 10 cards are one total, not 10 scores. A person reviews every decision.</div></div>${nav('rating')}`; },

  whatif: () => { const t = api.totals(); if (state.use === null) state.use = t.use;
    return `${hdr('What if...', 'rating')}<div class="body">
    <div class="card"><label class="sl" for="s-use"><div class="row2"><span>Card use (lower is better)</span><b id="v-use">${state.use}%</b></div><input type="range" id="s-use" min="0" max="100" value="${state.use}"><div class="m" style="font-size:13.5px">Now ${t.use}%</div></label>
    <label class="sl" for="s-rent"><div class="row2"><span>Months of rent on time</span><b id="v-rent">${state.rent}</b></div><input type="range" id="s-rent" min="0" max="36" value="${state.rent}"><div class="m" style="font-size:13.5px">Now 14</div></label>
    ${chk('s-cra', 'Add my CRA income document', state.craSim)}</div>
    <div class="card hero" style="display:flex;justify-content:space-around;text-align:center"><div><div class="s">Now</div><div class="big" style="font-size:32px">${api.rating().score}</div></div><div style="font-size:24px;align-self:center">→</div><div><div class="s">Could be</div><div class="big" style="font-size:32px" id="v-new"></div></div></div>
    <div class="m">An estimate only. Real changes show at your next monthly update.</div>${sp}${btn('Back to my rating', 'rating', 1)}</div>${nav('rating')}`; },

  save: () => `${hdr('What it could save', 'rating')}<div class="body">${pill('Indicative, not an offer', 'p-am', 'align-self:flex-start')}
    ${card(kv('Your card rate now', api.get().cards[0].rate + '%') + kv('Typical rate for your rating', '9% to 12%', 1))}
    ${card('<h3>Pay it off in</h3><div class="terms">' + [24, 36, 48].map(m => `<button type="button" class="pill term${state.term === m ? ' sel' : ''}" data-term="${m}">${m / 12} years</button>`).join('') + '</div>')}
    <div class="save" id="saving"></div>${sp}${btn('Apply through thrifti', 'review')}<div class="note">Applying never lowers your CARE rating.</div></div>${nav('save')}`,

  review: () => { const s = api.get().review.step;
    return `${hdr('A person checks your file', 'save')}<div class="body">${card(steps([[s >= 1, 'Received, ' + api.get().review.received], [s >= 2, 'In review with ' + api.get().review.reviewer], [s >= 3, s >= 3 ? 'Decided: approved' : 'Decision, usually within 2 days']]))}
    ${card(ink('AI prepares your file. A person decides. Never AI alone.'), blue)}${btn('Read the decision log', 'review', 1)}${btn('Disagree? Request a review', 'review', 1)}${btn('Book a 15 minute call', 'review', 1)}
    ${s >= 3 ? btn('See your offer', 'offer') : '<button class="btn" id="demo-decide" type="button">Demo: reviewer approves</button>'}${sp}</div>${nav('save')}`; },

  offer: () => { const o = api.saving(state.term);
    return `${hdr('Your thrifti loan', 'review')}<div class="body"><div class="card hero">${pill(state.accepted ? 'Accepted' : 'Approved after review', 'p-b')}<div class="s" style="margin-top:10px">thrifti${TM} credit loan</div><div class="big">${money(o.principal)}</div><div class="s" style="margin-top:6px">to pay off ${api.get().cards.length} cards</div></div>
    ${card(kv('Your card rate now', api.get().cards[0].rate + '%') + kv('thrifti loan rate', `<span style="color:var(--brand)">${api.get().loanRate.toFixed(2)}%</span>`) + kv('Term', state.term / 12 + ' years') + kv('Monthly payment', money(o.pay), 1))}
    <div class="save">You save about ${money(o.saved)} in interest compared with paying the same amount on your cards</div>
    ${card('<h3>Rate step-downs</h3><div class="m">Pay on time for 12 months and your rate drops by 0.50%. A recorded hardship pauses the count, it never resets it.</div><div style="margin-top:10px" class="bar"><i style="width:0%"></i></div><div class="m" style="margin-top:6px">0 of 12 on-time payments</div>')}
    ${state.accepted ? card(`<h3>${api.get().cards.length} cards will be paid off</h3>` + ink('We are sending the funds straight to your cards. You do not need to call anyone. Your tree grows its first fruit when the first card reaches $0. Close the card if you can, to keep it at $0.'), 'background:var(--ok-l);border:0') : '<button class="btn" id="accept" type="button">Accept and pay off my cards</button>'}
    <a class="btn ghost" href="https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-help.html" target="_blank" rel="noopener">Not ready? Free debt help</a><div class="note">Funded by <b>[partner credit union]</b></div></div>${nav('save')}`; },

  home: () => { const r = api.rating();
    return `<div class="hdr"><div class="logo"><div class="badge">t</div>thrifti${TM}</div><a class="m" href="#me" style="font-weight:600">${api.get().user.first}</a></div><div class="body">
    <a class="club" href="#tree"><div class="cbadge">t</div><div style="flex:1;min-width:0"><div class="clabel">thrifti club member</div><b>${api.get().user.first} · Sapling</b><div class="csub">Member since Nov 2026 · next stage: Young tree</div></div><span aria-hidden="true">›</span></a>
    <a class="card hero" href="#rating" style="display:block"><div class="row2"><div><div class="s">Your CARE${TM} rating</div><div class="big">${r.score}</div></div>${pill(api.band(r.score), 'p-b')}</div>${gauge(r.score)}<div class="s" style="margin-top:6px">Rent on time 14 months in a row.</div></a>
    <a class="card" href="#tree" style="display:block"><div class="row2"><h3 style="margin:0">Care${TM} for your tree</h3>${pill('Sapling', 'p-ok')}</div>${tree(1)}
    <div class="legend"><span><i style="background:#f28fb0"></i>Essentials</span><span><i style="background:#2bb37d"></i>Everyday</span><span><i style="background:#F5A524"></i>Rewards</span><span><i style="background:#a88a6a;border-radius:2px"></i>Roots</span></div></a>
    <a class="card" href="#save" style="display:block"><div class="row2"><h3 style="margin:0">Your cards this month</h3><b style="color:#c0392b">${money(api.monthlyCardInterest())} interest</b></div>
    <div class="row2" style="margin-top:10px;font-size:15px"><span>Card use</span><b>${api.totals().use}% · goal under 30%</b></div><div class="goal"><i style="width:${Math.min(100, api.totals().use)}%"></i><span style="left:30%"></span></div>
    <div class="m" style="margin-top:6px">Paying cards down grows fruit on your tree.</div></a>
    <div class="card"><h3>Coming up</h3>${api.get().reminders.map(([d, t]) => `<div class="kv"><span class="m">${d}</span><b>${t}</b></div>`).join('').replace(/<div class="kv">(?![\s\S]*<div class="kv">)/, '<div class="kv" style="border:0">')}</div></div>${nav('home')}`; },

  tree: () => `${hdr('Care' + TM + ' for your tree', 'home')}<div class="body">${card(tree())}
    ${card('<h3>Your stage in the club</h3>' + STAGES.map(([n, t], i) => `<div class="stage${i === 1 ? ' now' : ''}"><span class="sdot">${i < 1 ? '✓' : i + 1}</span><div><b>${n}${i === 1 ? ' · you are here' : ''}</b><div class="m">${t}</div></div></div>`).join('') + '<div class="note" style="border:0;text-align:left">Open to everyone. No score needed. Stages are earned by habits, never bought.</div>')}
    ${card(kv('Roots: accounts linked', '2 of 3') + kv('Flowers: essentials on time', '12') + kv('Leaves: everyday within means', '13') + kv('Fruit: 12-month habits', '2', 1))}
    ${card('<h3>How your tree grows</h3>' + ink('<b>Roots</b> are the accounts you add. <b>Flowers</b> bloom on essentials paid on time. <b>Leaves</b> grow on everyday spending kept within your means. <b>Fruit</b> ripens after 12 on-time months. A hard month is <b>winter</b>: growth pauses, nothing is cut down.'), blue)}</div>${nav('home')}`,

  me: () => `${hdr('My data', 'home')}<div class="body"><div class="card">${row('⬇', 'Download everything', 'A copy of all we hold', '')}${row('✎', 'Change what I share', 'Turn sources on or off', '<a class="pill p-ok" href="#consent">Open</a>')}${row('✕', 'Delete my account and data', 'This cannot be undone', '')}</div>
    ${card('<h3>Settings</h3>' + kv('Notifications', 'On') + `<div class="kv"><span class="m">Appearance</span><button type="button" class="pill" id="theme" style="background:var(--brand-l);color:var(--brand)">Switch light or dark</button></div>` + kv('Language', 'English', 1))}
    ${btn('Staff: reviewer screen', 'reviewer', 1)}${btn('Start again from Welcome', 'welcome', 1)}</div>${nav('me')}`,

  reviewer: () => { const r = api.rating();
    return `<div class="hdr"><a class="back" href="#me">‹ File #1042 · ${api.get().user.first}</a>${pill(api.get().review.step >= 3 ? 'Decided' : 'Needs decision', 'p-am')}</div><div class="body">
    ${card(kv('AI suggestion', 'Approve, ' + api.get().loanRate.toFixed(2) + '%') + kv('CARE rating', r.score) + kv('Loan asked', money(api.totals().balance) + ', 3 years', 1))}
    ${card('<h3>AI reasons, line by line</h3>' + ink(`Rent 14 of 14 on time. Card use ${api.totals().use}%, high. Income ${api.get().optional.find(o => o.id === 'cra').done ? 'verified by CRA document' : 'not yet verified'}.`))}
    ${card(row('📄', 'Evidence', 'Statements, rent, bills, CRA', ''))}
    <label class="fl" for="note"><span>Reviewer note (required)</span><textarea class="in" id="note" rows="3" placeholder="Why you decided this way"></textarea></label><div class="m" id="note-err" hidden style="color:#c0392b">Write a note before you decide.</div>
    ${sp}<button class="btn" id="approve" type="button">Approve</button><button class="btn ghost" id="decline" type="button">Decline with reason</button><button class="btn ghost" type="button">Ask the customer a question</button></div>`; }
};

function partsHtml(parts) {
  return PARTS.map(([k, n, s]) => { const l = api.level(parts[k]);
    return `<div class="part"><div class="row2"><b>${n}</b><span style="color:${LCOL[l]};font-weight:700">${l}</span></div><div class="m" style="font-size:13.5px">${s}</div><div class="bar" style="margin-top:6px;height:8px"><i style="width:${Math.round(parts[k] * 100)}%;background:${LCOL[l]}"></i></div></div>`; }).join('');
}

function wire(name) {
  const d = api.get();
  if (name === 'debt') {
    const upd = () => {
      d.cards.forEach((c, i) => { c.balance = +$('#bal' + i).value || 0; c.limit = +$('#lim' + i).value || 0; c.rate = +$('#rate' + i).value || 0; });
      const yearly = d.cards.reduce((a, c) => a + c.balance * c.rate / 100, 0);
      $('#interest').textContent = `You pay about ${money(yearly)} a year in card interest`;
    };
    document.querySelectorAll('#app input').forEach(i => i.addEventListener('input', upd)); upd();
    $('#addcard').onclick = () => { d.cards.push({ name: 'Card ' + (d.cards.length + 1), balance: 0, limit: 0, rate: 19.99 }); render(); };
  }
  if (name === 'consent') document.querySelectorAll('#app input[type=checkbox]').forEach(i => i.onchange = () => {
    const m = { 'c-bank': 'bank', 'c-rent': 'rent', 'c-bills': 'bills', 'c-cra': 'cra', 'c-apply': 'applyForMe' }; d.consent[m[i.id]] = i.checked; });
  if (name === 'evidence') {
    document.querySelectorAll('[data-add]').forEach(b => b.onclick = () => { d.optional.find(o => o.id === b.dataset.add).done = true; render(); });
    $('#addmore').onclick = () => { const v = $('#more').value; if (v === '') { $('#more').focus(); return; } d.extras.push({ ...api.extraTypes[+v] }); render(); };
  }
  if (name === 'habits') $('#hardship').onclick = () => { d.hardship = !d.hardship; render(); };
  if (name === 'whatif') {
    const upd = () => {
      state.use = +$('#s-use').value; state.rent = +$('#s-rent').value; state.craSim = $('#s-cra').checked;
      $('#v-use').textContent = state.use + '%'; $('#v-rent').textContent = state.rent;
      $('#v-new').textContent = api.rating({ use: state.use, rentMonths: state.rent, cra: state.craSim }).score;
    };
    ['#s-use', '#s-rent', '#s-cra'].forEach(s => $(s).addEventListener('input', upd)); upd();
  }
  if (name === 'save') {
    const upd = () => { const o = api.saving(state.term); $('#saving').textContent = `You could save about ${money(o.saved)} in interest, paying ${money(o.pay)} a month, compared with the same payment on your cards`; };
    document.querySelectorAll('[data-term]').forEach(b => b.onclick = () => { state.term = +b.dataset.term; render(); }); upd();
  }
  if (name === 'review' && $('#demo-decide')) $('#demo-decide').onclick = () => { d.review.step = 3; render(); };
  if (name === 'offer' && $('#accept')) $('#accept').onclick = () => { state.accepted = true; render(); };
  if (name === 'me') $('#theme').onclick = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark'; };
  if (name === 'reviewer') {
    const decide = () => { if (!$('#note').value.trim()) { $('#note-err').hidden = false; return; } d.review.step = 3; location.hash = 'review'; };
    $('#approve').onclick = decide; $('#decline').onclick = decide;
  }
}

function render() {
  const name = screens[location.hash.slice(1)] ? location.hash.slice(1) : 'welcome';
  $('#app').innerHTML = '<div class="status"><span>thrifti credit</span><span>Sample data</span></div>' + screens[name]();
  wire(name); window.scrollTo(0, 0);
}
addEventListener('hashchange', render);
render();
