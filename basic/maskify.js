function maskify(cc) {
  const numShowed = cc.length - 4
  if(cc.length > 4) {
    return numShowed
  } else{
    return cc
  } 
}

console.log(maskify(1234567891056))