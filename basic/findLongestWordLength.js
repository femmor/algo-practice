// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let newArr = []
  const newStr = str.split(' ')
  newStr.forEach(item => {
    newArr.push(item.length)
  })
  const max = Math.max(...newArr)
  return max
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");