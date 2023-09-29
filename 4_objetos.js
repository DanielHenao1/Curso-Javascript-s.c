// let auto1 = {
//     marca: 'fiat',
//     modelo: 'UNO',
//     peso: 1000,
//     color: 'rojo'
// }
// let auto2 = {
//     marca: 'renault',
//     modelo: 'DOS',
//     peso: 1100,
//     color: 'marron'
// }

// console.log(`El color del auto1 es: ${auto1.color}`);
// console.log(`La marca del auto2 es: ${auto2.marca}`);

// Ejemplo de un objeto con una funcion flecha

const vendedor2 = {
  nombre: "Daniel",
  apellido: "Henao",
  empresa: "DH S.A.S",
  habilidades: ["Carisima", "Puntualidad"],
  vender: () => {
    return `${vendedor2.nombre} ha vendido un carro`;
  },
  nombreCompleto: () => {
    return `${vendedor2.nombre} ${vendedor2.apellido}`;
  },
};

console.log(vendedor2.vender());
console.log(vendedor2.nombreCompleto());
console.log(vendedor2.habilidades[0]);

// Ejemplo de un objeto con un afuncion regular con la palabra (this)
const vendedor = {
  nombre: "Daniel",
  apellido: "Henao",
  empresa: "DH S.A.S",
  habilidades: ["Carisima", "Puntualidad"],
  vender: function () {
    return `${this.nombre} ha vendido un carro`;
  },
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(vendedor.vender());
console.log(vendedor.nombreCompleto());
console.log(vendedor.habilidades[1]);
