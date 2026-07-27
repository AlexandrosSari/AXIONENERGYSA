document.addEventListener("DOMContentLoaded", () => {

    const toggleBurger = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar-options a");

    // Άνοιγμα / κλείσιμο burger
    toggleBurger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Κλείσιμο όταν πατάς link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

});


// ROOM SLIDER
document.querySelectorAll(".room-card").forEach(card => {
    const slides = card.querySelectorAll(".room-slide");
    const next = card.querySelector(".next");
    const prev = card.querySelector(".prev");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});