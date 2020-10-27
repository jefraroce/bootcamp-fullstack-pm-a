fetch('https://rickandmortyapi.com/api/')
  .then(function (respuesta) {
    respuesta.json().then(function (datos) {
      console.log(datos)
    })
  })
