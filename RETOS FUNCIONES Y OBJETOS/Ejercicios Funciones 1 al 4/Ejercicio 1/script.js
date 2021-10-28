/*
Ejercicio 1
Crea un pequeño programa haciendo uso de funciones en 
el cual te preguntará tu nombre y te deberá responder 
con un saludo 
*/

var nombre=prompt("¿Cual es tu nombre?")
function saludo(nombre){
    var saludo= ("Te saludo ");
    return(saludo + nombre)
}
alert(saludo(nombre))