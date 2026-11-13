const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';
pres.title = 'thrifti credit investor deck';
const IND = '4C5FD5', INK = '16182B', MUTE = '62667E', AMB = 'F5A524', AMBL = 'FFF4DF', OK = '1F9D6B', LINE = 'E6E7F0', BG = 'F4F5FA';
pres.theme = { headFontFace: 'Cambria', bodyFontFace: 'Calibri' };
const IMG = n => `${__dirname}/img/${n}.png`;

pres.defineSlideMaster({ title: 'CONTENT', background: { color: 'FFFFFF' },
  objects: [{ text: { text: 'thrifti credit  |  confidential draft, November 2026', options: { x: 0.6, y: 7.05, w: 7, h: 0.3, fontSize: 10, color: MUTE, isTextBox: true } } }],
  slideNumber: { x: 12.3, y: 7.05, w: 0.5, h: 0.3, fontSize: 10, color: MUTE } });
pres.defineSlideMaster({ title: 'DARK', background: { color: IND } });

function title(s, t, sub) {
  s.addText(t, { x: 0.6, y: 0.4, w: 12.1, h: 0.9, fontFace: 'Cambria', fontSize: 30, bold: true, color: INK, valign: 'top', margin: 0, isTextBox: true });
  if (sub) s.addText(sub, { x: 0.6, y: 1.3, w: 12.1, h: 0.4, fontSize: 15, color: MUTE, margin: 0, isTextBox: true });
}
function source(s, t) { s.addText('Source: ' + t, { x: 0.6, y: 6.6, w: 12.1, h: 0.4, fontSize: 10, color: MUTE, margin: 0, valign: 'bottom', isTextBox: true }); }
function stat(s, x, y, w, big, label, color = IND) {
  s.addText(big, { x, y, w, h: 0.95, fontFace: 'Cambria', fontSize: 44, bold: true, color, margin: 0, isTextBox: true });
  s.addText(label, { x, y: y + 0.95, w, h: 0.8, fontSize: 14, color: INK, margin: 0, valign: 'top', isTextBox: true });
}
function surveyTag(s, text, y = 5.75) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y, w: 12.1, h: 0.6, fill: { color: AMBL }, line: { color: AMB, width: 1 }, rectRadius: 0.1 });
  s.addText([{ text: 'OUR SURVEY WILL ADD  ', options: { bold: true, color: '9A6400', charSpacing: 1 } }, { text, options: { color: INK } }],
    { x: 0.8, y, w: 11.8, h: 0.6, fontSize: 13, valign: 'middle', margin: 0, isTextBox: true });
}
function phone(s, img, x, y, h) { const w = h * 1000 / 1800; s.addImage({ path: IMG(img), x, y, w, h, rounding: false, shadow: { type: 'outer', color: '000000', opacity: 0.25, blur: 12, offset: 4, angle: 90 } }); return w; }

// 1 Title
let s = pres.addSlide({ masterName: 'DARK' });
s.addText('thrifti credit', { x: 0.8, y: 1.6, w: 7, h: 0.6, fontSize: 22, color: 'FFFFFF', bold: true, isTextBox: true, margin: 0 });
s.addText('Your reliability should lower your rate', { x: 0.8, y: 2.3, w: 7.2, h: 2, fontFace: 'Cambria', fontSize: 44, bold: true, color: 'FFFFFF', valign: 'top', isTextBox: true, margin: 0 });
s.addText('A credit rating built on rent and bills, and a partner-funded loan that pays off expensive cards', { x: 0.8, y: 4.4, w: 6.8, h: 1, fontSize: 18, color: 'E6E9FF', isTextBox: true, margin: 0 });
s.addText('Investor discussion draft  |  November 2026', { x: 0.8, y: 6.4, w: 7, h: 0.4, fontSize: 12, color: 'C9CEFA', isTextBox: true, margin: 0 });
phone(s, 'home', 9.0, 0.6, 6.3);

