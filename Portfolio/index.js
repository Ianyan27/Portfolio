let navBahavior = true; // true = expanded, false = collapsed

function expandNavBar() {
    console.log("expandNavBar called");
    const nav = document.getElementById("navBar");
    nav.style.width = "225px";

    const items = document.querySelectorAll(".nav-list-items");
    items.forEach(item => {
    item.style.display = "block"; // or inline-block/flex depending on your design
    });

    navBahavior = true;
    console.log("navBahavior:", navBahavior);
}

function collapseNavBar() {
    console.log("collapseNavBar called");
    const nav = document.getElementById("navBar");
    nav.style.width = "25px";

    const items = document.querySelectorAll(".nav-list-items");
    items.forEach(item => {
    item.style.display = "none";
    });

    navBahavior = false;
    console.log("navBahavior:", navBahavior);
}

function toggleNavBar() {
    console.log("toggleNavBar called, navBahavior =", navBahavior);
    if (navBahavior) {
    collapseNavBar();
    } else {
    expandNavBar();
    }
}