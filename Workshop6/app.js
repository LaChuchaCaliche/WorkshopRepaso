// Ejercicio 1

// var globalVariable = "Soy una variable global.";

// function testScope() {
//   // Function Scope
//   var functionVariable = "Soy una variable local.";

//   if (true) {
//     // Block Scope
//     let blockVariable = "Soy una variable de bloque.";
//     console.log("Dentro del bloque:", blockVariable);
//   }

//   console.log("Dentro de la función:", functionVariable);
// }

// console.log("Fuera de la función:", globalVariable);

// let answer1  = prompt("Puedes acceder  a la variable globalVariable desde cualquier parte del codigo (V/F)")
// if(answer1.toUpperCase() == "V"){
//     alert("Correcto!, la funcion declarada como VAR es una variable que puede ser llamada dentro de todo el codigo, ademas no esta dentro de ningun bloque")
// } 
// else if(answer1.toUpperCase() == "F"){
//     alert("Incorrecto! ,  La funcion definida con var fuera de funciones o bloques especificos es accesible ")
// }
// let answer2 = prompt("Puedes acceder a la variable functionVariable  desde cualquier parte del codigo (V/F)")
// if(answer2.toUpperCase() == "V"){
//     alert("Incorrecto!,la variable que esta declarada dentro de la funcion solo sera accesible dentro de ella")
// } 
// else if(answer2.toUpperCase() == "F"){
//     alert("Correcto! ,  La variable declarada dentro de la funcion es accesible solo dentro de ella ")}
// let answer3 = prompt("Puedes acceder a la variable BlockVariable desde cualquier parte del codigo (V/F)")
// if(answer3.toUpperCase() == "V"){
//     alert("Incorrecto! , la variable esta dentro de un block dentro de una funcion, lo cual solo le permite acceso desde punto")
// } 
// else if(answer3.toUpperCase() == "F"){
//     alert("Correcto !,por lo que su alcance está limitado al bloque en el que fue declarada (block scope).Por lo tanto, no es posible acceder a blockVariable fuera de ese bloque. ")
// }
// testScope()

// Ejercicio 2 

// alert("Cual sera el resultado de console.log('Valor de a:', a);console.log('Valor de b:', b);console.log('Valor de c:',c);var a = 1;let b = 2;const c = 3;")
// let answer1 = prompt("1. undefined , 2. a b c respectivamente 3. No se")
// if( answer1 == 1){
//     alert("Correcto ! , Las variables no estan definidas previamente")
// }
// else{alert("Incorrecto! , Las variables no estan declaradas")}
// alert("Cual sera el resultado de console.log(Resultado de funcionDeclarada:, funcionDeclarada());console.log(Resultado de funcionExpresada:, funcionExpresada());")
// let answer2 = prompt("1. La funcion declarada sera invocada, la funcion expresada dara un error 2. Undefined 3. No se")
// if(answer2 == 1){
//     alert("Correcto , la funcion declarada sera 'arrastrada' a la primera linea del codigo y asi tendra la funcion disponible, las otras no tendran esta 'funcionalidad' y solo podran ser utilizadas a partir de la linea de declaracion")
// }
// else{alert("Incorrecto,la funcion declarada sera 'arrastrada' a la primera linea del codigo y asi tendra la funcion disponible, las otras no tendran esta 'funcionalidad' y solo podran ser utilizadas a partir de la linea de declaracion ")}

// Ejercicio 3

// function crearSumador(a){
//     return(function sum(b){
//         return(a+b)
//     })
// }
// var sumarCinco = crearSumador(5)
// console.log(sumarCinco(3))

// las funciones pueden mantener estos datos por los closures, estos guardan un espacio especifico de memoria para cada función y por eso guardan y se pueden obtener información de ellos, sin embargo implica un amplio uso de la memoria

// Ejercicios 4
// La funcion declarada como función funciona igualmente por que tiene el concepto de hosting, y es que sube a la primera linea de codigo y no importa donde se llame siempre estara disponible, las demas no se pueden leer antes de ser llamados

// Ejercicio 5

// function manejarAsincronia(callback,promesa){
//     const newPromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },2000)
//     }) 

//     newPromise.then(()=>{
//         callback("Promesa cumplida y callback ejecutado")
//     })
// }
// manejarAsincronia((mensaje)=>{
//     console.log(mensaje)
// })

// Ejercicio 6
// console.log("Mensaje 1: inmediatamente")
// setTimeout(()=>{console.log("mensaje 2: con time out de 0 segundos")

// },0)

// setTimeout(()=>{console.log("mensaje 3 : con time out de 1 segundo")},1000)
// Esto sucede de esta forma, debido a que la consola opera primero con las cuestiones mas "inmediatas" y luego opera para las funciones mas estructuradas como lo es set time out en este caso.
// Ejercicio 7
// alert(`setTimeout(() => {
//     console.log("Primer setTimeout");
//   }, 0);
  
//   setTimeout(() => {
//     console.log("Segundo setTimeout");
//   }, 0);
  
//   Promise.resolve("Promesa resuelta").then(console.log);`);
// alert("Intenta adivinar el orden de ejecucion")
// menu = prompt("1. Promise, set time out 1 y 2 2. set time 1 y 2, promise 3.Promise set time out 1 y set time out 2  ")
// setTimeout(() => {
//     console.log("Primer setTimeout");
//   }, 0);
  
//   setTimeout(() => {
//     console.log("Segundo setTimeout");
//   }, 0);
  
//   Promise.resolve("Promesa resuelta").then(console.log);
// if (menu==1){
//     alert("Correcto !, las promesas siempre tienen prioridad para ser ejecutada y posterior los set time out en orden")
// }
// else if(menu == 2){
//     alert("Incorrecto !, recuerda el orden de ejecucion primero promesas y luego otras funciones")
// }
// else if(menu == 3){
//     "Casi correcto, recuerda , primero se resolvera la promesa y luego los set time outs de arriba hacia abajo"
// }
// function contador(){
//     let contador = 0;
//     const sumContador = () => {
//         contador++;
//         console.log(contador);
//     };
//     return sumContador;
// }

// let resultado = contador(); // Crear la instancia del contador fuera del bucle

// while(true){
//     let menu = prompt("1. Añadir 1 al contador, 2. Salir");
//     if (menu == 1){
//         resultado(); 
//     }
//     else if (menu == 2){
//         break;
//     }
// }
// Ejercicio 9

// let message = prompt("Ingrese el tiempo en el que desea recibir un mensaje en segundos")
// let conversion = message*1000
// let timeLapse = setTimeout(()=>{console.log("Hola usuario")},conversion)

// Ejercicio 10 Fetch
