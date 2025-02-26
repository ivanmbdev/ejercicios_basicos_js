const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

let subArray = []

function removeDuplicates(list) {
  for (let i = 0; i < list.length; i++) {
    let item = list[i]

    // Al poner el signo de exclamación lo que hacemos es comprobar que no lo incluye y
    // si es así pues hace un push y añade el item al array. Sino, pasa al siguiente y lo ignora.
    if (!subArray.includes(item)) {
      subArray.push(item)
    }
  }
  return subArray
}
// Puedo hacer que se lance el console.log fuera del bloque de la función también
console.log(removeDuplicates(duplicates))
