//Operaciones en Arreglos
const Tecnologias = ["HTML","CSS","JAVASCRIPT","REACT"];

//Aniadir Elementos del Array
//Tecnologias.unshift("GraphQL"); // - Aniade un Elemento al principio del Array
//Tecnologias.push("C#"); // - Aniade un Elemento al Final del Array. 
//A pesar de que estas operaciones funcionan en React no debemos hacer eso, si no lo siguiente. 

//const Tecnologias2 = [...Tecnologias, "GraphQL"];
//const Tecnologias2 = ["GraphQL",...Tecnologias]; // - De esta manera podemoa agregar Items al Principio o al Final de un Array

//Eliminar elementos del Array
//Tecnologias.pop(); //Elimina del Final
//Tecnologias.shift(); //Elimina del Principio
//Tecnologias.splice(2, 3); //Eliminar de una posicion en especifica

// const newArray = Tecnologias.filter( function(tech) { //Esta seria la manera correcta de Eliminar un item del arreglo
//     return tech != "HTML"
// });

//Reemplazar del Array
//Tecnologias[0] = "GraphQL"; - NO por que modifica el arreglo original

const newArray = Tecnologias.map( function(tech) {  // SI

    if (tech == "HTML") 
        return "GraphQL";
    else
        return tech;
});

console.table(Tecnologias);
console.table(newArray);