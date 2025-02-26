function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return 'El número mayor es ' + numberOne
  } else if (numberOne < numberTwo) {
    return 'El número mayor es ' + numberTwo
  } else {
    return 'Los números son iguales'
  }
}

console.log(greaterNumber(20, 20))
