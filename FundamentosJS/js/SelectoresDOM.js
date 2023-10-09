//Selectores del DOM

/*
    TIPOS DE SELECCION
    . - CLASE
    # - Id
    NombreEtiqueta
*/

//QuerySelector es para retornar solamente un elemento
const heading = document.querySelector("#heading");

console.log(heading);
console.log(heading.textContent);

//QuerySelectorAll retorna todas las coincidencias en lo que hemos filtrado
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

