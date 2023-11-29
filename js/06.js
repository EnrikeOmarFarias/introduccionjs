// Arrays

let numeros = [1, 2, 3, 5, 8];
console.table(numeros);

let meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses);

// Acceder a los valores de un arreglo

console.log(numeros[3]);

// Conocer la extension de arreglo

console.log(meses.length);

numeros.forEach(function(numeros)) {
  console.log(numeros)
};

numeros.push // Agrega elementos al final 
numeros.unshift // Agrega elementos al inicio
numeros.pop // Elimina el ultimo elemento
numeros.shift // Elimina el inicio del arrglo 
numeros.splice(2, 1) // Elimina un elemento determinado indicando el primer numero apartir del cual inicia

// Rest Operator o Spread Operador
let nuevo_arreglo = [...meses, "mayo"]
console.log(nuevo_arreglo)