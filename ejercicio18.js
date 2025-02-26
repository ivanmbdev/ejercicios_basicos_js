const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

function comprobarId(list, numId1, numId2) {
  // Recorremos el array
  for (let i = 0; i < list.length; i++) {
    // Comprobamos si el id de cada lugar es igual a numId1 o numId2
    if (list[i].id === numId1 || list[i].id === numId2) {
      // Eliminamos el elemento en la posición i
      list.splice(i, 1)
      // Después de eliminar un elemento, reducimos el índice para no saltarnos el siguiente elemento
      i--
    }
  }
  return list
}

console.log(comprobarId(placesToTravel, 11, 40))

// Tengo que repasarlo!!
