// For

for (let i = 0; i <= 10; i++) console.log(i);

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`el numero ${i} es PAR`);
  } else {
    console.log(`El numero ${i} es IMPAR`);
  }
}

let carrito = [
  { nombre: "Notebook 13 pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 300 },
  { nombre: "Monopatin", precio: 700 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Celular", precio: 800 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

// While se ejecuta mientras la condicon sea evaluada como verdadera

let i = 5;
while (i < 10) {
  console.log(i);
  i++;
}

// Do while

let = 10;

do {
  console.log(i);
  i++;
} while (i < 100);
