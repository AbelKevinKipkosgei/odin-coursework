let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  const filteredArray = arr.filter((element) => element >= a && element <= b);
  return filteredArray;
};

console.log(filterRange(arr, 1, 4));
console.log(arr);
