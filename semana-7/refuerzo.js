// Cargamos los elementos de HTML que necesitamos para trabajar
const formulario = document.querySelector('#formulario')
const listaDeAmigos = document.querySelector('#lista-de-amigos')
let contadorAmigos = 0

const agregarAmigo = function (evento) {
  evento.preventDefault()

  const inputNombre = document.querySelector('#nombre')
  const nombreDelAmigo = inputNombre.value

  contadorAmigos++

  listaDeAmigos.innerHTML = listaDeAmigos.innerHTML + `<tr>
    <td>${contadorAmigos}.</td>
    <td>${nombreDelAmigo}</td>
  </tr>`
}

// Relaciono el evento con una función
formulario.addEventListener('submit', agregarAmigo)
