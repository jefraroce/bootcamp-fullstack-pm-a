const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function (event) {
  event.preventDefault()
  const campoNombre = formulario.querySelector('#nombre')
  if (campoNombre === 'jeisson') {
    alert('El nombre debe en mayúsculas')
  }
})
