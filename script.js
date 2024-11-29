// Obtener el botón
const backToTopButton = document.getElementById("backToTop");

// Mostrar el botón cuando el usuario hace scroll
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // Mostrar después de 300px de desplazamiento
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Agregar la funcionalidad de scroll al botón
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

