// ==========================
// FAQ Interactive
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.nextElementSibling;

            // Animation smooth pour ouvrir/fermer
            if(answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

            // Ajouter classe active pour style
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
    }

    // ==========================
    // Formulaire avec confirmation
    // ==========================
    const form = document.querySelector("form");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Merci ! Votre message a été envoyé. Je vous répondrai rapidement.");
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
