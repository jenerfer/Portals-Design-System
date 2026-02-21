/* ============================================================
   Sidebar Accordion — Only one category open at a time
   ============================================================ */

(function () {
  const categories = document.querySelectorAll('.sidebar-category');

  categories.forEach(function (category) {
    category.addEventListener('toggle', function () {
      if (this.open) {
        categories.forEach(function (other) {
          if (other !== category && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
})();


/* ============================================================
   Theme Toggle — Day / Night mode
   ============================================================ */

(function () {
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portals-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portals-theme', 'dark');
    }
  });
})();


/* ============================================================
   Game Card Fade-In — stagger cards in immediately on load
   ============================================================ */

(function () {
  var cards = document.querySelectorAll('.game-card');
  if (!cards.length) return;

  cards.forEach(function (card, i) {
    setTimeout(function () {
      card.classList.add('game-card--visible');
    }, i * 50);
  });

  // Fade in each image individually once loaded
  document.querySelectorAll('.game-card__thumbnail img').forEach(function (img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function () {
        img.classList.add('loaded');
      });
    }
  });
})();
