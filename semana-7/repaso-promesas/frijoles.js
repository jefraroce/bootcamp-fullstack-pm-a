const prepararFijoles = new Promise((notificarExito, notificarError) => {
  console.log('1. agregar agua')
  console.log('2. agregar frijoles')
  console.log('3. agregar guiso')
  console.log('4. agregar platano')
  console.log('5. agregar carne de cerdo')
  console.log('6. poner a fuego medio')

  const estanCocidos = true

  if ( estanCocidos ) {
    notificarExito('Los frijoles estan listos 😊')
  } else {
    notificarError('Los frijoles se quemarón 😭')
  }
})

prepararFijoles
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.error(error)
  })

console.log('Poner la mesa')
