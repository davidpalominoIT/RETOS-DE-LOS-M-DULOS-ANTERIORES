/*
Pedir al usuario que ingrese un dato, 
y al finalizar la entrada una función debe mostrar una 
alerta indicando el tipo de dato ingresado(“Numero, String o Boolean”) 
con un mensaje personalizado, para saber el tipo de dato 
usa typeof 
*/

var dato=prompt("Debe ingresar un dato")

function validar (dato){
    if(isNaN(dato)== false){
        alert("Su dato es número")
    }
let tipo_dato=typeof dato
return(" El dato que ingreso pertenece a este tipo de dato "+ tipo_dato)
}
alert(validar(dato));
