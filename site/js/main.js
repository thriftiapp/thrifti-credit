// Set this to the published Tally form link, for example "https://tally.so/r/abc123".
var TALLY_URL = "[PASTE TALLY LINK]";

(function () {
  var ready = /^https:\/\/tally\.so\//.test(TALLY_URL);
  var links = document.querySelectorAll(".js-waitlist");

  for (var i = 0; i < links.length; i++) {
    if (ready) {
      links[i].href = TALLY_URL;
      links[i].rel = "noopener";
    } else {
      links[i].addEventListener("click", showSoon);
    }
  }

  function showSoon() {
    var notes = document.querySelectorAll(".soon");
    for (var j = 0; j < notes.length; j++) notes[j].hidden = false;
  }
})();
