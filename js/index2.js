const $abrir = document.querySelector(".abrir");

document.addEventListener("click", e => {
    if(e.target.matches(".iconoMenu")) {
        document.querySelector(".nav").classList.toggle("activarMenu")
        document.querySelector(".abrir").classList.toggle("desactivarse");
        document.querySelector(".cerrar").classList.toggle("desactivarse")
    } 
});

document.addEventListener("scroll", e => {
    if(window.scrollY > 0) {
        document.querySelector(".abrir").classList.remove("desactivarse");
        document.querySelector(".cerrar").classList.add("desactivarse")
        document.querySelector(".nav").classList.remove("activarMenu")
    }
})