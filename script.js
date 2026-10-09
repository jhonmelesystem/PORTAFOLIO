const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");
const currentYear = document.querySelector("#current-year");

if (menuToggle && navigationLinks) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
        navigationLinks.classList.toggle("is-open", !isExpanded);
    });

    navigationLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            navigationLinks.classList.remove("is-open");
        }
    });
}

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
