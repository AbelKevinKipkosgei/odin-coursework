const convertToCelsius = function (tempFahrenheit) {
  let tempInCelsius = (tempFahrenheit - 32) * (5 / 9);
  degreesCelsius = Number(tempInCelsius.toFixed(1));
  return degreesCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  const tempInFahrenheit = Number((tempCelsius * (9 / 5) + 32).toFixed(1));
  return tempInFahrenheit;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(42));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
