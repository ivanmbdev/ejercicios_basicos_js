const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

// La función recibe un array de nombres (nameList) y un nombre a buscar (nameToFind)
function nameFinder(nameList, nameToFind) {
  // Usamos indexOf para obtener el índice del nombre en el array
  const index = nameList.indexOf(nameToFind)

  // Si el nombre no se encuentra, indexOf devuelve -1.
  // La expresión ternaria verifica si el índice es válido:
  //    Si index !== -1 → el nombre existe, devolvemos [true, índice].
  //    Si index === -1 → el nombre no existe, devolvemos false.
  return index !== -1
    ? [true + ', si existe,' + ' y está en la posición: ' + index]
    : 'El nombre no existe en la lista'
}

console.log(nameFinder(names, 'Xabier'))
