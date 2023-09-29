// Set() nos crea un nuevo array y elimina los elementos repetidos
let conjunto = new Set([
  "Curso html",
  "Curso css",
  "Curso JS",
  "Curso React",
  "Backend",
  "Curso css",
]);
console.log(conjunto);

// Map()
let mapa = new Map([
  ["Computadores", 10],
  ["Tablets", 5],
  ["Celulares", 15],
]);
mapa.set("Teclados", 20);

console.log(mapa);

// Para convertir un objeto en un array utilizamos el spread (...)

let array = [1, 1, 2, 2, 3, 3, 3, 4, 4];
let unico = new Set(array);

// una forma de hacerlo
unico = [...new Set(array)]; // Otra forma de hacerlo es con la sintaxis del operador ...
console.log(unico);

//Otra forma de hacerlo
let nuevoArray = [...unico];
console.log(nuevoArray);
