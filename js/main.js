document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#mainNavbar .nav-link");
    const navbarCollapse = document.getElementById("mainNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                collapse.hide();
            }
        });
    });
});