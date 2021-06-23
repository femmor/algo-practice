function frankenSplice(arr1, arr2, n) {
  let newArr = []
  const startIndex = n
  const amountToDelete = 0

  newArr = arr2.slice(startIndex, amountToDelete, [...arr1])
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));