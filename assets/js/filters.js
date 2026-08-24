// Research page: paper filtering. Buttons are real <button> elements, so
// keyboard operation is native; state is exposed via aria-pressed.
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.paper-card');
  function apply(btn) {
      var tag = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        if (tag === 'all') { card.classList.remove('hidden'); return; }
        var t = card.getAttribute('data-tags');
        card.classList.toggle('hidden', !(t && t.split(',').indexOf(tag) !== -1));
      });
      // WCAG 4.1.3: announce the result to screen readers
      var status = document.getElementById('filter-status');
      if (status) {
        var shown = document.querySelectorAll('.paper-card:not(.hidden)').length;
        status.textContent = 'Showing ' + shown + ' of ' + cards.length + ' papers';
      }
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { apply(btn); });
  });
  // Deep link: research.html?filter=dc|gt|policy|methods preselects a filter
  // (home-page theme headings link here this way).
  var pre = new URLSearchParams(window.location.search).get('filter');
  if (pre) {
    var target = document.querySelector('.filter-btn[data-filter="' + pre + '"]');
    if (target) { apply(target); }
  }
});
