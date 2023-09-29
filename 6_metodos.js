// Estos métodos son extremadamente útiles al trabajar con cadenas de texto y te permiten realizar una amplia variedad de manipulaciones y operaciones en ellas.

// ******************************** PRINCIPALMETE PARA CADENAS

// concat(): Este método se utiliza para concatenar dos o más cadenas de texto y crear una nueva cadena.

// startsWith(): Permite verificar si una cadena comienza con un cierto conjunto de caracteres especificado.

// endsWith(): Permite verificar si una cadena termina con un cierto conjunto de caracteres especificado.

// includes(): Sirve para verificar si una cadena contiene un cierto conjunto de caracteres o una subcadena.

// indexOf(): Retorna el índice de la primera ocurrencia de una subcadena en una cadena. Si no se encuentra, retorna -1.

// lastIndexOf(): Retorna el índice de la última ocurrencia de una subcadena en una cadena. Si no se encuentra, retorna -1.

// padStart(): Agrega caracteres al principio de una cadena hasta que tenga una longitud especificada.

// padEnd(): Agrega caracteres al final de una cadena hasta que tenga una longitud especificada.

// repeat(): Repite una cadena un número especificado de veces y devuelve una nueva cadena con la repetición.

// replace(): Reemplaza una subcadena con otra en una cadena de texto.

// split(): Divide una cadena en un array de subcadenas basadas en un separador especificado.

// substring(): Retorna una porción de una cadena entre dos índices especificados.

// toLowerCase(): Convierte todos los caracteres de una cadena a minúsculas.

// toUpperCase(): Convierte todos los caracteres de una cadena a mayúsculas.

// toString(): Convierte un valor en una cadena de texto.

// trim(): Elimina los espacios en blanco al principio y al final de una cadena.

// trimEnd(): Elimina los espacios en blanco al final de una cadena.

// trimStart(): Elimina los espacios en blanco al principio de una cadena.

// valueOf(): Retorna el valor primitivo de un objeto. En el caso de una cadena, retorna la cadena en sí.

// ******************************** METODOS DE TRANSFORMACION DE ARRAYS:

// pop(): Elimina el último elemento de un array y lo devuelve.

// shift(): Elimina el primer elemento de un array y lo devuelve.

// push(): Agrega uno o más elementos al final de un array y retorna la nueva longitud del array.

// reverse(): Invierte el orden de los elementos en un array.

// unshift(): Agrega uno o más elementos al principio de un array y retorna la nueva longitud del array.

// sort(): Ordena los elementos de un array alfabéticamente o numéricamente y modifica el array original.

// splice(): Permite agregar o eliminar elementos de un array en una posición específica. Puede usarse para insertar, reemplazar o eliminar elementos.

// Estos métodos son utilizados para modificar la estructura de los arrays. Por ejemplo, pop() y shift() eliminan elementos, push() y unshift() agregan elementos, reverse() invierte el orden, sort() ordena los elementos y splice() permite una amplia variedad de operaciones de manipulación.

// Es importante tener en cuenta que algunos de estos métodos, como pop(), shift(), push(), unshift(), reverse(), y sort(), modifican el array original directamente, mientras que otros, como splice(), pueden realizar modificaciones más complejas según los argumentos proporcionados.

//*************************** */ METODOS DE ACCESO Y BUSQUEDA DE ARRAYS

// length: Propiedad que devuelve la cantidad de elementos en un array, es decir, su longitud.

// join(): Convierte los elementos de un array en una cadena de texto, separando los elementos por un separador especificado y devuelve la cadena resultante.

// slice(): Retorna una copia superficial de una porción de un array en un nuevo array. Puedes especificar los índices de inicio y fin de la porción.

// toString(): Método que convierte un array en una cadena de texto, donde los elementos se separan por comas, y devuelve la cadena resultante.

// includes(): Verifica si un array contiene un valor específico y devuelve true o false según si lo encuentra o no.

// indexOf(): Busca la primera ocurrencia de un valor en un array y retorna su índice. Si no lo encuentra, devuelve -1.

// lastIndexOf(): Busca la última ocurrencia de un valor en un array y retorna su índice. Si no lo encuentra, devuelve -1.

// Estos métodos te permiten acceder y buscar elementos en un array, así como realizar operaciones relacionadas con la longitud y la conversión de los elementos en cadenas de texto. Son útiles para manipular y consultar arrays de diversas maneras. Ten en cuenta que algunos de estos métodos no modifican el array original, mientras que otros, como join() y slice(), crean nuevos arrays o cadenas de texto basadas en el array original.

// etc.......

// ************************** METODOS DE ITERACION DE ARRAYS

// filter(): Crea un nuevo array con todos los elementos que cumplan con un criterio específico definido en una función de callback. Retorna un nuevo array con los elementos que pasaron la prueba.

// forEach(): Ejecuta una función de callback en cada elemento del array. Es útil para realizar una acción en cada elemento, pero no crea un nuevo array ni modifica el original.

// map(): Crea un nuevo array aplicando una función de callback a cada elemento del array original. Retorna un nuevo array con los resultados de la función aplicada a cada elemento.

// Método de reducción en arrays:

// reduce() y reduceRight(): Aplica una función de callback en un acumulador y cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor. Es útil para sumar todos los elementos, concatenar cadenas, calcular promedios, etc.

// Estos métodos son esenciales para realizar operaciones de filtrado, transformación y reducción en arrays, lo que facilita la manipulación y el procesamiento de datos en JavaScript.

// find() y findIndex(): Encuentran el primer elemento que cumple una condición especificada y devuelven su valor o su índice.

// some() y every(): Verifican si al menos un elemento cumple o si todos los elementos cumplen una condición, respectivamente.

// flat() y flatMap(): flat() aplana un array multidimensional, mientras que flatMap() permite aplicar una función de mapeo antes de aplanar.

// from(): Crea un nuevo array a partir de un objeto iterable o similar.

// keys(), values(), y entries(): Métodos que proporcionan iteradores para las claves, los valores y las entradas del array, respectivamente.

// String con barra de escape (\)

let cadena = "let's go";
console.log(cadena);

// String con barra + n (\n) para poner un salto de linea

let cadena2 = "DIOS. es mi pastor. sin el. \nnada me faltara.";

let resultado = cadena2.split(".");
console.log(resultado);
