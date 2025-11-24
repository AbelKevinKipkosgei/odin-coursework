const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else if (year % 400 !== 0) {
        return false;
      }
    } else if (year % 100 !== 0) {
      return true;
    }
  } else return false;
};

console.log(leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
