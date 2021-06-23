function testEqual(text) {
    const testText = text.charAt(0) === text.charAt(text.length - 1) ? true : false 
    return testText
}

console.log(testEqual("love"))