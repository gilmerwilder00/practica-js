

let totalApagar = 0;

for(let index=1; index <= 2; index++ ){

    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;

    totalApagar = totalApagar + subtotal;

    // totalApagar += subtotal;

}

alert('El total de la sumatoria es : ' + totalApagar);