const removeFromArray = function (inputArray, ...itemsToRemove) {
  let filteredArray = inputArray.filter((element) => {
    return !itemsToRemove.includes(element);
  });
  return filteredArray;
};

console.log(removeFromArray([1, 2, 2, 3, 3, 4, 5, 6], 3, 2, 7, "tacos"));
// Do not edit below this line
module.exports = removeFromArray;
