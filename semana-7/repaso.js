// Ejercicio 1

function reemplazarAdiosPorHastaPronto(cadenaDeTexto) {
  return cadenaDeTexto.toLowerCase()
  .replace('adios', 'hasta pronto')
}

console.log( reemplazarAdiosPorHastaPronto('ADIOS y Hola') )


// Ejercicio 5

function ordenarDeLaZaLaA() {
  const arreglo = ['Paola', 'Samy', 'Tomy', 'Andrea', 'Carlos', 'Miguel', 'Jorge']

  // Lo ordenamos de la A a la Z
  arreglo.sort()

  // Invertimos las posiciones. Z -> A
  console.log( arreglo.reverse() )
}

ordenarDeLaZaLaA()

//-------------------------------------

//       0  1  2
var a = [1, 2, 3]
a[2];

// Agrupar

(2 + 6) * 7

// Configurar parametros

// Función sin parametros
// const sumar = function() {
//   return 3 + 4
// }

// Función parametros definidos
// const sumar = function(valor1, valor2) {
//   return valor1 + valor2
// }

// Función parametros opcionales
const sumar = function(valor1, valor2 = 1) {
  return valor1 + valor2
}

sumar(1) // 2
sumar(1, 4) // 5

const valorCerveza = 2000
let cantidad = 2
const descuento = 0.2

//               2000         2
let total = valorCerveza * cantidad

//      4000  -       800
total = total - (total * descuento)

// 3200
