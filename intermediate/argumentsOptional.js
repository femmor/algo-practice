// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  // Function to check if a number is actually a number
  function checkNum(num) {
    return (typeof num === "number");
  };

  if (arguments.length === 2) {
    // Check if we have two arguments and if they are numbers
    // Return the sum if they are both numbers
    let first = arguments[0];
    let second = arguments[1];
    if (checkNum(first) && checkNum(second)) {
      return first + second;
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    // If only one argument was found, return a new function
    let first = arguments[0];
    if (checkNum(first)) {
      // Return function that expect a second argument.
      function addSecond(second) {
        // Check if the new argument is a number
        if (checkNum(second)) {
          return first + second;
        } else {
          return undefined;
        }
      };
      return addSecond;
    } else {
      return undefined;
    }
  } else {
    // Incorrect number of arguments found
    return undefined;
  }
}

// test here
addTogether(2, 3);



// Code Explanation

//     Create a function with the sole purpose of checking if a number is actually a number. It uses typeof to check.
//     Check if we have two parameters, if so, then check if they are numbers or not using the checkNum function.
//     If they are numbers, then return their sum. If they either of them is not a number, then return undefined.
//     In the case that we only have one argument, then we return a new function that expects two arguments.
//     We check the first argument, and if it is a number then we return the function expecting a second argument.
//     Inside the new function we are returning, we have to check for non numbers again using checkNum.

