// carousel.js

function initCarousel() {
  console.log("🌀 Carrousel initialisé");

  const images = document.querySelectorAll('.carousel__img');
  const dots = document.querySelectorAll('.dot');

  if (images.length === 0 || dots.length === 0) {
    console.warn("⛔ Aucun élément de carrousel trouvé.");
    return;
  }

  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(i);
    });
  });

  // Affiche le premier slide
  showSlide(currentIndex);
}

// Permet d’appeler initCarousel après le chargement dynamique de la section "about"
document.addEventListener('carousel:init', initCarousel);
