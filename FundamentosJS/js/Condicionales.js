//CONDICIONALES
const disponible = 4000;
const retirar = 200;

//Condicion Normal
const Verify = (disponible, retirar) => {
    if (disponible > retirar) {
        console.log("Si podemos retirar");
    }
    else {
        console.log("No podemos retirar");
    }
};

Verify(2000, 400);

//Comparacion y Operador Estricto
const numero1 = 20;
const numero2 = "20";

/*
    == ( Comparacion pero no es estricto, solo revisa por el valor )
    === ( Comparacion estricta, revisa tambien el tipo de Dato )
*/

if (numero1 === numero2) {
    console.log("Son Iguales");
}
else {
    console.log("No son iguales");
}

//Validacion de Booleans
const auth = true;
if (auth) {
    console.log("Si esta auth");
}


//Operadores Or o &&

/*
    || - Al menos una debe cumplir, 
    && - Deben cumplir todas las condiciones
*/

const saldo = 900;
const pagar = 500;
const tarjeta = true;

if (saldo > pagar || tarjeta) {
    console.log("Puedes pagar");
}
else {
    console.log("No puedes pagar");
}

//Condicionales Ternarios
auth ? console.log("Authenticado") : console.log("No authenticado") 

//Doble Ternario
saldo > pagar ? console.log("Puedes pagar") : 
tarjeta ? console.log("Puedes pagar tarjeta") : 
    console.log("No puedes pagar")