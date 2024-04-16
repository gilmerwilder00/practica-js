// const numero1 = Number(prompt("Ingrese primer número"));

// const numero2 = Number(prompt("Ingrese segundo número"));

// const suma = numero1 + numero2;

// const mensajeSuma = "El resultado de la suma es "+ suma;

// alert(mensajeSuma);

// console.log(typeof(suma));
// console.log(typeof(mensajeSuma));

// const promedio = suma / 2;
// const triple = promedio * 3;
// const resultadoMenosDiez = triple - 10;

// const mensajeFinal  = "El promedio de los números es: " + promedio + ". El triple del promedio es: " + triple + ". El resultado menos 10 es:  " + resultadoMenosDiez;


// alert(mensajeFinal);


const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0;



for(let index=1; index<=cantidad; index++ ){

    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));

    sumatoria = sumatoria + numeroAsumar;

}

alert('El resultado de la suma es : ' + sumatoria );

console.log(sumatoria);