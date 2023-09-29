// Este ejemplo es sincrono
try {
  // aca ponemos el codigo que puede fallas // Ejemplo un llamado al Backend atravez de un API
  console.log("Llamando al backend");
  //Podemos tambien poner un error intencionalmente
  throw "Este cliente no esta apto para la compra";
  console.log("Salio todo con esto");
} catch (error) {
  // Tomamos el error y hacemos algo que nos parezca correcto
  console.log("Algo salio mal", error);
} finally {
  // Se ejecuta falle o no falle
  console.log("Se ejecuta siempre");
}

// Este ejemplo es asincrono
try {
  // aca ponemos el codigo que puede fallas // Ejemplo un llamado al Backend atravez de un API
  console.log("Llamando al backend");
  setTimeout(() => {
    console.log("El Backend no responde: ");
    console.log("Cliente Apto para la compra");
  }, 1000);
} catch (error) {
  // Tomamos el error y hacemos algo que nos parezca correcto
  console.log("Algo salio mal", error);
}
