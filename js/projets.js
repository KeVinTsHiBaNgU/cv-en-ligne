document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Application Sui'Candidat",
      description: "Une application Flutter pour suivre ses candidatures (PDF, alertes, entretiens...).",
      image: "./img/projet1.jpg",
      github: "https://github.com/kevin/sui-candidat",
      demo: "#"
    },
    {
      title: "Dashboard Power BI",
      description: "Analyse dynamique des ventes mensuelles avec filtres et indicateurs clés.",
      image: "./img/projet2.jpg",
      github: "https://github.com/kevin/powerbi-dashboard",
      demo: "#"
    },
  ];

  const container = document.querySelector('.projects__container');

  if (!container) return;

  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project__card', 'reveal');
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project__img">
      <div class="project__content">
        <h3 class="project__title">${project.title}</h3>
        <p class="project__description">${project.description}</p>
        <div class="project__links">
          <a href="${project.github}" class="project__link" target="_blank"><i class="uil uil-github"></i> Code</a>
          <a href="${project.demo}" class="project__link" target="_blank"><i class="uil uil-globe"></i> Démo</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Animation à l’apparition
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 100;

      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
});
