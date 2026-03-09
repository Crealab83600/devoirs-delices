function reveal(){

let elements=document.querySelectorAll(".reveal");

elements.forEach(el=>{

let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;

if(elementTop < windowHeight - 150){
el.classList.add("visible");
}

});

}

window.addEventListener("scroll",reveal);
