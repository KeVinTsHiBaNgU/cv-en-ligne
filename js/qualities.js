function initInterestAccordion() {
  const toggles = document.querySelectorAll('.interest__toggle');

  if (!toggles.length) return;

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.parentElement;

      document.querySelectorAll('.interest__item').forEach(item => {
        if (item !== parent) item.classList.remove('active');
      });

      parent.classList.toggle('active');
    });
  });

  const scrollRevealAnimation = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', scrollRevealAnimation);
  scrollRevealAnimation(); // Lance l'animation au chargement aussi
}

document.addEventListener('DOMContentLoaded', initInterestAccordion);
