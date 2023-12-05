// POO prgramacion orientada a objetos

// Object literal

var producto = {
  nombre: "Tablet",
  precio: 500,
};

// Object contructor

function producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

var producto2 = new producto("Monito 50 pulgadas", 1000);

console.log(producto2);
