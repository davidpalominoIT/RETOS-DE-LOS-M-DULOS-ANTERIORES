/*
3.	De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y 
el número mayor. Tip: Busca en google los métodos de JavaScript 
que regresan el mayor y menor elemento de un arreglo.
*/

let numeros =[10,20,30,40,50,60]
numeros.sort(function(a,b){return a-b});
console.log(numeros);