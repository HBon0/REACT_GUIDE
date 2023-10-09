//DOM - GENERAR HTML

const Formulario = document.querySelector("#formulario");
Formulario.addEventListener("submit", e => {
    e.preventDefault();

    const alertaPrevia = document.querySelector(".alerta");
    if (alertaPrevia) 
        alertaPrevia.remove();

    const nombre = document.querySelector(".nombre").value;
    const password = document.querySelector(".password").value;
    const alerta = document.createElement("DIV");
    alerta.id = "alertError";
    alerta.classList.add("alerta");
  
    if (nombre === "" || password === "") {
        alerta.textContent = "Todos los campos son obligatorios";
        alerta.classList.add("error");
    }
    else { 
        alerta.textContent = "Todo correcto";
        alerta.classList.add("exito");
    }

    Formulario.appendChild(alerta);
});