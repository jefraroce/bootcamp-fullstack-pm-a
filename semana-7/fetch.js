// fetch('https://rickandmortyapi.com/api/') // Hacemos la solicitud al servidor de Rick Morty

fetch('http://127.0.0.1:5500/semana-7/fetch.json') // Hacemos la solicitud al servidor de Rick Morty
  .then(function (respuesta) {
    respuesta.json()
      .then(function (dataJson) {
        console.log('data', dataJson)
      }) // Decodificamos el contenido de la respuesta
  })
  // .then((informacionEnJSON) => console.log(informacionEnJSON))

const solicitud = fetch('http://127.0.0.1:5500/semana-7/fetch.json', {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data) // body data type must match "Content-Type" header
}) // Hacemos la solicitud al servidor de Rick Morty


const ejecutarMiFuncion = (solicitud) => {
  solicitud.then(function () {
    ocultarFotos()
    mostrarOtras()
  })
}

ejecutarMiFuncion(solicitud)

