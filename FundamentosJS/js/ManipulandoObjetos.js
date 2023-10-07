//Objetos - Manipulacion
const Producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

//Object.freeze(Producto); - Freeze - No deja modificarlo, no permite aniadir o eliminar
//Object.Seal(); - Seal - Permite la modificacion, pero no aniadir o eliminar


//Re-escribir un valor
Producto.nombre = "Monitor Curvo";

//Si no existe, se puede añadir otra propiedad
Producto.Imagen = "Imagen.jpg";

//Se pueden borrar atributos
delete Producto.Imagen;

console.table(Producto);