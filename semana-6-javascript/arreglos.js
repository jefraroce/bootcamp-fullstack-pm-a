// Arreglos
// Son conjuntos de datos

// Arreglos homogeneos

var arreglo = [1, 2, 3, 5]

// Arreglos heterogeneos

var arreglo2 = [1, 'Texto', true, {}]

// Propiedades
// 1. Tienen un orden
// 2. Estan indexados

//                0         1      2  
var frutas = ['manzana', 'pera', 'uva']

// Agregar un elemento al final
// frutas.push('coco')

// Nos permite recorrer un arreglo
frutas.forEach(function (item, index) {
  frutas[index] = item.toUpperCase()
})

// Crea una copia del arreglo
var copiaFrutas = frutas.map(function (item) {
  return item.toLowerCase()
})

function agregarCoco(arreglo) {
  let copiaArreglo = arreglo.map((item) => item)
  copiaArreglo.push('coco')
  return copiaArreglo
}

let frutasMasCoco = agregarCoco(frutas)

// console.log('frutas ', frutasMasCoco)

// Ciclo For
// Nos permite iterar o repetir la ejecución de una o varias sentencias un número determinado de veces

for (let i = 0; i < 10; i++) {
  // console.log('i ', i)
}

// console.log('fin ', i)

for (let fruta of frutas) {
  // console.log(fruta)
}

let limit = frutas.length
for (let i = 0; i < limit; i++) {
  // console.log(frutas[i])
}

// frutas.forEach(fruta => console.log(fruta))

frutas.forEach(function (fruta) {
  console.log(fruta)
})

// Modificación

const listaDeFrutas = document.querySelector('#lista-de-frutas')

// const frutasParaLaLista = frutas.map(function (fruta) {
//   return `<li>${fruta}</li>`
// })
/*
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
*/

listaDeFrutas.innerHTML = ''
frutas.forEach(function (fruta) {
  listaDeFrutas.innerHTML += `<li>${fruta}</li>`
})


// listaDeFrutas.innerHTML = frutasParaLaLista.join('')

/*
Taller

1. Crear una arreglo con al menos 20 números
2. Luego recorrer el arreglo e imprimir un mensaje cada vez que se encuentre un número par. Ejemplo: 'Encontrado el 2 par'
3. Crear una lista HTML '<ul></ul>' dinamicamente desde JavaScript que imprima cada los valores impares del arreglo dentro de un <li></li>. Ejemplo: '<li>3</li>'
*/

var fruta = 'COCO'

"<li>" + fruta + "</li>"
'<li>' + fruta + '</li>'

'<li>'.concat(fruta).concat('</li>')

`<li>${fruta}</li>`
