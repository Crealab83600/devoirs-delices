// ==========================
// Script.js complet pour Devoirs & Délices
// ==========================

document.addEventListener("DOMContentLoaded", function() {

    // ==========================
    // FAQ Interactive
    // ==========================
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            // Toggle la classe active
            item.parentElement.classList.toggle("active");
        });
    });

    // ==========================
    // Menu hamburger mobile
    // ==========================
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if(toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            toggle.classList.toggle("active");
        });

        // Fermer le menu lorsqu'on clique sur un lien
        document.querySelectorAll(".menu li a").forEach(link => {
            link.addEventListener("click", () => {
                if(menu.classList.contains("active")) {
                    menu.classList.remove("active");
                    toggle.classList.remove("active");
                }
            });
        });
    }

    // ==========================
    // Formulaire avec feedback moderne
    // ==========================
    const form = document.querySelector("form");
    if(form) {
        const feedback = document.createElement("p");
        feedback.style.color = "#ff3b3b";
        feedback.style.fontWeight = "600";
        feedback.style.marginTop = "10px";
        form.appendChild(feedback);

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            feedback.textContent = "Merci ! Votre message a été envoyé. Je vous répondrai rapidement.";
            form.reset();
        });
    }

});

// ==========================
// Menu sticky / scroll effect
// ==========================
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if(nav) {
        if(window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            nav.style.boxShadow = "none";
        }
    }
});
