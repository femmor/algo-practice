// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let chunked = []
  let count = 0

  while(count < arr.length) {
    const chunk = arr.slice(count, count + size)
    chunked.push(chunk)
    count += size
  }
  return chunked
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);