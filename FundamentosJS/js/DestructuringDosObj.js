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


const { nombre: nombreProducto, precio, disponible } = Producto;
const { nombre: nombreCliente, premium } = Cliente;

console.table(nombreCliente, nombreProducto);