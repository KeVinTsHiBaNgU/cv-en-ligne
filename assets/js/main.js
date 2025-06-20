function initMain() {
  /*==================== MENI SHOW Y HIDDEN ====================*/
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    
    navClose = document.getElementById('nav-close')
    
    
    // === Active nav link on scroll ===
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActive);



  window.addEventListener('scroll', scrollActive);


  /*========== MENU SHOW Y HIDDEN =============*/
  /* Validate if constant exists */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  /*==================== ACCORDION SKILLS ====================*/
  const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
    }
  }

  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
  });



  /*==================== SCROLL BUTTON ====================*/
  document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.home__scroll-button');

    if (scrollButton) {
      scrollButton.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le saut instantané

        const targetId = scrollButton.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });


  /*==================== QUALIFICATION TABS ====================*/
  const tabs = document.querySelectorAll('.qualification__button');
  const contents = document.querySelectorAll('.qualification__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Retirer tous les actifs
      tabs.forEach(t => t.classList.remove('qualification__active'));
      contents.forEach(c => c.classList.remove('qualification__active'));

      // Activer le bon contenu
      const target = document.querySelector(tab.dataset.target);
      tab.classList.add('qualification__active');
      target.classList.add('qualification__active');
    });
  });



  /*==================== CHANGE BACKGROUND HEADER ====================*/
  function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 80 wiewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);
  /*==================== SHOW SCROLL UP ====================*/
  function scrollTUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) {
      scrollUp.classList.add('show-up');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }

  window.addEventListener('scroll', scrollTUp);


  /*==================== DARK LIGHT THEME ====================*/
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })

  console.log("Main JS initialisé");
}





