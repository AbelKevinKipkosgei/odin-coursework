let arr = [5, 2, 1, -10, 8];

const sortedArray = arr.sort((a, b) => b - a);
const sortedNumbers = sortedArray.join(", ");
console.log(sortedNumbers);
