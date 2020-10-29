let productos = ''

for (let i = 0; i < 20; i++) {
  const color = faker.commerce.color()
  const nombre = faker.commerce.product()
  const precio = faker.commerce.price()

  productos += `{ nombre: "${nombre}", color: "${color}", precio: ${precio} },`
}

console.log(productos)
