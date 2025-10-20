// 1
const add7 = (number) => parseInt(number) + 7;
console.log(add7(15));

// 2
const multiply = (number1, number2) => {
  return number1 * number2;
};
console.log(multiply(82, 10));

// 3
const capitalize = (word) => {
  let titleCaseWord =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return titleCaseWord;
};
console.log(capitalize("aBcD"));

// 4
const lastLetter = (anyWord) => anyWord.slice(-1);
console.log(lastLetter("supper"));
