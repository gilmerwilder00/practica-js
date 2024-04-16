const cantidadProductos = prompt("¿Cuantos productos desea comprar?");

let totalApagar = 0;
let nombresProductos = "";

for (let index = 1; index <= cantidadProductos; index++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  nombresProductos = nombresProductos + nombre + ",";
  const cantidad = Number(prompt("¿Cuántas unidades?"));
  const precio = Number(prompt("¿Cuánto sale cada unidad?"));
  const subtotal = cantidad * precio;

  totalApagar = totalApagar + subtotal;

  // totalApagar += subtotal;
}

// nombresProductos= 'cuaderno,lapiz,tijera,'

nombresProductos = nombresProductos.substring(0, nombresProductos.length - 1);

const mensaje =
  "Productos: " +
  nombresProductos +
  " \n El total de la sumatoria es :  " +
  totalApagar;

alert(mensaje);

// let nombresProductos= 'cuaderno,lapiz,tijera,';

// nombresProductos = nombresProductos.substring(0, 14 );

// alert(nombresProductos);
