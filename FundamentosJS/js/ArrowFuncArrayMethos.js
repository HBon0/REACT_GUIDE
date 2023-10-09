

const Tecnologias = ["HTML","CSS","JAVASCRIPT","REACT"];
 
 const newArray = Tecnologias.filter( tech => tech != "HTML");

const newArray2 = Tecnologias.map( tech => { 

    if (tech == "HTML") 
        return "GraphQL";
    else
        return tech;
});

console.table(newArray);
console.table(newArray2);