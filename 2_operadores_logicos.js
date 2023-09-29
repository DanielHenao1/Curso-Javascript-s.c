let x = 5;
let y = "5";

// Booleano va ser true o false (==) para saber si es igual
let z = x == y;
console.log(`Confirma si x es igual a y: ${z}`);

// Booleano va ser true o false (===) para saber si es extrictamente igual
let zz = x === y;
console.log(`Confirma si x es igual a y: ${zz}`);

// (!=) para saber si es diferente de
let m = x != y;
console.log(`Confirma si x es diferente de y: ${m}`);

// (!==) para saber si es extrictamente diferente de
let m2 = x !== y;
console.log(`Confirma si x es diferente de y: ${m2}`);

// (<) menor que
// (<=) menor o igual
// (>) mayor que
// (>=) mayor o igual que

//&& (AND lógico): Retorna true si ambos operandos son true. Si al menos uno de los operandos es false, el resultado es false
let a = 5;
let b = 9;
let c = 5;

let r = a < b && b < c;
console.log(r);

// || (OR lógico): Retorna true si al menos uno de los operandos es true. Si ambos operandos son false, el resultado es false.

let a2 = 5;
let b2 = 9;
let c2 = 5;

let f = a < b || b < c;
console.log(f);

// ! (NOT lógico): Retorna true si el operando es false, y false si el operando es true. Invierte el valor lógico del operando.

let a3 = 5;
let c3 = 5;

let resultado = a3 === c3; // Esto negará la igualdad de a3 y c3
console.log(!resultado); // Imprimirá 'false' ya que a3 es igual a c3
