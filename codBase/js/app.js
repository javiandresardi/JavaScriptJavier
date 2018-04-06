var operandoa;
var operandob;
var operacion;
var operandos = {
            operador: "",
            operadorAnt: "",
            numAnt: 0
  }

  var display = document.getElementById("display");
  var on = document.getElementById("on");
  var signo = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var division = document.getElementById("dividido");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var multiplicacion = document.getElementById("por");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var resta = document.getElementById("menos");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cero = document.getElementById("0");
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");
  var suma = document.getElementById("mas");

//Eventos
uno.onclick = function(){escribir(1);}
dos.onclick = function(){escribir(2);}
tres.onclick = function(){escribir(3);}
cuatro.onclick = function(){escribir(4);}
cinco.onclick = function(){escribir(5);}
seis.onclick = function(){escribir(6);}
siete.onclick = function(){escribir(7);}
ocho.onclick = function(){escribir(8);}
nueve.onclick = function(){escribir(9);}
cero.onclick = function(){escribir(0);}

function escribir(numero_a_escribir){
var display = document.getElementById("display");
ordenarDisplay();
if(display.textContent == "0"){
display.textContent = parseInt(display.textContent)+ parseInt(numero_a_escribir);
}else{
display.textContent = display.textContent + numero_a_escribir;
}
}

punto.onclick = function(){decimal("punto");}

 function decimal(n){

       var self = this
       var limite = 8

       if(display.textContent.indexOf(".") != -1){
        if (n =="."){
            n = ""
        }
        limite = 9
       }
        else {
          display.textContent = display.textContent + ".";
        }
       if (display.textContent=="0" && n != "."){
           display.textContent = ""
       }
     }

sign.onclick = function(){opuesto("sign");}

function opuesto(){
  display.textContent = -display.textContent;
}

on.onclick = function(){resetear("on");}

function resetear(){
  display.textContent = "0";
}

 suma.onclick = function(){
   operandoa = display.textContent;
   operacion = "+";
   limpiar();
 }
 resta.onclick = function(){
   operandoa = display.textContent;
   operacion = "-";
   limpiar();
 }
 multiplicacion.onclick = function(){
   operandoa = display.textContent;
   operacion = "*";
   limpiar();
 }
 division.onclick = function(){
   operandoa = display.textContent;
   operacion = "/";
   limpiar();
 }

 igual.onclick = function(){
   operandob = display.textContent;
   resolver();
 }

 function limpiar(){
   display.textContent = "";
 }

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
     res = parseFloat(operandoa) + parseFloat(operandob);
     break;
     case "-":
     res = parseFloat(operandoa) - parseFloat(operandob);
     break;
     case "*":
     res = parseFloat(operandoa) * parseFloat(operandob);
     break;
     case "/":
     res = parseFloat(operandoa) / parseFloat(operandob);
     break;
   }

  resetear();
  display.textContent = res;
}

  function ordenarDisplay(){

     var display = document.getElementById("display");
      var cadena = display.textContent
      var numero = parseFloat(cadena)
      limite = 8

      if (cadena.length > limite) {
      cadena = cadena.toString();
      cadena = cadena.substring(0,8);
      display.textContent = cadena.substring(0,8);
 }
}
