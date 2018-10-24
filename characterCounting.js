function countLetters(inputString){
  var inputStringAsArray = inputString.toLowerCase().split("");
  var uniqueCharacters = {};
  inputStringAsArray.forEach((element, index) => {
    if (uniqueCharacters[element] === undefined){
      uniqueCharacters[element] = [index];
    } else {
      uniqueCharacters[element].push(index);
    }
  });
  console.log(uniqueCharacters)
}
countLetters("Lighthouse is ok I look");

// alternate way to create string instead of array for list of index

// uniqueCharacters[element] = index + ",";
// } else {
//   uniqueCharacters[element] += index ",";
// }