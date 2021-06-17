// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(elem => {
    if (arr2.indexOf(elem) === -1) {
      newArr.push(elem);      
    }
  });

  arr2.forEach(elem => {
    if(arr1.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  })

  return newArr.sort((a, b) => a - b);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);