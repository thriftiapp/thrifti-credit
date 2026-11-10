// The published Tally waitlist form (same form as the main site).
var TALLY_URL = "https://tally.so/r/YjRJYN";

// Payoff engine, ported from the v2 design spec section 5 (monthly compounding,
// interest before payment, 600-month cap so "never pays off" is detectable).
var CAP = 600;
function simulate(balance, apr, payment) {
  var r = apr / 100 / 12;
  if (balance <= 0) return { paid: true, on: true, months: 0, interest: 0 };
  if (payment <= balance * r) return { paid: false, on: false, months: CAP, interest: NaN };
  var bal = balance, interest = 0, months = 0;
  while (bal > 0 && months < CAP) {
    var a = bal * r;
    interest += a;
    bal = bal + a - Math.min(payment, bal + a);
    months++;
    if (bal < 0.005) bal = 0;
  }
  return { paid: bal <= 0, on: true, months: months, interest: interest };
}
function yearRows(balance, apr, payment) {
  var rows = [], bal = balance, total = 0, paidYear = null, r = apr / 100 / 12;
  for (var y = 0; y < 12; y++) {
    var yi = 0;
    for (var m = 0; m < 12; m++) {
      if (bal <= 0) break;
      var a = bal * r;
      total += a; yi += a;
      bal = bal + a - Math.min(payment, bal + a);
      if (bal < 0.005) bal = 0;
    }
    rows.push({ year: 2026 + y, balance: bal, interest: yi });
    if (bal <= 0 && paidYear === null) paidYear = 2026 + y;
  }
  return { rows: rows, paidYear: paidYear, total: total };
}
function cad(n, cents) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 }).format(n);
}
function human(m) {
  if (m >= CAP) return "50+ years";
  if (m <= 0) return "Already paid off";
  var y = Math.floor(m / 12), mo = m % 12, out = [];
  if (y) out.push(y + (y === 1 ? " year" : " years"));
  if (mo) out.push(mo + (mo === 1 ? " month" : " months"));
  return out.join(" ");
}
if (typeof module !== "undefined") module.exports = { simulate: simulate, yearRows: yearRows, human: human };

