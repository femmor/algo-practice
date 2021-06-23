function oldEnoughToDrink(age) {
  try{
      if(age < 18) {
          throw 'must be 18 or older to drink'
      } else {
          console.log("Drink to stupor!")
      }
  } catch(e) {
      console.log(`Unable to drink: ${e}`)
  }
}

oldEnoughToDrink(17)