// 2 What is in it for you
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'For investors: a low-cost way into a large, underserved credit market');
[['A market that is under stress', '1.45 million Canadians missed a credit payment in one quarter.'],
 ['A wedge with a clear saving', 'Moving card debt to a lower-rate loan saves the customer real money, which drives sign-ups.'],
 ['Capital-light by design', 'A partner credit union funds the loans. thrifti owns the customer and the rating.'],
 ['Built already', 'A working app prototype exists today, made in one week.']].forEach(([h, t], i) => {
  const x = 0.6 + (i % 2) * 6.15, y = 1.6 + Math.floor(i / 2) * 2.4;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 5.95, h: 2.15, fill: { color: BG }, line: { color: LINE }, rectRadius: 0.12 });
  s.addShape(pres.shapes.OVAL, { x: x + 0.3, y: y + 0.3, w: 0.5, h: 0.5, fill: { color: IND } });
  s.addText(String(i + 1), { x: x + 0.3, y: y + 0.3, w: 0.5, h: 0.5, fontSize: 16, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
  s.addText(h, { x: x + 1.0, y: y + 0.3, w: 4.7, h: 0.5, fontSize: 18, bold: true, color: INK, valign: 'middle', margin: 0, isTextBox: true });
  s.addText(t, { x: x + 1.0, y: y + 0.9, w: 4.7, h: 1.1, fontSize: 15, color: INK, valign: 'top', margin: 0, isTextBox: true });
});
source(s, 'Equifax Canada Market Pulse, Q3 2025 (released 26 November 2025).');

// 3 Problem
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Canadians are falling behind on credit, and the strain is growing', 'Public figures today; our survey adds the borrower view');
stat(s, 0.6, 1.9, 3.8, '1.45M', 'consumers missed a credit payment in Q3 2025, about 46,000 more than in Q2');
stat(s, 4.75, 1.9, 3.8, '$2.62T', 'total consumer debt, up 3.4% year over year');
stat(s, 8.9, 1.9, 3.8, '1.63%', 'of non-mortgage balances 90+ days late, up 14% year over year', 'C0392B');
s.addText('Stress is sharpest for people aged 26 to 35: their 90+ day rate was 2.45%, up 20.5% in a year.', { x: 0.6, y: 4.3, w: 12.1, h: 0.6, fontSize: 16, color: INK, margin: 0, isTextBox: true });
surveyTag(s, 'how many people in our audience had their credit fall during the affordability crisis, and why.');
source(s, 'Equifax Canada Market Pulse, Q3 2025, equifax.ca newsroom.');

// 4 Cost of card debt
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Card debt costs about 20% a year, roughly double a good personal loan');
s.addChart(pres.charts.BAR, [{ name: 'Rate', labels: ['Card rates 2019 (high)', 'Card rates 2024 (high)', 'Sample thrifti loan'], values: [19.35, 20.74, 10.5] }], {
  x: 0.6, y: 1.5, w: 7.2, h: 4.4, barDir: 'bar', chartColors: [MUTE, 'C0392B', IND], showValue: true, dataLabelFormatCode: '0.00"%"', dataLabelPosition: 'outEnd',
  dataLabelColor: INK, dataLabelFontSize: 14, catAxisLabelColor: INK, catAxisLabelFontSize: 13, valAxisHidden: true, valGridLine: { style: 'none' }, catGridLine: { style: 'none' }, showLegend: false,
  showTitle: true, title: 'Annual interest rate', titleFontSize: 14, titleColor: INK, valAxisMinVal: 0, valAxisMaxVal: 25 });
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.2, y: 1.6, w: 4.5, h: 3.9, fill: { color: 'E3F6EE' }, line: { color: 'E3F6EE' }, rectRadius: 0.12 });
s.addText([{ text: 'On $6,000 of card debt', options: { fontSize: 15, color: INK, breakLine: true } },
  { text: '$195', options: { fontFace: 'Cambria', fontSize: 40, bold: true, color: OK, breakLine: true } },
  { text: 'a month over 3 years at 10.50%', options: { fontSize: 15, color: INK, breakLine: true } },
  { text: ' ', options: { fontSize: 10, breakLine: true } },
  { text: 'About $1,890 less interest than the same payment on a 21.99% card', options: { fontSize: 15, bold: true, color: OK } }],
  { x: 8.5, y: 1.8, w: 3.9, h: 3.5, valign: 'top', margin: 0, isTextBox: true });
surveyTag(s, 'how much card debt our audience carries and what rate they pay today.', 6.0);
source(s, 'Bank of Canada data cited by FCAC (INDU committee, 25 Nov 2024): card rates 18.86% to 19.35% in 2019, 20.28% to 20.74% in 2024. Loan figures: thrifti sample, standard amortization.');

