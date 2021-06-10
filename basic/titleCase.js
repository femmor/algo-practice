// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
  const capital = []
  str.split(' ').forEach(item => {
    const lower = item.slice(0, item.length).toLowerCase()
    const upper = item.slice(0, 1).toUpperCase()
    const newWord = upper + lower.slice(1)
    capital.push(newWord)
  })
  return capital.join(' ')
}

titleCase("I'm a little tea pot");