numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfTripledEvens = numbersArray
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((sum, current) => sum + current, 0);

console.log(`Sum of tripled evens: ${sumOfTripledEvens}`);
