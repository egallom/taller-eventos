const saludar = () => alert("¡Hola, soy el div!");

window.onload = function() {
    const div = document.querySelector("#container");
    div.addEventListener("click", saludar);
};
