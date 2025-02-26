const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const adults = []
const young = []

for (const user of users) {
  if (user.years >= 18) {
    adults.push(user.name)
  } else {
    young.push(user.name)
  }
}
console.log('Usuarios mayores de edad: ' + adults)
console.log('Usuarios menores de edad: ' + young)
