const exito = function (resultado) {
  console.log('Exito', resultado)
}

const fallo = function (error) {
  console.error('Fallo', error)
}

new Promise(function (resolver, rechazar) {
  const numero = Math.random() * 10

  if (numero > 5) {
    resolver('Todo salio bien')
  } else {
    rechazar('Todo salio mal')
  }
})
  .then(exito, fallo)

// new Promise(function (resolver, rechazar) {
//   rechazar('Todo salio mal')
// })
//   .then(exito)
//   .catch(fallo)

function promesas() {
  console.log('Inicio')
  setTimeout(() => console.log('setTimeout'), 0)
  Promise.resolve('Promesa 1').then(msj => console.log(msj))
  Promise.resolve('Promesa 2').then(msj => console.log(msj))
  console.log('Fin')
}

promesas()
