// Ejemplo uno
let array = ["Curso html", "Curso css", "Curso JS", "Curso React"];
console.log(array[0]); // Buscamos cualquier elemento de nuestro array
console.log(array[array.length - 1]); // Buscamos el ultimo elemento de nuestro array

// Ejemplo dos
//                  0               1           2            3          estos serian los indices del array
let array2 = ["Curso html", "Curso css", "Curso JS", "Curso React"];

let texto = "";
for (let index = 0; index < array2.length; index++) {
  texto += `<li> ${array2[index]} </li>`;
}

document.getElementById("seleccionable").innerHTML = texto;

// Ejemplo anterior pero se reemplaza el bucle for por el map
// let listaHTML = array2.map((curso) => {
//   return `<li>${curso}</li>`;
// }).join('');

// document.getElementById("seleccionable").innerHTML = listaHTML;

// En el siguiente ejemplo agregamos un elemento a nuestro array con length
let array3 = ["Curso html", "Curso css", "Curso JS", "Curso React"];
array3[array3.length] = "Backend";

console.log(array3);

// ************************* Probando metodos de arrays

// ********************** Filter() ********************************** \\

let array4 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Curso JS"];

// El metodo filter recibe un (callback) ()=>{} y nos devuelve un nuevo array con lo que encuentra.
let filter1 = array4.filter((element) => {
  return element == "Curso JS";
});

console.log(filter1);

// Ejemplo con un array de objetos

let array5 = [
  { nombre: "Pedro", apellido: "Gonzalez" },
  { nombre: "Maria", apellido: "Gonzalez" },
  { nombre: "Lucia", apellido: "Gonzalez" },
  { nombre: "Ricardo", apellido: "Perez" },
  { nombre: "Glottis", apellido: "Juarez" },
  { nombre: "Fernando", apellido: "Fernandez" },
];

let filter2 = array5.filter((element) => {
  return element.apellido == "Gonzalez";
});

console.log(filter2);

// Ahora si queremos recorrer los nombre o apellidos que se filtraron debemos hacer un bucle

for (let index = 0; index < filter2.length; index++) {
  element = filter2[index];
  console.log(element.nombre);
}

// ********************** map() ********************************** \\

//El metodo map() lo usamos mejor para reemplazar los bucles
let array6 = ["Curso JS", "Curso JS", "Curso JS", "Curso JS"];

let map1 = array6.map((element) => {
  if (element == "Curso JS") {
    return "Curso React";
  }
});

console.log(map1);

// Ejemplo dos de map()

let numeros = [1, 2, 3, 4, 5];

// Duplicar cada número en el array utilizando map()
let numerosDuplicados = numeros.map((numero) => {
  return numero * 2;
});

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

// Ejemplo tres map()
let frutas = ["manzana", "banana", "naranja"];

// Usar map con los tres parámetros
let resultado = frutas.map((fruta, index, array) => {
  return `${fruta} está en la posición ${index + 1} de un total de ${
    array.length
  } frutas.`;
});

console.log(resultado);

// ********************** fill() ********************************** \\

// Ejemplo 1
let array7 = ["Curso JS", "Curso JS", "Curso JS", "Curso JS"];

// Si lo ponemos asi nos reemplza todos los elementos del array
array7.fill("Curso React");
console.log(array7); //["Curso React","Curso React","Curso React","Curso React"]

// Ejemplo 2
let array8 = ["Curso JS", "Curso JS", "Curso JS", "Curso JS"];

// Podemos ponerle una cantidad a la funcion fill y solo remplazara ese numero de veces
let fill2 = array8.fill("Backend", 2);
console.log(fill2);

// ********************** find() ********************************** \\

// Ejemplo 1 con find()
let array9 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let find1 = array9.find((element) => {
  return element == "Curso html";
});
console.log(find1);

// Ejemplo 2 con find()

let array10 = [
  { nombre: "Pedro", apellido: "Gonzalez" },
  { nombre: "Maria", apellido: "Gonzalez" },
  { nombre: "Lucia", apellido: "Gonzalez" },
  { nombre: "Ricardo", apellido: "Perez" },
  { nombre: "Glottis", apellido: "Juarez" },
  { nombre: "Fernando", apellido: "Fernandez" },
];

let find2 = array10.find((element) => {
  return element.apellido == "Gonzalez";
});
console.log(find2);

// ********************** findindex() ********************************** \\

let array11 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let findindex1 = array11.findIndex((element) => {
  return element == "Curso JS";
});
console.log(`El elemento buscado se encuentra en el indeice: ${findindex1}`);

// ********************** pop() ********************************** \\

let array12 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let pop1 = array12.pop();
// Pop elimina el ultimo el elmento del array y muestra por consola lo que elimino
console.log(pop1);
// Si volvemos a mostrar nuestro array inicial despues de utilizar pop()
// podemos ver que nos arraja el array sin el ultimo elemento
console.log(array12);

// ********************** shift() ********************************** \\

let array13 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let shift1 = array13.shift();
// shift elimina el primer elmento del array y muestra por consola lo que elimino
console.log(shift1);
// Si volvemos a mostrar nuestro array inicial despues de utilizar shift()
// podemos ver que nos arraja el array sin el primer elemento
console.log(array13);

// ********************** push() ********************************** \\

let array14 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];
array14.push("Curso Python"); // Añade un nuevo elemento al final del Array
console.log(array14);

// ********************** splice() ********************************** \\

let array15 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

array15.splice(5, 0, "pepito");
console.log(array15);

// ********************** slice() ********************************** \\

let array16 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let slice1 = array16.slice(0, 3);
console.log(slice1);

// ********************** join() ********************************** \\

let array17 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let join1 = array17.join(" - ");
console.log(join1);

// ********************** sort() ********************************** \\

// Ejemplo 1
let array18 = ["Curso html", "Curso css", "Curso JS", "Curso React", "Backend"];

let sort1 = array18.sort();
console.log(sort1);

// Ejemplo 2
let frutas10 = ["manzana", "naranja", "uva", "plátano", "fresa"];

// Usando el método sort sin un comparador personalizado
let frutasOrdenadas = frutas10.sort();
console.log("Orden predeterminado:", frutasOrdenadas);

// Usando un comparador personalizado para ordenar por longitud de cadenas
let frutasOrdenadasPorLongitud = frutas10.sort((a, b) => {
  return a.length - b.length;
});
console.log("Ordenadas por longitud:", frutasOrdenadasPorLongitud);

// Usando un comparador personalizado para ordenar alfabéticamente en orden inverso
let frutasOrdenadasAlReves = frutas10.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
console.log("Ordenadas al revés:", frutasOrdenadasAlReves);

//3:35
