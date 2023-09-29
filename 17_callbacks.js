function mostrarConsola(num) {
  console.log(num);
}

function calcular(num1, num2, num3, callback) {
  let suma = num1 + num2 + num3;
  callback(suma);
}

calcular(100, 100, 100, mostrarConsola);
