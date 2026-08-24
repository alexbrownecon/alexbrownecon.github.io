// Research page: paper filtering. Buttons are real <button> elements, so
// keyboard operation is native; state is exposed via aria-pressed.
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.paper-card');
  var allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  var status = document.getElementById('filter-status');
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
      // WCAG 4.1.3: announce the result to screen readers. The same line is
      // now visible (see .filter-status) — a visible live region is fine.
      if (status) {
        var shown = document.querySelectorAll('.paper-card:not(.hidden)').length;
        status.textContent = 'Showing ' + shown + ' of ' + cards.length + ' papers';
      }
  }
  // Keep the address bar in step with the visible filter, so any filtered
  // view is shareable/bookmarkable. replaceState, NOT pushState: clicking
  // through five filters should not bury the previous page under five
  // history entries. "All" drops the query string entirely (clean URL).
  function syncUrl(tag) {
    if (!window.history || !history.replaceState) { return; }
    var url = (tag === 'all')
      ? window.location.pathname
      : window.location.pathname + '?filter=' + encodeURIComponent(tag);
    history.replaceState(null, '', url + window.location.hash);
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn);
      syncUrl(btn.getAttribute('data-filter'));
    });
  });
  // Deep link: research.html?filter=dc|gt|policy|methods preselects a filter
  // (home-page theme headings link here this way). An unknown value falls
  // back to All — the markup default — rather than hiding every paper.
  var pre = new URLSearchParams(window.location.search).get('filter');
  var target = pre ? document.querySelector('.filter-btn[data-filter="' + pre + '"]') : null;
  if (target && target !== allBtn) {
    apply(target);
  } else if (status) {
    // Default state. The count line is visible, so it ships with the correct
    // text in the markup; only rewrite it if the card count has drifted,
    // which avoids a spurious live-region announcement on every page load.
    var msg = 'Showing ' + cards.length + ' of ' + cards.length + ' papers';
    if (status.textContent.trim() !== msg) { status.textContent = msg; }
  }
});
