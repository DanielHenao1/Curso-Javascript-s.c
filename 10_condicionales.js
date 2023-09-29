// Ejemplo 1
// Puede entrar esta persona a la disco
let edadPersona = 18;

if (edadPersona >= 18 && edadPersona <= 60) {
  console.log("puedes ingresar a la disco");
} else if (edadPersona < 18) {
  console.log("No puedes ingressar a la disco por que eres menor de edad");
} else {
  console.log(
    "No puedes ingresar a la disco por que eres mayor de 60 y no se recomienda"
  );
}

// Ejemplo 2 switch()
let estiloDeMusica = "punk";

switch (estiloDeMusica) {
  case "punk":
    console.log("Te recomiendo escuchar musica de DIOS");
    break;
  case "rock":
    console.log("Te recomiendo escuchar musica rock");
    break;
  case "romantica":
    console.log("Te recomiendo escuchar musica romantica");
    break;
  case "Balada":
    console.log("Te recomiendo escuchar musica balada");
    break;
  case "vallenato":
    console.log("Te recomiendo escuchar musica vallenato");
    break;
  case "regueton":
    console.log("Te recomiendo escuchar otra musica");
    break;

  default:
    console.log("No conozco esta musica");
    break;
}

// Ejemplo 3 if anidado

let edad = 18;
let nacionalidad = "Colombiano";
let tienePasaporte = true;

if (edad >= 18) {
  console.log("Tienes la edad para viajar, aprobado el tramite 1");
  if (nacionalidad == "Colombiano") {
    console.log("la documentacion esta correcta, aprobado tramite 2");
    if (tienePasaporte == true) {
      console.log("Usted puede viajar, buen viaje");
    } else {
      console.log("No puedes viajar por que el pasaporte es obligatorio");
    }
  } else {
    console.log("Debes presentar la documentacion de tu pais de origen");
  }
} else {
  console.log("Debe ser mayor de edad para viajar al exterior");
}
