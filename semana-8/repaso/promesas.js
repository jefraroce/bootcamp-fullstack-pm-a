/**
 * 1. No me bloquean, es decir, paralelamente puedo seguir trabajando
 * 2. Siempre debo notificar el exito o el fracaso
 */

const hayQueso = () => false

const prepararSandwich = new Promise((notificarExito, notificarFallo) => {
  console.log('1. Alistar el pan')
  console.log('2. Alistar el contenido (vegetales, carnes, solamente salsas)')

  if ( hayQueso() ) {
    console.log('3. Agregar queso')
    console.log('4. Calentarlo')

    notificarExito('El sandwich esta listo')
  } else {
    notificarFallo('No habia queso 😭')
  }
})

prepararSandwich
  .then(function (resultado) {
    console.log('resultado ', resultado)
  }) // Para cuando las cosas salen bien
  .catch(function (error) {
    console.error('Ocurrió un error durante la preparación: ', error)
  }) // Para cuando las cosas salen mal

console.log('Poner preparar cafe')
console.log('Ver algun programa')

