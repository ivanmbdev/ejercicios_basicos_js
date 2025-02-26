const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  let suma = 0
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == 'string') {
      suma += list[i].length
    } else {
      suma += list[i]
    }
  }
  console.log(suma)
}

averageWord(mixedElements)
