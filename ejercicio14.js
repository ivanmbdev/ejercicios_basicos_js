const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  let subarray = {}
  list.forEach((acc) => {
    if (subarray[acc]) {
      subarray[acc]++
    } else {
      subarray[acc] = 1
    }
  })
  return subarray
}

console.log(repeatCounter(words))
