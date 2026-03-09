// Script pour FAQ interactive
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item h3");
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.nextElementSibling;
            if(answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

// Optionnel : confirmation de formulaire
const form = document.querySelector("form");
if(form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Merci ! Votre message a été envoyé. Je vous répondrai rapidement.");
        form.reset();
    });
}

// Menu sticky ou scroll effect (facultatif)
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if(window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});
