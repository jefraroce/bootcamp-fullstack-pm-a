/*
  Ciclo while nos permite ejecutar indefinidamente un conjunto de sentencias hasta que se cumplan una o varias condiciones

  while ( condiciones ) {
    // Sentencias
  }

  DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/while
*/

// const META = 10000000 // Moto
// const ahorroFijoMensual = 800000
// let montoAhorrado = 0
// const numeroEstimadoDeMeses = Math.ceil(META / ahorroFijoMensual)

// for (let i = 0; i < numeroEstimadoDeMeses; i++) {
//   montoAhorrado += ahorroFijoMensual
// }

// console.log(`En un total de ${numeroEstimadoDeMeses} meses yo tendré ahorrado ${montoAhorrado}`)

// Mejora con while

const META = 10000000 // Moto
const ahorroMinimoMensual = 50000
const ahorroMaximoMensual = 800000
let montoAhorrado = 0
let numeroEstimadoDeMeses = 0

//            0     < 10000000
while ( montoAhorrado < META ) {
  let ahorroDelMes = Math.floor(Math.random() * ahorroMaximoMensual) // Varia cada mes

  //  50000
  if (ahorroDelMes < ahorroMinimoMensual) {
    ahorroDelMes = ahorroMinimoMensual
  }

  // numeroEstimadoDeMeses = numeroEstimadoDeMeses + 1
  // numeroEstimadoDeMeses += 1
  numeroEstimadoDeMeses++

  console.log(`En el mes # ${numeroEstimadoDeMeses} voy a consignar ${ahorroDelMes}`)

  montoAhorrado += ahorroDelMes
}

console.log(`En un total de ${numeroEstimadoDeMeses} meses yo tendré ahorrado ${montoAhorrado}`)

//--------------------------------

// Utilizando while para ejecutar imitar el funcionamiento del ciclo for

// for (let i = 0; i < 10; i++) {
//   console.log('i ', i)
// }

// let i = 0
// while ( i < 10 ) {
//   console.log('i ', i)
//   i++
// }

//--------------------------------

/*
Taller

Utilizando el ciclo while, crear una función que reciba como parametro mi peso actual y mi peso ideal, luego determine el número de días de ejercicio para llegar a mi peso ideal.

Condiciones
- Cada día de ejercicio equivale a bajar entre 0.5 y 2 kg

Resultado Esperado
- Un mensaje que me diga la cantidad de días que me tomó llegar al peso ideal y el peso obtenido al final
*/
