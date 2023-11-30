// Declaracion de funcion
sumar()
function sumar() {
  console.log(10 + 10)

}


let sumar2 = function() {
  console.log(3 + 3)

}

sumar2()

// Funciones con argumentos y parametros

function sumar3(num1 =0, num2 =0) { // num1 y num2 son parametros
  console.log(num1 + num2)
}

sumar3(10, 5) // Argumentos o valores
sumar3(25, 50)
sumar3()

