const listaDelContenido = document.querySelector('#lista-del-contenido')
const listaDePaginas = document.querySelector('#lista-de-paginas')
let api = {}
let paginaActual = 1

const construirTarjetaPersonaje = (personaje) => {
  return `<div class="card">
    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
    <div class="card-body">
      <h5 class="card-title">${personaje.name}</h5>
      <span class="text-primary">${personaje.species}</span>
      <ul class="list-group">
        <li class="list-group-item"><strong>Estado: </strong>${personaje.status}</li>
        <li class="list-group-item"><strong>Genero: </strong>${personaje.gender}</li>
        <li class="list-group-item"><strong>Origen: </strong>${personaje.origin.name}</li>
      </ul>
    </div>
  </div>`
}

const cargarPersonajes = (numeroPagina) => {
  paginaActual = numeroPagina

  const enlaceActivo = listaDePaginas.querySelector('li.active')
  if (enlaceActivo) {
    enlaceActivo.classList.remove('active')
  }
  document.querySelector(`#pagina-${paginaActual}`).classList.add('active')

  fetch(`${api.characters}?page=${numeroPagina}`)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((infoPersonajes) => {
      listarPersonajes(infoPersonajes.results)
    })
}

const crearBotonesDePaginacion = (numeroPaginas) => {
  listaDePaginas.innerHTML = ''

  for (let i = 1; i <= numeroPaginas; i++) {
    listaDePaginas.innerHTML += `<li class="page-item" id="pagina-${i}">
      <a class="page-link" href="#" onclick="cargarPersonajes(${i})">${i}</a>
    </li>`
  }
}

const listarPersonajes = (personajes) => {
  listaDelContenido.innerHTML = ''

  personajes.forEach((personaje) => {
    listaDelContenido.innerHTML += `<div class="col-6 col-md-4 col-lg-3 mb-3">
      ${construirTarjetaPersonaje(personaje)}
    </div>`
  })
}

fetch('https://rickandmortyapi.com/api/')
  .then((respuesta) => {
    return respuesta.json()
  })
  .then((datos) => {
    api = datos

    fetch(api.characters)
      .then((respuesta) => {
        return respuesta.json()
      })
      .then((infoPersonajes) => {
        crearBotonesDePaginacion(infoPersonajes.info.pages)
        listarPersonajes(infoPersonajes.results)
      })
  })
