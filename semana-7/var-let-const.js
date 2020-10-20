/*
  var let const

  En resumen (var, let y const) nos permiten crear variables. Sin embargo, solo let y const obligan a las variables a existir unicamente dentro del bloque en el que son creadas.

  Y solamente const hace imposible la re-instanciación de una variable.

  El uso de let y const se recomienda por encima de var porque hacen un mejor uso de memoria, ademas de reducir problemas por la re-utilización del nombre de las variables.
*/

// Alcance

// Ejemplo var

function funcionVar() {
  if (true) {
    var mensaje = 'Hola'
  }

  console.log(mensaje) // Salida: Hola
}

// Ejemplo let

function funcionLet() {
  if (true) {
    let mensaje = 'Hola'
  }

  console.log(mensaje) // Salida: mensaje is not defined
}

// Ejemplo const

function funcionConst() {
  if (true) {
    const mensaje = 'Hola'
  }

  console.log(mensaje) // Salida: mensaje is not defined
}

// Re-Instanciamiento

var mensaje = 'Hola'        // Hola
mensaje = 'Hola y Adios'    // Hola y Adios

let mensaje2 = 'Hola'        // Hola
mensaje2 = 'Hola y Adios'    // Hola y Adios

const mensaje3 = 'Hola'      // Hola
mensaje3 = 'Hola y Adios'    // Error: invalid assignment to const 'mensaje3'
