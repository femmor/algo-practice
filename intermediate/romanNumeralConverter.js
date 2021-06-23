// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

const converted = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

function convertToRoman(num) {
 let final = ''

 for(let roman in converted) {
   while(num >= converted[roman]) {
     num -= converted[roman]
     final += roman
   }
 }
 return final
}

convertToRoman(36);