// 5 Insight
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Bureau scores miss how people actually pay; cash-flow data fills the gap');
[['Cash-flow data predicts repayment', 'FinRegLab found cash-flow measures generally performed as well as traditional credit scores, and often improved risk prediction.'],
 ['Biggest gains for thin or low-score files', 'In its 2025 study of 38,000+ loans, gains were largest for low-score borrowers: AUC up 0.015, and 0.023 for the youngest files.'],
 ['Best used alongside the bureau', 'Models that combined cash-flow and credit data performed best, so thrifti adds to the core score rather than replacing it.']]
  .forEach(([h, t], i) => {
    const y = 1.6 + i * 1.45;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.05, w: 0.55, h: 0.55, fill: { color: IND } });
    s.addText('✓', { x: 0.6, y: y + 0.05, w: 0.55, h: 0.55, fontSize: 18, bold: true, color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0, isTextBox: true });
    s.addText(h, { x: 1.4, y, w: 6.4, h: 0.5, fontSize: 18, bold: true, color: INK, margin: 0, isTextBox: true });
    s.addText(t, { x: 1.4, y: y + 0.5, w: 6.4, h: 0.85, fontSize: 14, color: INK, valign: 'top', margin: 0, isTextBox: true });
  });
phone(s, 'rating', 9.3, 1.4, 5.1);
source(s, 'FinRegLab, The Use of Cash-Flow Data in Underwriting Credit (2019); Sharpening the Focus (June 2025); Advancing the Credit Ecosystem (July 2025). US data.');

// 6 People repay
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Lenders that serve thin-file Canadians report high repayment');
stat(s, 0.6, 1.8, 5.5, '95%', 'historical repayment rate reported by Windmill Microlending over 20 years, lending to newcomers', OK);
stat(s, 6.8, 1.8, 5.5, '13,500', 'clients supported by Windmill since 2005');
s.addText('This is Windmill\'s own reported figure, not an audited one, and it covers a different product. It shows that thin files are not the same as high risk. thrifti\'s own repayment data will come from the partner pilot.', { x: 0.6, y: 4.0, w: 12.1, h: 1.0, fontSize: 15, color: INK, margin: 0, isTextBox: true });
surveyTag(s, 'how reliably our audience pays rent and bills, measured against their income.');
source(s, 'windmillmicrolending.org (help desk pages and Potential to Prosperity announcement).');

// 7 Market
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Two growing groups need a fairer rating: people under strain, and newcomers');
stat(s, 0.6, 1.8, 3.8, '1.45M', 'Canadians who missed a credit payment in one quarter (Q3 2025)');
stat(s, 4.75, 1.8, 3.8, '380,000', 'new permanent residents planned each year, 2026 to 2028, most with thin Canadian files');
stat(s, 8.9, 1.8, 3.8, '$22,321', 'average non-mortgage debt per Canadian consumer');
s.addText('Launch scope: all of Canada except Quebec. Main audience: people whose credit fell in the affordability crisis. Newcomers are a second group.', { x: 0.6, y: 4.2, w: 12.1, h: 0.8, fontSize: 15, color: INK, margin: 0, isTextBox: true });
surveyTag(s, 'the share of each group open to switching card debt to a thrifti loan.');
source(s, 'Equifax Canada Market Pulse Q3 2025; IRCC 2026 to 2028 Immigration Levels Plan (CIMM briefing, 4 Dec 2025).');

// 8 Product
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'The product: a rating people understand, a tree that grows, and a cheaper loan');
[['home', 'Care for your tree: essentials bloom, habits bear fruit'], ['rating', 'CARE rating in 5 plain parts, with reasons'], ['offer', 'Loan offer: we apply for you, a person reviews']]
  .forEach(([img, cap], i) => {
    const x = 0.9 + i * 4.15; phone(s, img, x, 1.5, 4.6);
    s.addText(cap, { x: x - 0.3, y: 6.15, w: 3.2, h: 0.6, fontSize: 13, color: INK, align: 'center', margin: 0, isTextBox: true });
  });

// 9 How it works
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'How it works: thrifti applies, a person decides, a credit union funds');
const flow = [['1', 'Customer shares', 'Credit report, cards, and optional rent, bills, CRA notice'], ['2', 'CARE rating', 'Core of 12 standard criteria plus thrifti add-ons'], ['3', 'Human review', 'AI prepares the file. A person decides. Never AI alone.'], ['4', 'Partner funds', 'Credit union pays off the cards. Customer repays thrifti loan.']];
flow.forEach(([n, h, t], i) => {
  const x = 0.6 + i * 3.1;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.9, w: 2.8, h: 3.2, fill: { color: i === 2 ? 'EEF0FD' : BG }, line: { color: LINE }, rectRadius: 0.12 });
  s.addText(n, { x: x + 0.25, y: 2.1, w: 1, h: 0.8, fontFace: 'Cambria', fontSize: 36, bold: true, color: IND, margin: 0, isTextBox: true });
  s.addText(h, { x: x + 0.25, y: 2.95, w: 2.35, h: 0.5, fontSize: 17, bold: true, color: INK, margin: 0, isTextBox: true });
  s.addText(t, { x: x + 0.25, y: 3.5, w: 2.35, h: 1.5, fontSize: 14, color: INK, valign: 'top', margin: 0, isTextBox: true });
});
s.addText('Built to the EU standard for credit scoring: a plain explanation, human review of every decision, no social media or health data.', { x: 0.6, y: 5.5, w: 12.1, h: 0.6, fontSize: 15, color: INK, margin: 0, isTextBox: true });

