// Return

function sumar(n1, n2) {
  return n1 + n2;
}

let resultado = sumar(10, 3);
console.log(resultado);

let total = 0;

function agregar_carrito(precio) {
  return (total += precio);
}

function calcular_impuesto(total) {
  return 1.15 * total;
}

total = agregar_carrito(1200);
total = agregar_carrito(1000);
total = agregar_carrito(800);

let total_apagar = calcular_impuesto(total);

console.log(total);
console.log("el total a pagar con impuestos es: " $${total_apagar})
