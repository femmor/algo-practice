// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // store the results as an array
  let results = [];
  // outer loop to iterate through the outer array
  for (let i = 0; i < arr.length; i++) {
    // second variable to hold the largest number and initialise it with the first number.
    let largestNumber = arr[i][0];
    // inner loop to work with the sub-arrays
    for (let j = 1; j < arr[i].length; j++) {
      // Check if the element of the sub array is larger than the currently stored largest number. 
      if (arr[i][j] > largestNumber) {
        // If so, then update the number in the variable
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);