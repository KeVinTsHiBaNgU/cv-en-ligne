// js/realisations.js

// Animation d'apparition au scroll pour les réalisations
function initRealisationsAnimations() {
  const cards = document.querySelectorAll('.realisation-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => {
    observer.observe(card);
  });
}

// Exécute l'animation lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', initRealisationsAnimations);
