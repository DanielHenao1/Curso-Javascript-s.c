// funcion con parametros y return
const suma = (x, y) => {
  return x + y;
};

let respuesta = suma(5, 6);
console.log(`El resultado de x + y es: ${respuesta}`);

// Funcion con una variables locales
const suma2 = () => {
  let x = 5;
  let y = 5;
  let resultado = x + y;
  console.log(`La suma de x + y es: ${resultado}`);
};

suma2();

// Funcion con variable global y un parametro
let p = 100;
const suma3 = (num) => {
  return num + p;
};

let resultado3 = suma3(200);
console.log(`El resultado de p + num es: ${resultado3}`);

// Vamos a crear una funcion que nos cambie los grados farenheit a graddos celcios
const temperaturaEnFfahrenheit = 74;

const transformarACelcious = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const resultado4 = transformarACelcious(temperaturaEnFfahrenheit);
console.log(`La temperatura en grados celcious es de: ${parseInt(resultado4)}`);
