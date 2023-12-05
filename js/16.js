// Clases (el nombre siempre va con mayuscula)

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
  }
}

const productoDos = new Producto("Monitor", 1500);
const productoTres = new Producto("Tablet", 1000);

console.log(productoDos);
console.log(productoTres);
console.log(formatearProducto);
