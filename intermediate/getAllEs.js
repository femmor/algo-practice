const count_e = (str) => {
  let count = 0

  for(i = 0; i < str.length; i++) {
      let char = str[i]
      if(char === 'e'){
          count += 1
      }
  }

  return count
} 

count_e('Emmanuel')