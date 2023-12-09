const usuarioAtenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve("Usuario autenticado"); // El promise se cumple
  } else {
    reject("No se puede iniciar sesion"); // El promise no se cumple
  }
});

usuarioAtenticado.then(() => console.log("Desde el promise"));

// En los promises existen 3 valores
// Pending: no se ah cumplido pero tampoco rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ah rechazado o no se pudo cumplir
