const reverseString = function (inputString) {
  let stringToArray = inputString.split(" ");
  let reversedArray = stringToArray.map((element) => {
    let innerElementToArray = element.split("");
    let reversedInnerArray = innerElementToArray.reverse();
    let reversedInnerString = reversedInnerArray.join("");
    return reversedInnerString;
  });

  // Extract reversed elements from the last index
  let reversedInputArray = [];
  for (let start = reversedArray.length - 1; start >= 0; start--) {
    reversedInputArray.push(reversedArray[start]);
  }

  let reversedInput = reversedInputArray.join(" ");
  return reversedInput;
};

console.log(reverseString("hey baby boy"));
// Do not edit below this line
module.exports = reverseString;
