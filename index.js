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
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
