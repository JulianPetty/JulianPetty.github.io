const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".topnav");
const hamburgerIcon = toggle.querySelector("a").innerHTML; // Store initial HTML code

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = hamburgerIcon; // Restore hamburger icon
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"; // Add close icon
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
