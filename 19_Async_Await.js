// Función ficticia que simula una solicitud HTTP asincrónica

// Promesa #1
function hacerSolicitudHTTP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = 10; // Simular si la solicitud fue exitosa o no
      if (exito == 10) {
        resolve("1Datos de respuesta de la solicitud HTTP");
      } else {
        reject("Error en la solicitud HTTP");
      }
    }, 3000); // Simular un retraso de 2 segundos
  });
}

// Promesa #2
function hacerSolicitudHTTP2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = 10; // Simular si la solicitud fue exitosa o no
      if (exito == 10) {
        resolve("2Datos de respuesta de la solicitud HTTP");
      } else {
        reject("Error en la solicitud HTTP");
      }
    }, 3000); // Simular un retraso de 2 segundos
  });
}
// Promesa #3
function hacerSolicitudHTTP3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = 10; // Simular si la solicitud fue exitosa o no
      if (exito == 10) {
        resolve("3Datos de respuesta de la solicitud HTTP");
      } else {
        reject("Error en la solicitud HTTP");
      }
    }, 3000); // Simular un retraso de 2 segundos
  });
}

// Función asincrónica que utiliza async/await para manejar la solicitud HTTP
async function obtenerDatos() {
  try {
    console.log("Iniciando la solicitud HTTP...");
    const respuesta1 = await hacerSolicitudHTTP(); // Esperar a que la solicitud se complete
    console.log("Solicitud HTTP completada con éxito:", respuesta1);
    console.log("Iniciando la solicitud HTTP...");
    const respuesta2 = await hacerSolicitudHTTP2(); // Esperar a que la solicitud se complete
    console.log("Solicitud HTTP completada con éxito:", respuesta2);
    console.log("Iniciando la solicitud HTTP...");
    const respuesta3 = await hacerSolicitudHTTP3(); // Esperar a que la solicitud se complete
    console.log("Solicitud HTTP completada con éxito:", respuesta3);
  } catch (error) {
    console.error("Error en la solicitud HTTP:", error);
  }
}

// Llamar a la función asincrónica
obtenerDatos();

// ************************* Ejempo dos ejecutando promesas con funcion asincrona diferente

// Función ficticia que simula una solicitud HTTP asincrónica
// function hacerSolicitudHTTP() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const exito = 10; // Simular si la solicitud fue exitosa o no
//         if (exito == 10) {
//           resolve("Promesa # 1 datos de respuesta de la solicitud HTTP");
//         } else {
//           reject("Error en la solicitud HTTP de la promesa #1");
//         }
//       }, 3000); // Simular un retraso de 2 segundos
//     });
//   }
// function hacerSolicitudHTTP2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const exito = 0; // Simular si la solicitud fue exitosa o no
//         if (exito == 10) {
//           resolve("Promesa # 2 datos de respuesta de la solicitud HTTP");
//         } else {
//           reject("Error en la solicitud HTTP de la promesa #2");
//         }
//       }, 2000); // Simular un retraso de 2 segundos
//     });
//   }
// function hacerSolicitudHTTP3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const exito = 10; // Simular si la solicitud fue exitosa o no
//         if (exito == 10) {
//           resolve("Promesa # 3 datos de respuesta de la solicitud HTTP");
//         } else {
//           reject("Error en la solicitud HTTP de la promesa #3");
//         }
//       }, 5000); // Simular un retraso de 2 segundos
//     });
//   }

//   // Función asincrónica que utiliza async/await para manejar la solicitud HTTP
//   async function obtenerDatos() {
//     try {
//       console.log("Iniciando la solicitud HTTP... Promesa #1...");
//       const respuesta1 = await hacerSolicitudHTTP(); // Esperar a que la solicitud se complete
//       console.log("Solicitud HTTP Promesa #1 completada con éxito:", respuesta1);
//     } catch (error) {
//       console.error("Error en la solicitud HTTP:", error);
//     }
//     try {
//         console.log("Iniciando la solicitud HTTP... Promesa #2...");
//         const respuesta2 = await hacerSolicitudHTTP2(); // Esperar a que la solicitud se complete
//         console.log("Solicitud HTTP Promesa #2 completada con éxito:", respuesta2);
//       } catch (error) {
//         console.error("Error en la solicitud HTTP:", error);
//       }
//       try {
//         console.log("Iniciando la solicitud HTTP... Promesa #3...");
//         const respuesta3 = await hacerSolicitudHTTP3(); // Esperar a que la solicitud se complete
//         console.log("Solicitud HTTP Promesa #3 completada con éxito:", respuesta3);
//       } catch (error) {
//         console.error("Error en la solicitud HTTP:", error);
//       }
//   }

//   // Llamar a la función asincrónica
//   obtenerDatos();
