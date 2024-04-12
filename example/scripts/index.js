/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS - Hola Mundo";

// prompt("Preguntar algo");


// console.log("Imprimir algo- Hola mundo XD");

// const entrada = prompt("¿Qué producto desea comprar?");

// console.log(entrada);

// alert(entrada);

const nombre = prompt("¿Cuál es tu nombre?");

const mensaje = "Bienvenido " + nombre ;

alert(mensaje);