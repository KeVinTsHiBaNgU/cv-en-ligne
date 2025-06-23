function initNews() {
    const newsCards = document.querySelectorAll(".news__card");
    const carousel = document.querySelector(".news__carousel");
    const btnPrev = document.querySelector(".news__prev");
    const btnNext = document.querySelector(".news__next");

    // ==================== ANIMATION SCROLL ====================
    const revealOnScroll = () => {
        newsCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 50) {
                card.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ==================== LIKE BUTTON ====================
    const likeButtons = document.querySelectorAll(".news__like-btn");
    likeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("liked");
            const countSpan = btn.querySelector("span");
            let count = parseInt(countSpan.innerText, 10);
            btn.classList.contains("liked") ? count++ : count--;
            countSpan.innerText = count;
        });
    });

    // ==================== DÉFILEMENT HORIZONTAL ====================
    if (carousel && btnPrev && btnNext) {
        const scrollAmount = 350;

        btnPrev.addEventListener("click", () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        btnNext.addEventListener("click", () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }

    // Agrandissement des images avec bouton de fermeture
    const images = document.querySelectorAll(".news__image");
    images.forEach((img) => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            overlay.appendChild(enlargedImg);

            // Bouton de fermeture
            const closeBtn = document.createElement("button");
            closeBtn.classList.add("image-close-btn");
            closeBtn.innerHTML = '<i class="uil uil-times"></i>';
            overlay.appendChild(closeBtn);

            document.body.appendChild(overlay);

            closeBtn.addEventListener("click", () => overlay.remove());
        });
    });

}



// Exécute une fois le DOM chargé
document.addEventListener("DOMContentLoaded", initNews);
