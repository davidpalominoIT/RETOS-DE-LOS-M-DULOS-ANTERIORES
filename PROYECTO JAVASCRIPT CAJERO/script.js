
  /*function solicitardatos(){
        let Usuario == document.getElementById("Usuario").value;
        let password == document.getElementById ("password").value;
        if(Usuario =="Mali") && password =="helloworld"){
            alert("Bienvenida a tu Banco Favorito Mali; Tienes 3 opciones; 1) Consultar saldo, 2) Ingresar monto, 3) Retirar monto");
    }
    else if(Usuario == "Gera" && password ==  "l33t"){
        alert("Bienvenido a tu Banco Favorito Gera; Tienes 3 opciones; 1) Consultar saldo, 2) Ingresar monto, 3) Retirar monto")
    }
    else if(Usuario=="Maui" && password =="123"){
      alert("Bienvenida a tu Banco Favorito Maui; Tienes 3 opciones; 1) Consultar saldo, 2) Ingresar monto, 3) Retirar monto")
*/
var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
  ];


  var alerta= prompt("Gracias por visitarnos!!!, deseas continuar?");
  if(alerta=="si"){
      alert("Adelante!!!");
  }else if(alerta=="no"){
    alert("Nos vemos otro día!!!");
  }
/*PARA MALI*/

function saldo1(){
    alert("MALI tienes $200 ahorrados")  
;} 

function monto1(){
    prompt("MALI debes ingresar un monto en dólares ($)") && alert("MALI ahora tienes $210");
}   
function retiro1(){
    prompt("MALI, puedes retirar minimo $10 y máximo $200!!!")
}
/*PARA GERA*/
function saldo2(){
    alert("GERA tienes $290 ahorrados")
;} 
function monto2(){
    prompt("GERA debes ingresar un monto en dólares ($)") && alert("GERA ahora tienes $350");
} 

function retiro2(){
    prompt("GERA, puedes retirar minimo $10 y máximo $290!!!")
}
/*PARA MAUI*/
function saldo3(){
    alert("MAUI tienes $67 ahorrados")
;} 
function monto3(){
    prompt("MAUI debes ingresar un monto en dólares($)") && alert("MAUI ahora tienes $567");
} 
function retiro3(){
    prompt("MAUI, puedes retirar minimo $10 y máximo $67!!!")
}


/* NOTA(ME FALTA VINCULAR LOS BOTONES DE MONTO Y RETIRO)
  Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
  Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.
  */


