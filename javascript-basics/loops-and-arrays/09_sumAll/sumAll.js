const sumAll = function (start, end) {
  let sum = 0;
  if (
    [start, end].some(
      (n) => typeof n !== "number" || !Number.isInteger(n) || n < 0
    )
  ) {
    return `ERROR`;
  }

  if (start > end) {
    for (let i = start; start >= end; start--) {
      sum += start;
    }
    return sum;
  } else if (start < end) {
    for (let x = start; start <= end; start++) {
      sum += start;
    }
    return sum;
  }
};

console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
