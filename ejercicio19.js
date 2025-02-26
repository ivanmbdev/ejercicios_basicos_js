const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]

for (const toy of toys) {
  if (toy.name.toUpperCase().includes('GATO')) {
    toys.splice(toys.indexOf(toy), 1)
  }
}

console.log(toys)

// subArray = []

// for (const toy of toys) {
//   if (toy.name.toLowerCase().includes('gato')) {
//     subArray.push(toy)
//   }
// }

// console.log(subArray)
