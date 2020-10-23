const tarjetaPersona = document.querySelector('#personaje')

const dibujarPersonaje = function (infoPersonaje) {
  console.log('infoPersonaje ', infoPersonaje)

  tarjetaPersona.innerHTML = `
    <img src="${infoPersonaje.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${infoPersonaje.name}</h5>
      <p class="card-text">${infoPersonaje.origin.name}</p>
    </div>`
}

const cargarPersonaje = function (event) {
  fetch('https://rickandmortyapi.com/api/character/1')
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((infoPersonaje) => {
      dibujarPersonaje(infoPersonaje)
    })
}

const botonDeCarga = document.querySelector('#cargar-personaje')
botonDeCarga.addEventListener('click', cargarPersonaje)
