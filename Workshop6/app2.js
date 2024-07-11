// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error al cargar los datos:",error))
// Ejercicio 10
// setTimeout(() => {
//     console.log("Macrotarea 1 second (setTimeout)");
//   }, 1000);
  
//   setTimeout(() => {
//     console.log("Macrotarea 0 seconds (setTimeout)");
//   }, 0);
  
//   // Microtarea: Promesa
//   Promise.resolve()
//     .then(() => {
//       setTimeout(() => {
//         console.log("Macrotarea (setTimeout) inside Microtarea 1");
//         return "from micro 1";
//       }, 0);
//     })
//     .then((message) => {
//       console.log("Microtarea 2 (Promesa)");
//     });
  
//   // Microtarea: Promesa
//   Promise.resolve()
//     .then(() => {
//       console.log("Microtarea 3 (Promesa)");
//     })
//     .then(() => {
//       console.log("Microtarea 4 (Promesa)");
//     });
  
//   console.log("Fin del script");
//   las macrotareas son consideradas los set time outs luego las promesas en orden de complejidad por esto se imprimen primero las que son unicamente de console.log que es la "pseudotarea mas sencilla" y luego se resuelven las demas.
// cuando una microtarea genera una macrotarea se pone junto a las macrotareas de el event loop de las micro tareas
