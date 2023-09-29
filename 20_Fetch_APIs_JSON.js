let urlBase = "https://jsonplaceholder.typicode.com";
let query = "posts/1";

///////////////////////************************GET*********************///////////////////////////
//GET: Enviar informacion

// // Esto es un GET: Pedir informacion //realizado desde fetch
// fetch(`${urlBase}/${query}`)
//   .then((response) => response.json()) // JSON = javascript object notation
//   .then((json) => console.log(json));

///////////////////////*********************POST************************///////////////////////////
// //POST: Enviar informacion
// let requestBody = {
//   title: "Daniel comenta sobre tu foto",
//   body: "Que bonita foto",
//   userId: 1,
// };

// fetch(`${urlBase}/posts`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody),
// })
//   .then((response) => response.json()) // JSON = javascript object notation
//   .then((json) => console.log(json));

///////////////////////*********************PUT************************///////////////////////////
// //PUT: Editar informacion (Se modifica toda la informacion)
// let requestBody2 = {
//     id: 100,
//     title: "Daniel comenta sobre tu foto",
//     body: "Que bonita foto",
//     userId: 5,
//   };

//   fetch(`${urlBase}/posts/1`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify(requestBody2),
//   })
//     .then((response) => response.json()) // JSON = javascript object notation
//     .then((json) => console.log(json));

///////////////////////*********************PATCH************************///////////////////////////
// //PATCH: Editar informacion (Pero solo se edita una parte)
// let post = 10
// let requestBody3 = {
//   title: "Daniel comenta sobre tu foto",
// };

// fetch(`${urlBase}/posts/${post}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody3),
// })
//   .then((response) => response.json()) // JSON = javascript object notation
//   .then((json) => console.log(json));

///////////////////////*********************PATCH************************///////////////////////////  
//DELETE: Borrar informacion
let elementoEliminado = 3
fetch(`${urlBase}/posts/${elementoEliminado}`,{
    method:"DELETE",
})
