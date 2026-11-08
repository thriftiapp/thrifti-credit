// The published Tally waitlist form. Change it here only.
var TALLY_URL = "https://tally.so/r/YjRJYN";

(function () {
  // Carry the visitor's source (for example ?source=instagram) into the form,
  // so the waitlist shows which channel brought each sign-up.
  var params = new URLSearchParams(window.location.search);
  var source = params.get("source") || params.get("utm_source") || "website";

  // Tagline test: each visitor sees one version, kept on return visits, and the
  // version travels into the form so sign-ups can be compared per version.
  var TAGLINES = { A: "AI that works for the people", B: "AI for the people", C: "Using AI for the people", D: "AI for Canadians" };
  var KEYS = ["A", "B", "C", "D"];
  var variant = null;
  try { variant = localStorage.getItem("thrifti_tagline"); } catch (e) {}
  if (!TAGLINES[variant]) {
    variant = KEYS[Math.floor(Math.random() * KEYS.length)];
    try { localStorage.setItem("thrifti_tagline", variant); } catch (e) {}
  }
  var tags = document.querySelectorAll(".js-tagline");
  for (var t = 0; t < tags.length; t++) tags[t].textContent = TAGLINES[variant];

  var formUrl = TALLY_URL + "?source=" + encodeURIComponent(source) + "&tagline=" + variant;

  var links = document.querySelectorAll(".js-waitlist");
  for (var i = 0; i < links.length; i++) {
    links[i].href = formUrl;
    links[i].rel = "noopener";
  }

  var form = document.getElementById("calc");
  if (!form) return;

  var EXAMPLE_APR = 9;
  var MAX_MONTHS = 600;
  var money = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

  function num(id) {
    var raw = document.getElementById(id).value.replace(/[$,%\s]/g, "");
    return raw === "" ? NaN : Number(raw);
  }

  function payoff(balance, apr, payment) {
    var r = apr / 1200;
    var b = balance, interest = 0, months = 0;
    while (b > 0.005 && months < MAX_MONTHS) {
      var i = b * r;
      if (payment <= i) return null;
      interest += i;
      b = b + i - payment;
      months++;
    }
    return months >= MAX_MONTHS ? null : { months: months, interest: interest };
  }

  function duration(m) {
    var y = Math.floor(m / 12), mo = m % 12, parts = [];
    if (y) parts.push(y + (y === 1 ? " year" : " years"));
    if (mo) parts.push(mo + (mo === 1 ? " month" : " months"));
    return parts.join(" ") || "under a month";
  }

  function set(id, text) { document.getElementById(id).textContent = text; }

  function update() {
    var bal = num("bal"), apr = num("apr"), pay = num("pay");
    var err = "";
    if (!(bal > 0)) err = "Enter a card balance above $0.";
    else if (!(apr >= 0 && apr <= 100)) err = "Enter an interest rate between 0 and 100 percent.";
    else if (!(pay > 0)) err = "Enter a monthly payment above $0.";
    set("calc-error", err);
    if (err) return;

    var you = payoff(bal, apr, pay);
    var ex = payoff(bal, Math.min(apr, EXAMPLE_APR), pay);

    if (!you) {
      set("r-time", "Never");
      set("r-int", "Keeps growing");
      set("c-you", "Never");
      set("c-save", "At this payment the interest is bigger than what you pay, so the balance never goes down.");
      document.getElementById("bar-you").style.width = "100%";
    } else {
      set("r-time", duration(you.months));
      set("r-int", money.format(you.interest));
      set("c-you", money.format(you.interest));
    }
    set("c-ex", ex ? money.format(ex.interest) : "Never");

    var top = Math.max(you ? you.interest : 0, ex ? ex.interest : 0, 1);
    if (you) document.getElementById("bar-you").style.width = Math.max(4, you.interest / top * 100) + "%";
    document.getElementById("bar-ex").style.width = ex ? Math.max(4, ex.interest / top * 100) + "%" : "100%";

    if (you && ex && you.interest - ex.interest >= 1) {
      set("c-save", "At 9 percent, the same payments would cost about " + money.format(you.interest - ex.interest) + " less in interest and finish " + duration(you.months - ex.months) + " sooner.");
    } else if (you) {
      set("c-save", "");
    }
  }

  form.addEventListener("input", update);
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  update();
})();
