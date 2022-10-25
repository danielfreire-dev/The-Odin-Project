const palindromes = function (input) {
  //convert to string
  string = String(input);
  //no punctuation
  stringNoPunctuation = string.replace(/[.,\s\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  //lowercase
  stringLowerCase = stringNoPunctuation.toLowerCase();
  //new reversed string

  let splitString = stringLowerCase.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  return stringLowerCase === joinArray;
};

// Do not edit below this line
module.exports = palindromes;
