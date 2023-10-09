//Eventos DOM - Submit
const Formulario = document.querySelector("#formulario");
Formulario.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.querySelector(".nombre").value;
    const password = document.querySelector(".password").value;

    console.log(nombre);
    console.log("Enviaste form");
});