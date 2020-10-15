// Todo se hereda Prototype Object

// Tipos De Dato

var a = 65 // Number
var b = "Texto" // String
var a0 = true || false // Boolean

// Numeros
// 
// DOCS: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number

// Maneras de Instanciar un Number
var e = 5
var f = 5.3
var g = -6
var h = new Number(4)

// Operaciones directas

3 + 4
6 - 3
6 / 3
6 * 3
6 % 3

// Textos
//
// DOCS: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String

// Maneras de Instanciar un String
var i = "Texto"
var j = 'Texto'
var k = `Texto`
var l = new String('Texto')

// Operaciones directas

// Concatenación de Strings
'Texto' + ' Otro Texto'
'Texto' + 3

// Interpolación de Strings
var m = `Texto ${i}`

// Valores Booleanos
//
// DOCS: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Boolean

// Maneras de Instanciar un Boolean
var booleanoVerdadero = true
var booleanoFalso = false
var booleano = new Boolean(false)

// Operaciones directas (validaciones)

//  1   *  1
  true && true  // = true
//  1   *   0
  true && false // = false

//  1   +   1
  true || true // = true
//  1   +   0
  true || false // = true

//  1   *   1    *   0
  true && true && false // = false

//  1   +   0    +   0
  true || false || false // = true

//  1   +   0    *   0
  true || false && false // = false
//  1   +   0    *  1
  true || false && true // = true

//  1   +   (0   *   1)
  true || (false && true) // = true

(true && true) === true
true === true // => true

/**
 * Taller
 * 
 * Crear un script o función para determinar el area de circulo.
 **/

