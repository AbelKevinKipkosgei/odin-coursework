const repeatString = function (stringToRepeat, numberOfTimesToRepeat) {
  let repeatedString = "";
  for (let counter = 0; counter < numberOfTimesToRepeat; counter++) {
    repeatedString += stringToRepeat;
  }
  return repeatedString;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
