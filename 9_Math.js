// Math es un objeto incorporado en JavaScript que proporciona una amplia variedad de funciones y propiedades para realizar operaciones matemáticas. Aquí tienes algunos de los usos más comunes de Math junto con ejemplos de código:

// Redondeo y truncamiento:
// Math.round(): Redondea al entero más cercano.
const numero = 5.49;
const redondeado = Math.round(numero); // redondeado será 5
console.log(redondeado);

//Math.ceil(): Redondea hacia arriba.
const numero2 = 5.01;
const redondeadoHaciaArriba = Math.ceil(numero2); // redondeadoHaciaArriba será 6
console.log(redondeadoHaciaArriba);

// Math.floor(): Redondea hacia abajo.
const numero3 = 5.99;
const redondeadoHaciaAbajo = Math.floor(numero3); // redondeadoHaciaAbajo será 5
console.log(redondeadoHaciaAbajo);

// Generación de números aleatorios:
// Math.random(): Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
const numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Generar números enteros aleatorios en un rango específico:
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorioEnRango = generarNumeroAleatorio(1, 100); // Genera un número aleatorio entre 1 y 100 (inclusive)
console.log(numeroAleatorioEnRango);

//Exponentes y logaritmos:
//Math.pow(base, exponente): Calcula una potencia.
const resultado = Math.pow(2, 3); // resultado será 8
console.log(resultado);

// Math.log(numero): Calcula el logaritmo natural (base e).
const logaritmo = Math.log(Math.E); // logaritmo será 1
console.log(logaritmo);

// Constantes matemáticas:
// Math.PI: Devuelve el valor de π (pi).
const valorDePi = Math.PI; // valorDePi será aproximadamente 3.141592653589793
console.log(valorDePi);

// Math.E: Devuelve el valor de la constante matemática e (base del logaritmo natural).
const valorDeE = Math.E; // valorDeE será aproximadamente 2.718281828459045
console.log(valorDeE);

// stos son solo algunos ejemplos de cómo puedes utilizar el objeto Math en JavaScript para realizar operaciones matemáticas comunes. Math proporciona muchas otras funciones y propiedades útiles para realizar cálculos matemáticos en tus programas.
