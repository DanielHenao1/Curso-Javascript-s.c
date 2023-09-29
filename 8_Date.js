// Date() es una función incorporada en JavaScript que se utiliza para trabajar con fechas y horas. Aquí tienes algunos de los usos más comunes de Date() junto con ejemplos de código:

// Obtener la fecha y hora actual:
const fechaActual = new Date();
console.log(fechaActual);

// Crear una fecha específica:
const fechaEspecifica = new Date("2029-09-13T12:00:00");
console.log(fechaEspecifica);

// Obtener componentes individuales de una fecha (año, mes, día, hora, minuto, segundo):
const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth(); // Meses comienzan desde 0 (enero) hasta 11 (diciembre)
const día = fecha.getDate();
const hora = fecha.getHours();
const minuto = fecha.getMinutes();
const segundo = fecha.getSeconds();

console.log(
  `Año: ${año}, Mes: ${
    mes + 1
  }, Día: ${día}, Hora: ${hora}, Minuto: ${minuto}, Segundo: ${segundo}`
);

// Calcular la diferencia entre dos fechas:
const fecha1 = new Date("2023-09-13T12:00:00");
const fecha2 = new Date("2023-09-14T14:30:00");
const diferenciaEnMilisegundos = fecha2 - fecha1;
const diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);

console.log(`Diferencia en minutos: ${diferenciaEnMinutos}`);

// Formatear una fecha como una cadena de texto:
const fecha7 = new Date();
const opcionesDeFormato = { year: "numeric", month: "long", day: "numeric" };
const fechaFormateada = fecha.toLocaleDateString("es-ES", opcionesDeFormato);

console.log(`Fecha formateada: ${fechaFormateada}`);

// Realizar operaciones de manipulación de fechas, como agregar o restar días:
const fecha8 = new Date();
fecha.setDate(fecha.getDate() + 7); // Agrega 7 días

console.log(`Fecha después de agregar 7 días: ${fecha}`);

// Estos son algunos ejemplos de cómo se puede utilizar la función Date() en JavaScript para trabajar con fechas y horas. Ten en cuenta que JavaScript también tiene bibliotecas como Moment.js y date-fns que proporcionan funcionalidades adicionales y un manejo más avanzado de las fechas, si es necesario.
