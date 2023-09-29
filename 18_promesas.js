let promesa = new Promise((response, reject) => {
  setTimeout(() => {
    let resp = "Esta es la respuesta del servicio";
    response(resp);
    reject("fallo");
  }, 3000);
});

promesa
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
