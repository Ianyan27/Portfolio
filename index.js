// Get all the navbar links
const navLinks = document.querySelectorAll("nav ul li a");

// Add event listener for each link to handle click
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
    });
});

// Function to update active link based on scroll position
function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + 100; // Offset for header height

    sections.forEach((section) => {
    if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
        ) {
        // Get the corresponding nav link for this section
        const activeLink = document.querySelector(
            `nav ul li a[href="#${section.id}"]`
        );

        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to the matching link
        if (activeLink) activeLink.classList.add("active");
        }
    });
}

// Call the function on page load and on scroll
window.addEventListener("scroll", updateActiveLinkOnScroll);
window.addEventListener("load", updateActiveLinkOnScroll);
