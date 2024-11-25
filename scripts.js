document.addEventListener("DOMContentLoaded", function() {
    const menuLink = document.querySelector('a[href="#menu"]');
    const homeLink = document.querySelector('a[href="#home"]');
    const menuSection = document.getElementById("menu");
    const homeSection = document.getElementById("home");

    menuLink.addEventListener("click", function(event) {
        event.preventDefault();
        homeSection.style.display = "none";
        menuSection.style.display = "block";
        menuSection.scrollIntoView({ behavior: "smooth" });
    });

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        menuSection.style.display = "none";
        homeSection.style.display = "block";
        homeSection.scrollIntoView({ behavior: "smooth" });
    });
});
