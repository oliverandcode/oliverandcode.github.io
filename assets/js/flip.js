// =====================================================
//  DOG PHOTO FLIP EASTER EGG
//  Loaded only on the About page.
//  Markup lives in _layouts/about.html
// =====================================================
(function () {
  var card = document.getElementById('dog-flip');
  var inner = document.getElementById('dog-flip-inner');
  if (!card || !inner) return;

  function toggle() {
    inner.classList.toggle('is-flipped');
  }

  card.addEventListener('click', toggle);

  // Keyboard accessibility
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
}());
