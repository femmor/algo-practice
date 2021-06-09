// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// Solution 1 - with .repeat() method

// function repeatStringNumTimes(str, num) {
//   return str.repeat(num);
// }

// Solution 2

function repeatStringNumTimes(str, num) {
  let newStr = ''
  for(let i = 1; i <= num; i++) {
    if(num <= 0) {
      return ""
    } else {
      newStr += str
    }
  }
  return newStr
}

repeatStringNumTimes("abc", 3);