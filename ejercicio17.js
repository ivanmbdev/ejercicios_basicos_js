/* For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad  tiene cómo valor: "

Puedes usar este objeto: */

const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

for (const key in alien) {
  console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`)
}

// for (const key in alien) {
//   console.log('La propiedad ${key} tiene cómo valor: $alien[key]')
// }
