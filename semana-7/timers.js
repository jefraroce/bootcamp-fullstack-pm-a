console.log('Timers')

/**
 * setTimeout(función, milisegundos)
 * 
 * Me permite ejecutar una sentencia en un determinado tiempo en el futuro
 */

setTimeout(function () {
  console.log('Hola')
}, 0)

console.log('Adios')

/**
 * setInterval(función, milisegundos)
 * 
 * Me permite ejecutar una sentencia cada cierto tiempo en el futuro. Esto se ejecutará indefinidamente hasta que el navegador refresque la página o hasta que nosotros lo detengamos manualmente usando el metodo clearInterval(idDelIntervalo).
 */

let contador = 0

const intervalo = setInterval(function () {
  if (contador === 3) {
    clearInterval(intervalo)
  } else {
    console.log('Hola desde el setInterval')
    contador++
  }
}, 3000)

// clearInterval(intervalo)

const intervalo2 = setInterval(function () {
  console.log('Hola desde el setInterval 2')
}, 3000)

setTimeout(function () {
  clearInterval(intervalo2)
  console.log('Se detuvo el segundo intervalo 2')
}, 10000)
