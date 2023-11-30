// Arrays

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let carrito = [
  { nombre: "Notebook 13 pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 300 },
  { nombre: "Monopatin", precio: 700 },
];

// ForEach

meses.forEach(function (mes) {
  console.log(mes);
});

meses.forEach(function (mes) {
  if ((mes = "marzo")) {
    console.log("Marzo si existe");
  }
});

// Includes
let resultado = meses.includes("Marzo");
console.log(resultado);

// Reduce

resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
