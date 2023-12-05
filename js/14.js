// For Each
let carrito = [
  { nombre: "Notebook 13 pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 300 },
  { nombre: "Monopatin", precio: 700 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Celular", precio: 800 },
];

carrito.forEach((producto) => {
  console.log("Una vez por cada elemento");
  console.log(producto.precio);
});

// Map
// Crea un nuevo arreglo
