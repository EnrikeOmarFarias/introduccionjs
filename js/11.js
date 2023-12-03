// Arrow funtions

let sumar = function (n1, n2) {
  console.log(n1 + n2);
};

sumar(2, 2);

var sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(2, 2);

var aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("js");

// Aplicado a ejemplos

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

meses.forEach((mes) => {
  if ("mes = marzo") {
    console.log("Marzo si Existe");
  }
});

// Some ideal para arreglo de objetos

resultado = carrito.some(function (producto) {
  return producto.nombre === "Celular Pro";
});

resultado = carrito.some((producto) => producto.nombre === "Celular Pro");
console.log(resultado);

// Reduce

resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

resultado = carrito.reduce((total, producto) => {
  total + producto.precio, 0;
});

console.log(resultado);
