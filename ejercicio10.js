const numbers = [12, 21, 38, 5, 45, 37, 6]

let number = 0
let sumNumber = 0
let promedio = 0

function average(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    number = numberList[i]
    sumNumber = sumNumber + number
  }
  promedio = sumNumber / numberList.length
  console.log(promedio)
}

average(numbers)
