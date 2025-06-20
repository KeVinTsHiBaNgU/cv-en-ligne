// ==== Apparition au scroll ====
const scrollRevealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  scrollRevealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==== Smooth scroll to anchors ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==== Effet d’apparition lettre par lettre (facultatif pour un seul élément) ====
const typewriterElement = document.getElementById('multilang-typewriter');
if (typewriterElement) {
  const phrases = [
    "Hi, I'm Kevin",          // English
    "Bonjour, je suis Kevin", // Français
    "Hola, soy Kevin",        // Espagnol
    "Olá, sou o Kevin",       // Portugais
    "Mbote, ngai Kevin",      // Lingala
    "你好，我是 Kevin",         // Mandarin
    "Ciao, sono Kevin"        // Italien
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      charIndex--;
      delay = 50;
    } else {
      charIndex++;
      delay = 100;
    }

    typewriterElement.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}
