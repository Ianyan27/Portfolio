document.addEventListener("DOMContentLoaded", function () {
    const aboutCard = document.querySelector(".about-card");

    aboutCard.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        aboutCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    aboutCard.addEventListener("mouseleave", () => {
        aboutCard.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 250; // Adjust threshold before activating
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        // Special case: If the user scrolls to the bottom, activate the last section (Contact)
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            currentSection = "Contact";
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    // Smooth scrolling for navbar links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for navbar height
                    behavior: "smooth",
                });
            }
        });
    });

    updateActiveLink(); // Call once on page load to highlight the correct section
});

document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach((container, index) => {
        let carousel = container.querySelector(".carousel");
        let slides = carousel.querySelectorAll("img");
        let totalSlides = slides.length;
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        // Select buttons specific to the current carousel
        let prevButton = container.querySelector(".prev");
        let nextButton = container.querySelector(".next");

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            updateCarousel();
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
