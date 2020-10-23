let anguloGato = 0

function rotate (event) {
  console.log('Evento click Gato ', event)
  // Falta codigo para que el gato rote
  const imagenGato = document.getElementById('gatoImg')
  imagenGato.dataset.angulo = parseInt(imagenGato.dataset.angulo) + 90

  imagenGato.dataset.alias
  // anguloGato += 90
  imagenGato.style.transform = `rotate(${imagenGato.dataset.angulo}deg)`
}

const botonParaRotarGato = document.getElementById('rotarGato')
botonParaRotarGato.addEventListener('click', rotate)
