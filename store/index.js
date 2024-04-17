// const cantidadProductos = prompt("¿Cuantos productos desea comprar?");

// let totalApagar = 0;
// let nombresProductos = "";

// for (let index = 1; index <= cantidadProductos; index++) {
//   const nombre = prompt("¿Qué producto desea llevar?");
//   nombresProductos = nombresProductos + nombre + ",";
//   const cantidad = Number(prompt("¿Cuántas unidades?"));
//   const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//   const subtotal = cantidad * precio;

//   totalApagar = totalApagar + subtotal;

// }

// nombresProductos= 'cuaderno,lapiz,tijera,'

// nombresProductos = nombresProductos.substring(0, nombresProductos.length - 1);

// const mensaje =
//   'Productos: ' +
//   nombresProductos +
//   ' \n El total de la sumatoria es :  ' +
//   totalApagar;

// alert(mensaje);

// let nombresProductos= 'cuaderno,lapiz,tijera,';

// nombresProductos = nombresProductos.substring(0, 14 );

// alert(nombresProductos);

const comprar = (cliente) => {
  let totalApagar = 0;

  for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }

  console.log('EL total a pagar del cleinte '+ cliente + ' es : ' + totalApagar);

  return totalApagar;
};

// Representa al primer cliente
const total1 = comprar(1);
// Representa al segundo cliente
const total2 = comprar(2);
// Representa al tercer cliente
// const total3 = comprar();
const total = total1 + total2 ;

alert('El total del día es: ' + total)
// const total = total1 + total2 + total3;
// console.log('El total del día es: ' + total);