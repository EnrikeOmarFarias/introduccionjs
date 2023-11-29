// Arrays

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let carrito = [{ nombre: "Notebook 13 pulgadas", precio: 500 }];

// ForEach

meses.forEach(function (mes) {
  console.log(mes);
});

meses.forEach(function (mes) {
  if ((mes = "marzo")) {
    console.log("Marzo si existe");
  }
});
