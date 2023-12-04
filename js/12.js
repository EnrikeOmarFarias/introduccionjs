// Estructuras de control

var puntaje = 900;

if (puntaje != 1000) {
  console.log("El puntaje no igual a mil");
} else {
  console.log("El puntaje es de 1000");
}

// Switch

var metodoDePago = "efectivo";

switch (metodoDePago) {
  case "Tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "Cheque":
    console.log("El usuario va a pagar con cheque");
    break;
  case "Efectivo":
    console.log("Pagaste con efectivo");
    break;
  default:
    console.log("Aun no has pagado");
    break;
}
