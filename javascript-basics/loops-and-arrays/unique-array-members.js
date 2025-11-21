let stringsArray = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let result = [];
  for (let item of arr) {
    if (result.includes(item)) {
      continue;
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(unique(stringsArray));
