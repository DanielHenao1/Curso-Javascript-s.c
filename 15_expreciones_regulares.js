//Modificadores
//i: ignorar mayusculas y minusculas
//g: buscar en todo el texto pasado
//m: busqueda multilinea
//s: que permite utilizar .

let texto =
  "DIOS es mi pastor con el nada me faltara, aunque debo acercarme mas a nuestro señor";
// De la siguiente forma tambien podemos buscar en una cadena.
let busqueda = texto.search(/dios/); // resultado = -1
console.log(busqueda);

// Para omitir el sentitive case
let busqueda2 = texto.search(/SEÑOR/i); // resultado2 = 78
console.log(busqueda2);

// Tambien lo podemos hacer de esta manera

let pattern = /faltara/g;
let resultado3 = pattern.test(texto);

console.log(resultado3);

let patternMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
console.log(patternMail.test("Dani@ho.com"));
