//Objetos - Destructuring 2 o mas obj
const Producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

const Cliente = {
    nombre: "Juan",
    premium : true
};

// const NewObj = Object.assign(Producto, Cliente); NO

const newObj2 = {
    Producto: {...Producto},
    Cliente: {...Cliente}
};

console.table(newObj2);