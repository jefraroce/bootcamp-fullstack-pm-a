const listaDePersonajes = document.querySelector('#lista-de-personajes')

const construirTarjetaPersonaje = function (personaje) {
  return `<div class="col-12 col-md-4">
    <div class="card">
      <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">${personaje.status}</p>
      </div>
    </div>
  </div>`
}

const listarPersonajes = function (personajes) {
  listaDePersonajes.innerHTML = ''

  personajes.results.forEach((personaje) => {
    listaDePersonajes.innerHTML += construirTarjetaPersonaje(personaje)
  })
}

fetch('https://rickandmortyapi.com/api/')
  .then((respuesta) => {
    return respuesta.json()
  })
  .then((api) => {

    fetch(api.characters)
      .then((respuesta) => {
        return respuesta.json()
      })
      .then((personajes) => {
        listarPersonajes(personajes)
      })

  })
  .catch((error) => {
    console.error('Error ', error)
  })
