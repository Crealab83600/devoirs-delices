function revealSections() {

const elements = document.querySelectorAll(".section");

elements.forEach(function(element) {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 120) {
element.style.opacity = "1";
element.style.transform = "translateY(0)";
}

});

}

window.addEventListener("scroll", revealSections);
