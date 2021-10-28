/*Ejercicio 1
Crea 1 objeto con 10 propiedades diferentes, 
usa datos numéricos, 
string */

let equipo = {
marca: "Lenovo",
modelo: "S540",
costo: 3700,
procesador: "Core I7",
ram: "16 GB"
capacidad: "512GB",
pantalla: "15 pulgadas",
peso: "2KG",
duracionbateria: 14,
año: "2018",
}

/*Ejercicio 2
Utiliza el objeto y crea una función en la cual reciba ese objeto y 
que imprima la información con document.write linea por linea, 
por ejemplo:
nombre: “Carlos Lopez”
teléfono: ”2222-2222”
document.write(variable + "<br / >");
Hasta completar las 10 propiedades.*/

Mandaraimprimirinformación(equipo);
function Mandaraimprimirinformación (laptop){
    document.write("Marca:" + equipo.marca + "<br>");
    document.write("Modelo" + equipo.modelo + "<br>");
    document.write("Costo" + equipo.costo + "<br>");
    document.write("Procesador" + equipo.procesador + "<br>");
    document.write("RAM"  + equipo.ram + "<br>");
    document.write("Capacidad" + equipo. capacidad + "<br>");
    document.write("Pantalla" +equipo.pantalla + "<br>");
    document.write("Peso"  + equipo.peso + "<br>");
    document.write("Duración bateria" + equipo.duracionbateria + "<br>");
    document.write("Año" + equipo.año + "<br>");
}
