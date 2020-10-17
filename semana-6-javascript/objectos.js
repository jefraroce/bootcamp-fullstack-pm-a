console.log('Archivo de Objecto.js')

// Son conjuntos de datos relacionados

var arregloCarro = ['Ford', 'YOK654', 'rojo', 250]

var carroQueMeVoyComprar = {
  marca: 'Ford',
  placa: 'YOK654',
  color: 'rojo',
  velocidadMaxima: 250
}

var carroActual = {
  marca: 'BMW',
  placa: 'YOK653',
  color: 'negro',
  velocidadMaxima: 400,
  cambiarColor: function (color) {
    console.log('this ', this)
    this.color = color
  }
}

//-----

var cursos = [
  {
    nombre: 'js',
    duraccion: 25
  },
  {
    nombre: 'css',
    duraccion: 24
  },
  {
    nombre: 'html',
    duraccion: 20
  },
  {
    nombre: 'angular',
    duraccion: 30
  }
]

// cursos.forEach((c) => {
//   console.log(c.nombre)
// })

function cursoConMayorDuraccion() {
  // Digo que el primero sera el mayor por defecto
  let cursoSeleccionado = cursos[0]

  // Comienzo a validar desde el segundo elemento
  for (let i = 1; i < cursos.length; i++) {
    // Guardo 
    const curso = cursos[i]
    if (cursoSeleccionado.duraccion < curso.duraccion) {
      cursoSeleccionado = curso
    }
  }

  console.log(`El curso que tiene la mayor duracción es '${cursoSeleccionado.nombre}' y dura ${cursoSeleccionado.duraccion} horas`)
}

cursoConMayorDuraccion()


//             0  1  2
var arreglo = [5, 4, 6]

function calcularMayor() {
  let elMayor = arreglo[0] // 5
  for (let i = 0; i < arreglo.length; i++) {
    // i = 2
    //     5    <     6
    if (elMayor < arreglo[i]) {
      elMayor = arreglo[i] // 6
    }
  }
}

function calcularMenor() {
  let elMenor = arreglo[0] // 5
  for (let i = 0; i < arreglo.length; i++) {
    // i = 3
    //     4    >     6
    if (elMenor > arreglo[i]) {
      elMenor = arreglo[i] // 4
    }
  }
}


var persona = {
  // Propiedades, valores, variables, atributos
  nombre: 'Jeisson',

  edad: 29,

  // Metodos
  saludar: function (nombre) {
    console.log(`Hola, ${nombre}`)
  },

  presentarse: function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

persona.envejecer = function () {
  this.edad += 1
}

const posiblesCursos = ['js', 'css', 'html', 'angular']

const crearCurso = function (nombre, duraccion) {
  if (typeof nombre === 'string' && posiblesCursos.includes(nombre)) {
    if (typeof duraccion === 'number' && duraccion >= 1 && Number.isInteger(duraccion)) {
      return { nombre: nombre, duraccion: duraccion }
    } else {
      console.log('La duracción debe ser un número entero mayor e igual a uno (1).')
    }
  } else {
    console.log('El nombre que ingresaste no es valido. Debes ingresar uno de los siguientes valores ' + posiblesCursos)
  }
}

// Taller

// Crear un arreglo con 4 cursos

// var curso1 = crearCurso('angular', 1)

