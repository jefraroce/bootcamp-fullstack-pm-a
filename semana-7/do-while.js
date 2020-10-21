/*
  Ciclo do while, nos permite ejecutar una setencia un número indeterminado de veces, pero asegurandonos que al menos una vez se ejecutará

  do {
    // Setencia
  } while ( condiciones )

  DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/do...while
*/

// let i = 0

// do {
//   console.log('Hola desde el Do While')
//   i++
// } while ( i < 3 )

// let nombre = prompt('Dime tu nombre')

// while ( nombre === null || nombre.length === 0 ) {
//   nombre = prompt('Que me digas el nombre')
//   console.log('nombre ', nombre)
// }

// let nombre

// do {
//   nombre = prompt('Dime tu nombre')
// } while ( nombre === null || nombre.length === 0 )

// console.log('nombre ', nombre)


let numero // 5 y 7

do {
  numero = Math.ceil(Math.random() * 100) // 4
  console.log('ciclo')
} while ( numero < 5 || numero > 7 )

console.log('numero ', numero)

//  1     +   0    =  1
// true  || false => true
// false || true  => true
// true  || true  => true
// false || false => false

//  1     *   0    =  0
// true  && false => false
// false && true  => false
// false && false => false
// true  && true  => true
