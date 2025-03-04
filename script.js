document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", function () {
        let attractions = document.querySelector(".attractions");
        let position = attractions.getBoundingClientRect().top;

        if (position < window.innerHeight / 1.2) {
            attractions.classList.add("fire-effect");
        }
    });

    document.querySelector(".block").addEventListener("click", function () {
        document.querySelector("#temples").scrollIntoView({
            behavior: "smooth"
        });
    });
});
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("window-scrolled");
    } else {
        navbar.classList.remove("window-scrolled");
    }
});
