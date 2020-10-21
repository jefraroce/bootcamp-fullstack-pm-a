/**
 * window.localStorage
 * 
 * Es una base de datos ligera que existe solo dentro del navegador. En la cual esencialmente solo podemos almacenar cadenas de texto. Todo valor de un tipo diferente será convertido en texto automaticamente.
 * 
 * DOC: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
 */

localStorage // Sí yo ejecuto esta linea en el navegador podré acceder a los valores actualmente almacenados en la base de datos local o localStorage

// Ejemplo
// Storage { length: 0 }

// Con el metodo setItem(llave, valor) podemos almacenar un valor, en este caso almaceno la palabra 'Rosas' referenciandola la llave unica 'apellido'
localStorage.setItem('apellido', 'Rosas')

localStorage
// Storage { apellido: "Rosas", length: 1 }

// Usando el metodo getItem(llave) podemos recuperar un valor por su llave
localStorage.getItem('apellido')
// "Rosas"

// Usando el metodo keys(objeto) de la API de la clase Object podemos obtener un arreglo con las diferentes llaves que existan en un objeto, por ejemplo dentro del localStorage
Object.keys(localStorage)
// Array [ "apellido" ]

Object.keys(localStorage).forEach((key) => {
  if (key === 'apellido') {
    // Con el metodo removeItem(llave) podemos eliminar del localStorage un valor por su llave
    localStorage.removeItem(key)
  }
})

localStorage
// Storage { length: 0 }

//--------------------------------------------------

// Ahora, sí por defecto todo lo que se almacena en el localStorage son cadenas de texto ¿ como podriamos hacer para guardar otros tipos de valores ?

// RESPUESTA: Conviertiendolos a una cadena de texto y cuando sean recuperados, debemos parsearlos (convertirlos) a su tipo de dato original

// Ejemplo para enteros

localStorage.setItem('edad', 20)

localStorage.getItem('edad')
// "20"

// Con el metodo Math.parseInt(valor) podemos convertir un valor de texto en un número entero
parseInt( localStorage.getItem('edad') )
// 20

// Ejemplo para arreglos

localStorage.setItem('materias', ['matematicas', 'fisica', 'quimica'])

localStorage.getItem('materias')
// "matematicas,fisica,quimica"

// Con el metodo Array.prototype.split(elementoSeparador) podemos separar los caracteres de una cadena de texto dependiendo de un separador, como por ejemplo la coma (,)
localStorage.getItem('materias').split(',')
// ['matematicas', 'fisica', 'quimica']

// Ejemplo para objetos

let carro = { marca: "MAZDA", placa: "JOD234", color: "AMARILLO" }

// Los objetos son un elemento super especial, porque no pueden ser convertidos (parseados) automaticamente a una forma de cadena de texto. Ellos deben ser convertidos manualmente.

// Para convertir un objeto en una cadena de texto, utilizamos el metodo JSON.stringify(objeto) 
const objetoConvertidoATexto = JSON.stringify(carro)
// "{\"marca\":\"MAZDA\",\"placa\":\"JOD234\",\"color\":\"AMARILLO\"}"

localStorage.setItem('carro', objetoConvertidoATexto)

localStorage.getItem('carro')
// "{\"marca\":\"MAZDA\",\"placa\":\"JOD234\",\"color\":\"AMARILLO\"}"

// Con el metodo JSON.parse(texto) podemos convertir una cadena de texto de nuevo en un objeto de JavaScript
JSON.parse( localStorage.getItem('carro') )
// Object { marca: "MAZDA", placa: "JOD234", color: "AMARILLO" }
