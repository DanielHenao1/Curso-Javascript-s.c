// typeof() para saber que tipo de dato estamos manejando

// Ejemplo 1
let tipoDeDato = typeof "sergie";
console.log(tipoDeDato);

// Ejemplo 2
let tipoDeDato2 = 100;
console.log(typeof tipoDeDato2);

// Ejemplo 3
let tipoDeDato3 = 500;
let resultado = typeof tipoDeDato2;
console.log(resultado);

// Ejemplo 4

let datoQueVieneDeBackend = 100;

if (typeof datoQueVieneDeBackend === "string") {
  console.log("El dato que ingresaste es correcto");
} else {
  console.log("El dato que ingresaste es invalido");
}

// instanceof()

let a = [1, 2, 3, 4, 5]; // Esto es un array
let b = new Date(); // Esto es un objeto
let c = new Set(); // Esto es un objeto
let d = new Map(); // Esto es un objeto
let e = null; // De null no podermos hacer una instancia

console.log(d instanceof Object);
