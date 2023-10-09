const Tecnologias = ["HTML","CSS","JAVASCRIPT","REACT"];
const Numeros = [10, 20, 30];

const newArray2 = Tecnologias.map( tech => { 

    if (tech == "HTML") 
        return "GraphQL";
    else
        return tech;
});

let newArray;

//Filter
newArray = Tecnologias.filter( tech => tech != "HTML");

//Comprobar si un Elemento existe en Array
const result1 = Tecnologias.includes("REACT");

//Some - Devuele true o false si al menos uno cumple la condicion
const restul2 = Numeros.some(numero => numero > 50);

//Find - Devuelve el item que cumpla la condicion
const result3 = Numeros.find(numero => numero > 20);

//Every - Retorna true o false si todos cumplen la condicion
const result4 = Numeros.every(numero => numero > 7);

//Reduce - Acumula en el Total
const result5 = Numeros.reduce( (total, numero) => numero + total, 0 );

//Filter with Number
const result6 = Numeros.filter( numero => numero > 15);

//Foreach - Solamente nos sirve para Iterar dentro del Array
Tecnologias.forEach( (tech, index) => console.log( tech, index) );

// Map - Crea un nuevo arreglo en base al Original
const arrayMap = Tecnologias.map( tech => tech);


//Prints
console.table(Tecnologias);
console.table(Numeros);
console.log(result1);
console.log(restul2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);