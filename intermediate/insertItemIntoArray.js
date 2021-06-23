const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
]

const items = ["L", "O", "E"]
let result = insert(items, 2, "V")
console.log(result)