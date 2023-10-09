//Funciones - Function Declaration


function sumar() {
    console.log(2 + 2);
};
sumar();


//Testing Pasando un Object como parametro
function PrintCustomer(Obj) {
    const { customerName: Name, customerAge: Age } = Obj;
    console.log(Name,Age);
};

const Customer = {
    customerName: "Juan",
    customerAge: 22
};

PrintCustomer(Customer);

//Retornar valores en Funciones
function Sumar2(numero = 0, numero2 = 0) {
    return numero + numero2;
};

console.log(Sumar2(10, 22));