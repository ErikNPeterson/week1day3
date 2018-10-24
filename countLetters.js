function countLetters(inputString){
  var inputStringAsArray = inputString.toLowerCase().split("");
  var uniqueCharacters = {};
  inputStringAsArray.forEach(element => {
    if (uniqueCharacters[element] === undefined){
      uniqueCharacters[element] = 1;
    } else {
      uniqueCharacters[element] += 1;
    }
  });
  console.log(uniqueCharacters)
}
countLetters("Lighthouse is ok I look");