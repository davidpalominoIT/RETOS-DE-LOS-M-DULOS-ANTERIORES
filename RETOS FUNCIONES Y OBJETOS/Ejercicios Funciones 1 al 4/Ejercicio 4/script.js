/*
Crea un pequeño programa haciendo uso de funciones, el cual recibe el arreglo de números siguiente:

let números = [5,5,10,10,20,20,30];

la función debe recibir el arreglo de números y usando ciclo for sumar los números y devolver el total con un alert;

*/

let numeros = [5,5,10,10,20,20,30];

function sumarArray(arreglo){
    let suma= 0;
    for (let index = 0; index < arreglo.length; index ++){
        suma += arreglo[index];
    }
return suma;
}

console.log(sumarArray(numeros));