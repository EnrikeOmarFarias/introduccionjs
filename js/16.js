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

// Herencia

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
}

const Libro = new Libro("JavaScrip la revolucion", 3000, "2154641156315113");
console.log(Libro.formatearProducto());

console.log(Libro.formatearProducto);
console.log(productoTres);
