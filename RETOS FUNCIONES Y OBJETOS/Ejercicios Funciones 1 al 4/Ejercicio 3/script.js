/*
Haz un semáforo.
El semáforo deberá cambiar de luz de Verde a Amarilla y 
de Amarilla a Roja y 
luego de nuevo a Verde.
Crea una función que reciba el parámetro Color, 
Una vez dentro de la función al escribir los siguientes colores deberá retornar el color que sigue del semáforo.
De Rojo pasa a Verde.
De Amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.*/

function semaforo (color){
    if(color == "rojo"){
        console.log("verde");
    } else if(color == "amarillo"){
        console.log("rojo");
    } else if(color == "verde"){
        console.log("amarillo");
    }
}

console.log(semaforo("amarillo"));
console.log(semaforo("rojo"));
console.log(semaforo("verde"));