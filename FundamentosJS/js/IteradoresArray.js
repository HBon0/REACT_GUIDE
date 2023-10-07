//Iterando Arreglos
const Tecnologias = ["HTML","CSS","JAVASCRIPT","REACT"];

const arrayForeach =  Tecnologias.forEach( function(tech) { // Recorremos cada elemento del Array, mediante Foreach
    return tech;
});

const ArrayMap = Tecnologias.map( function(tech) { // Recorremos cada elemento del Array, mediante map.
    return tech; //  La diferencia entre Foreach y map, es que Map crea un nuevo arreglo y esto cumple con lo que se hace en React
});

console.table(arrayForeach);
console.table(ArrayMap);