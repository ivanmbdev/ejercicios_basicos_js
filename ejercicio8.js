const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  let longestWord = stringList[0].length
  let index = 0
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord) {
      longestWord = stringList[i].length
      index = i
    }
  }
  console.log(stringList[index])
}

findLongestWord(avengers)
