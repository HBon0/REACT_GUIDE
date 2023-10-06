//Objetos
const Producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

console.log(Producto.nombre);

//Destructuring
const { nombre, precio, disponible } = Producto;
console.log(nombre);
console.log(precio);

//Object Literal Enhacement
const authenticado = true;
const usuario = "Juan";

const NewObject = {
    authenticado: authenticado,
    usuario: usuario
};