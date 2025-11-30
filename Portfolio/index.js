    let navBahavior = true;

    const nav = document.getElementById("navBar");
    const main = document.getElementById("main");
    const burger = document.getElementById("burger-container");
    const webName = document.getElementById("web-name");
    const firstListItem = document.getElementById("first-list-item");
    const burgerIcon = document.getElementById("burger-icon");

    const items = document.querySelectorAll(".nav-list-items");
    const navTexts = document.querySelectorAll(".nav-text");
    const navIcons = document.querySelectorAll(".fa-solid");

    function expandNavBar() {
        console.log("expandNavBar called");

        webName.style.display = "block";    
        burger.style.width = "75px";
        nav.style.width = "225px";
        main.style.marginLeft = "225px";
        main.style.paddingLeft = "20px";
        firstListItem.style.justifyContent = "space-between";

        items.forEach(item => {
        item.style.display = "inline";
        });

        navTexts.forEach(item => {
            item.style.display = "inline";
        })

        navIcons.forEach(item => {
            item.style.width = "35px";
        })

        burgerIcon.className = "fa-solid fa-angle-right";

        navBahavior = true;
        console.log("navBahavior:", navBahavior);
    }

    function collapseNavBar() {
        console.log("collapseNavBar called");

        webName.style.display = "none";
        burger.style.width = "20px";
        nav.style.width = "50px";
        main.style.marginLeft = "50px";    
        main.style.paddingLeft = "20px";
        firstListItem.style.justifyContent = "center";

        items.forEach(item => {
            item.style.display = "inline";
        });

        navTexts.forEach(item => {
            item.style.display = "none";
        })

        navIcons.forEach(item => {
            item.style.width = "20px";
        })

        burgerIcon.className = "fa-solid fa-bars";

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