// 10 Why now
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Why now: open banking is becoming law, and borrowers are under pressure');
[['2026', 'Consumer-Driven Banking Act enacted (S.C. 2026, c. 3). Key sections start on a date still to be set.'], ['2025', 'Budget 2025 moved oversight of consumer-driven banking to the Bank of Canada.'], ['Today', 'thrifti works with uploaded statements now and can connect to banks directly once open banking is live.']]
  .forEach(([y, t], i) => {
    const yy = 1.7 + i * 1.5;
    s.addText(y, { x: 0.6, y: yy, w: 1.8, h: 0.8, fontFace: 'Cambria', fontSize: 30, bold: true, color: IND, margin: 0, isTextBox: true });
    s.addText(t, { x: 2.6, y: yy + 0.05, w: 10.1, h: 1.1, fontSize: 16, color: INK, valign: 'top', margin: 0, isTextBox: true });
  });
source(s, 'Justice Laws Website, Consumer-Driven Banking Act; FCAC Annual Report 2025 to 2026.');

// 11 Costs
s = pres.addSlide({ masterName: 'CONTENT' });
title(s, 'Lean to run: the technology costs about $530 a month at launch');
s.addTable([
  [{ text: 'Item', options: { bold: true, fill: { color: 'EEF0FD' } } }, { text: 'Per month (USD)', options: { bold: true, fill: { color: 'EEF0FD' }, align: 'right' } }],
  ['Cloudflare Workers (app and API)', { text: '$5', options: { align: 'right' } }],
  ['Supabase Pro (database, sign-in, files)', { text: '$25', options: { align: 'right' } }],
  ['Flinks Starter (bank links, later)', { text: '$500', options: { align: 'right' } }],
  [{ text: 'Technology floor', options: { bold: true } }, { text: '$530', options: { bold: true, align: 'right' } }]
], { x: 0.6, y: 1.6, w: 7.2, colW: [5.2, 2.0], fontSize: 15, color: INK, border: { type: 'solid', color: LINE, pt: 1 }, rowH: 0.55 });
s.addText('Bank linking can wait: customers upload statements for now, so the real launch floor is about $30 a month. The main costs are people: reviewers, legal review and a security test, which are being quoted.', { x: 8.2, y: 1.6, w: 4.5, h: 3.2, fontSize: 15, color: INK, valign: 'top', margin: 0, isTextBox: true });
source(s, 'Vendor pricing pages checked 12 November 2026: developers.cloudflare.com, supabase.com/pricing, flinks.com/pricing.');

// 12 Ask
s = pres.addSlide({ masterName: 'DARK' });
s.addText('What we are asking for', { x: 0.8, y: 0.8, w: 11, h: 0.8, fontFace: 'Cambria', fontSize: 36, bold: true, color: 'FFFFFF', margin: 0, isTextBox: true });
s.addText([{ text: 'Amount: [to be set by AD]', options: { bullet: true, breakLine: true } }, { text: 'Use: pilot with one credit union partner, legal review, security test, first reviewers', options: { bullet: true, breakLine: true } }, { text: 'Next 90 days: borrower survey, partner pilot agreement, closed test with real users', options: { bullet: true } }],
  { x: 0.8, y: 2.0, w: 7.5, h: 3, fontSize: 20, color: 'FFFFFF', paraSpaceAfter: 12, valign: 'top', margin: 0, isTextBox: true });
s.addText('contact@thrifti.app', { x: 0.8, y: 6.3, w: 6, h: 0.5, fontSize: 16, color: 'E6E9FF', margin: 0, isTextBox: true });
phone(s, 'whatif', 9.4, 0.7, 6.0);

pres.writeFile({ fileName: `${__dirname}/../17_thrifti_investor_deck.pptx` }).then(f => console.log('wrote', f));
