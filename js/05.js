//Objetos

let producto;

producto = {
  nombre_producto: "Televisor",
  precio: 300,
  disponible: true,
};

// console.log(producto);
// console.log(producto.precio);
// confirm.log(producto["precio"]);

// Agregar propiedades

producto.imagen = "imagen.jpg";

// Quitar propiedades

delete producto.disponible;

console.log(producto);

// Forma anterior
let precio_producto = producto.precio;

console.log(precio_producto);

// Destructuring

let { precio } = producto;

console.log(precio);

// Unir objetos

let medidas;

medidas = {
  peso: "1kilo",
  medida: "1metro",
};

let nuevo_producto = { ...producto, ...medidas };
console.log(nuevo_producto);
