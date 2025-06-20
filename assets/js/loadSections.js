document.addEventListener('DOMContentLoaded', () => {
    const sectionsToLoad = [
        { id: 'home-section', url: '/sections/home.html' },
        { id: 'about-section', url: '/sections/about.html' },
        { id: 'skills-section', url: './sections/skills.html' },
        { id: 'qualifications-section', url: './sections/qualifications.html' },
        { id: 'qualities-section', url: './sections/qualities.html' },
        { id: 'projets-section', url: './sections/projets.html' },
        // { id: 'services-section', url: './sections/services.html' },
        // { id: 'contact-section', url: './sections/contact.html' },
    ];

    Promise.all(
        sectionsToLoad.map(({ id, url }) =>
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const container = document.getElementById(id);
                    if (container) {
                        container.innerHTML = html;
                        if (id === 'about') {
                            // On attend un peu pour s'assurer que le DOM est injecté
                            setTimeout(() => {
                                initCarousel();
                            }, 50); 
                        }
                    }
                })
        )
    ).then(() => {
        console.log('✅ Toutes les sections sont chargées');
        initMain();
        initAnimations();
        initCarousel();
        initInterestAccordion();
    }).catch(err => {
        console.error('❌ Erreur de chargement des sections :', err);
    });
});
