function capitalize(text) {

  let lower = text.toLowerCase()
  let capitalized = lower.charAt(0).toUpperCase() + lower.slice(1)  

  return capitalized; 
}

console.log(capitalize('hello')) // should print 'Hello'
console.log(capitalize('WELCOME')) // should print 'Welcome'