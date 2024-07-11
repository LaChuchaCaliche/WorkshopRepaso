
let reservas = []
function reservarHabitacion(array1,array2){
  let reservacion = parseInt(prompt("Capacidad de reserva(numero de personas)"))
  let fecha = prompt("Ingrese una fecha en formato dd-mm-aaaa")
  let habitacion =  array1.find((room)=>array1.id == reservacion )
  let tipo = array2.find((room)=>array2.id =="1")
  if (!habitacion) {
    console.log('No hay habitaciones disponibles para esa capacidad.');
    return;
  }
  habitacion.availability = false
  reservas.push({"tipoHabitacionId":habitacion.id,"nombre":tipo.name,"date":fecha})
  console.log(`Tu reserva es ${habitacion.number} es una habitacion tipo ${tipo.name} `)
  console.log(reservas)
  let roomIndex = rooms.indexOf(habitacion);
  if (roomIndex !== -1) {
    array1.splice(roomIndex, 1);
  }
  
}

function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch("./data.JSON")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.roomTypes)
          console.log(data.rooms)
          let roomTypes1 = []
          let rooms1 = []
          data.roomTypes.forEach((elemento)=>{roomTypes1.push(elemento)});
          data.rooms.forEach((elemento)=>{rooms1.push(elemento)});
          
          resolve(roomTypes1,rooms1); // Resuelve la promesa con los datos cargados
        })
       
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

function mostrarMenu() {
  return parseInt(prompt("1. Realizar reserva \n2. Cambiar reserva\n3. Eliminar reserva \n4. Salir\n"));
}
function main(){
  cargarYMostrarData()
  .then((rooms1,roomTypes1)=>{
    let exit = false;
    while(!exit){
      let menuOption = mostrarMenu()
      switch (menuOption){
        case 1:
          reservarHabitacion(rooms1,roomTypes1);
        case 2:
          console.log("aun no programado")
        case 3:
          console.log("aun no programado")
        case 4:
          exit = true
        default:
          console.log("Ingreso invalido")
          
      }
    }
  })
}
main()
