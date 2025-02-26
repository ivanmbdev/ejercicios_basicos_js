const numbers = [1, 2, 3, 4, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let suma = 0
  let number = 0
  for (let i = 0; i < numberList.length; i++) {
    number = numberList[i]
    suma = suma + number
  }
  console.log(suma)
}

sumNumbers(numbers)