(function () {
  if (typeof document === "undefined") return;
  var $ = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var params = new URLSearchParams(window.location.search);
  var source = params.get("source") || params.get("utm_source") || "website";
  // The Tally form already has hidden "tagline" fields; reusing them records which design a sign-up saw.
  // Headline test: each visitor sees one of five headlines, kept on return visits, and it travels into the form.
  var TAGLINES = {
    A: ["", "People and AI", ", working for you"],
    B: ["Smart tools. ", "Real people.", " Fairer credit."],
    C: ["AI does the math. ", "People", " make the call."],
    D: ["Credit that looks at how you ", "actually", " manage money"],
    E: ["Built by people, powered by AI, for ", "the people", ""]
  };
  var KEYS = ["A", "B", "C", "D", "E"], v = null;
  try { v = localStorage.getItem("thrifti_v2_headline_h"); } catch (e) {}
  if (!TAGLINES[v]) {
    v = KEYS[Math.floor(Math.random() * KEYS.length)];
    try { localStorage.setItem("thrifti_v2_headline_h", v); } catch (e) {}
  }
  var tl = TAGLINES[v], plain = tl.join("");
  $("tagline").innerHTML = tl[0] + "<em>" + tl[1] + "</em>" + tl[2];
  $("foot-tag").textContent = plain + ".";
  var formUrl = TALLY_URL + "?source=" + encodeURIComponent(source) + "&tagline=V2H-" + v + "&tagline_text=" + encodeURIComponent(plain);
  document.querySelectorAll(".js-waitlist").forEach(function (a) { a.href = formUrl; a.rel = "noopener"; });

  var nav = $("nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });
  $("menu-btn").addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); }); });

  // Hero ticker: Equifax Q4 2025 card balances x 46% (Bank of Canada share of cardholders
  // carrying a balance, used as an assumed interest-bearing share) x 21.99%, per second.
  var PER_SEC = (131e9 * 0.46 * 0.2199) / 31556952;
  $("per-sec").textContent = cad(PER_SEC);
  var t0 = Date.now();
  setInterval(function () { $("ticker").textContent = cad((Date.now() - t0) / 1000 * PER_SEC); }, 200);

  var s = simulate(6240, 21.99, 156);
  $("stmt-interest").textContent = cad(6240 * 0.2199 / 12, true);
  $("stmt-callout").innerHTML = "Pay only the minimum and this <b>$6,240</b> balance takes <b>" + human(s.months) + "</b> to clear and costs <b class=\"ember\">" + cad(s.interest) + "</b> in interest.";

  // Rewind
  var mode = "bank", rBal = 6240, rPay = 156, FAIR = 9.4, CARD = 21.99;
  function renderRewind() {
    var apr = mode === "bank" ? CARD : FAIR;
    var yr = yearRows(rBal, apr, rPay), strip = $("strip");
    strip.innerHTML = "";
    yr.rows.forEach(function (row) {
      var done = row.balance <= 0, ratio = Math.max(0, Math.min(1, row.balance / rBal));
      var d = document.createElement("div");
      d.className = "year " + (done ? "done" : mode);
      d.innerHTML = "<span class=\"y\">" + row.year + "</span>" +
        (done ? "<strong class=\"mint\">&#10003; Debt-free</strong><small>Interest stopped</small>"
              : "<strong>" + cad(row.balance) + "</strong><small>" + cad(row.interest) + " interest</small>") +
        "<span class=\"bar\"><i style=\"width:" + (done ? 100 : ratio * 100) + "%\"></i></span>";
      strip.appendChild(d);
    });
    if (!reduce) { strip.classList.remove("pop"); void strip.offsetWidth; strip.classList.add("pop"); }
    var bank = simulate(rBal, CARD, rPay), here = simulate(rBal, apr, rPay), sum = $("summary");
    if (!here.on) {
      sum.textContent = "At " + apr + "%, this payment never clears the debt.";
    } else if (mode === "bank") {
      sum.innerHTML = "At today's 21.99%, you pay <b class=\"ember\">" + cad(here.interest) + "</b> in interest and the balance is finally gone in <b>" + (yr.paidYear || "more than 12 years") + "</b>.";
    } else {
      var saved = bank.on && bank.paid && here.paid ? " <b class=\"mint\">" + cad(bank.interest - here.interest) + "</b> would stay with you instead of going to interest." : "";
      sum.innerHTML = "Same payment at the 9.4% example rate: debt-free in <b>" + (yr.paidYear || "more than 12 years") + "</b>." + saved;
    }
    var trap = $("trap"), monthly = rBal * CARD / 1200;
    trap.hidden = rPay > monthly;
    trap.textContent = "Monthly interest is " + cad(monthly, true) + ". You would need to pay more than that every month, or the debt never shrinks.";
    $("rw-meta").textContent = cad(rBal) + " balance · " + cad(rPay) + "/month · runs on your device";
    $("rw-note").textContent = "At the card minimum, payment is about 2.5% of the balance. Payoff time here: " + human(simulate(rBal, apr, rPay).months) + ".";
  }
  document.querySelectorAll("[data-mode]").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.getAttribute("data-mode");
      document.querySelectorAll("[data-mode]").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      renderRewind();
    });
  });
  function clampNum(el, lo, hi) { var v = Math.round(Number(el.value)); if (!isFinite(v)) v = lo; return Math.max(lo, Math.min(hi, v)); }
  $("in-bal").addEventListener("input", function () { rBal = clampNum(this, 1000, 30000); renderRewind(); });
  $("in-pay").addEventListener("input", function () { rPay = clampNum(this, 25, Math.max(300, Math.min(1500, rBal))); renderRewind(); });
  $("expand").addEventListener("click", function () {
    var p = $("yours"), open = p.hidden;
    p.hidden = !open;
    this.textContent = open ? "Hide your numbers" : "Make the numbers yours";
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });
  renderRewind();

  // Dial: APR = 21.99 minus verified habit deltas. Computed at the exact APR;
  // only the display is rounded, which avoids the spec's "-$4" quirk.
  var LEN = Math.PI * 70;
  var arc = $("arc"); arc.style.strokeDasharray = LEN;
  var mk = 9.4 / 24 * Math.PI;
  $("marker").setAttribute("cx", 90 - 70 * Math.cos(mk));
  $("marker").setAttribute("cy", 90 - 70 * Math.sin(mk));
  function renderDial() {
    var apr = CARD, on = 0;
    document.querySelectorAll(".habit [role=switch]").forEach(function (sw) {
      if (sw.getAttribute("aria-checked") === "true") { apr -= Number(sw.getAttribute("data-delta")); on++; }
      sw.closest(".habit").classList.toggle("on", sw.getAttribute("aria-checked") === "true");
    });
    var color = apr >= 15 ? "#c2410c" : apr >= 11.5 ? "#f5a524" : "#1e8e5a";
    arc.style.stroke = color;
    arc.style.strokeDashoffset = LEN * (1 - Math.max(0, Math.min(1, apr / 24)));
    var n = $("apr-num"); n.textContent = apr.toFixed(1); n.parentNode.style.color = color;
    $("dial-cap").textContent = on === 0 ? "This is the card rate: one number, set by a formula you never see."
      : on < 3 ? "Every habit you verify is evidence the old score cannot read. " + on + " of 3 showing."
      : "Three habits, three receipts. A credit score alone sees none of them.";
    var a = simulate(8400, CARD, 250), b = simulate(8400, apr, 250);
    $("row-bank").textContent = human(a.months) + " · " + cad(a.interest);
    $("dial-apr").textContent = apr.toFixed(1) + "%";
    $("row-dial").textContent = human(b.months) + " · " + cad(b.interest);
    $("row-dial").className = on ? "mint" : "ember";
    var save = $("save");
    save.hidden = !(on && a.paid && b.paid);
    save.textContent = cad(a.interest - b.interest) + " less interest · " + human(a.months - b.months) + " sooner";
  }
  document.querySelectorAll(".habit [role=switch]").forEach(function (sw) {
    sw.addEventListener("click", function () {
      sw.setAttribute("aria-checked", sw.getAttribute("aria-checked") === "true" ? "false" : "true");
      renderDial();
    });
  });
  renderDial();

  // Transcript: made-up example files, typed one line at a time.
  var FILES = {
    A: [["CONNECT", "Your bank ·4821 · read-only, revocable any time", "plain"], ["READ", "24 months of transactions", "plain"],
        ["CHECK", "card minimums · 14/14 paid on time", "ok"], ["CHECK", "savings auto-deposit · $25 × 9-week streak", "ok"],
        ["CHECK", "rent · paid on the 1st, 12/12 months", "ok"], ["CHECK", "overdrafts, last 6 months · 0", "ok"],
        ["EXAMPLE", "9.4% example rate, based on the evidence above", "final-ok"], ["COMPARE", "judged on a score alone, this file could stay at a card rate like 21.99%", "hot"]],
    B: [["CONNECT", "Your bank ·9034 · read-only, revocable any time", "plain"], ["READ", "12 months of transactions", "plain"],
        ["CHECK", "card minimums · 3 missed in the last 90 days", "hot"], ["CHECK", "savings · no streak yet", "plain"],
        ["EXAMPLE", "not yet: a rebuild window, not a rejection", "final-wait"], ["RE-READ", "we look again in 60 days · no penalty for asking", "plain"]]
  };
  var file = "A", shown = 1, timer = null, log = $("log");
  function drawLog() {
    log.innerHTML = "";
    FILES[file].slice(0, shown).forEach(function (l) {
      var p = document.createElement("p");
      p.className = "line " + l[2];
      p.innerHTML = "<span class=\"tag" + (l[0] === "EXAMPLE" ? " amber" : "") + "\">" + l[0] + "</span><span>" + l[1] + "</span>";
      log.appendChild(p);
    });
    if (shown < FILES[file].length) { var c = document.createElement("span"); c.className = "caret"; log.appendChild(c); }
  }
  function play() {
    clearInterval(timer);
    if (reduce) { shown = FILES[file].length; drawLog(); return; }
    shown = 1; drawLog();
    timer = setInterval(function () { shown++; drawLog(); if (shown >= FILES[file].length) clearInterval(timer); }, 460);
  }
  document.querySelectorAll("[data-file]").forEach(function (b) {
    b.addEventListener("click", function () {
      file = b.getAttribute("data-file");
      document.querySelectorAll("[data-file]").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      play();
    });
  });
  var started = false;
  function startLog() { if (!started) { started = true; play(); } }
  drawLog();

  // Reveal on scroll, with a 2.5 s fallback so content is never left hidden.
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); if (e.target.id === "log-card") startLog(); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -60px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  setTimeout(function () { els.forEach(function (e) { e.classList.add("in"); }); startLog(); }, reduce ? 0 : 2500);
})();
