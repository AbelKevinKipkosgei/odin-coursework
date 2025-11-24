const repeatString = function (stringToRepeat, numberOfTimesToRepeat) {
  let repeatedString = "";
  if (numberOfTimesToRepeat < 0) {
    return `ERROR`;
  }
  for (let counter = 0; counter < numberOfTimesToRepeat; counter++) {
    repeatedString += stringToRepeat;
  }
  return repeatedString;
};

console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
