const frase = prompt("Ingrese una palabra o frase");

// const longitud_sin_espacios = frase.split(" ").join("").length;
// console.log(longitud_sin_espacios);

// const cantidad = frase.length;

// const mensaje = "La longitud de la frase ingresada es : " + cantidad;
//  const mensaje = "La longitud de la frase ingresada es : " +  longitud_sin_espacios;

// alert(mensaje);

const fraseMinusculas = frase.toLowerCase();

const fraseMayusculas = frase.toUpperCase();

const mensaje =  "Frase minusculas: " + fraseMinusculas + " . Frase Mayusculas:" + fraseMayusculas; 

alert(mensaje)