// Research page: paper filtering. Buttons are real <button> elements, so
// keyboard operation is native; state is exposed via aria-pressed.
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.paper-card');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
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
    });
  });
});
