const camelize = (inputString) => {
  const splitArray = inputString.split("-");
  const camelizedArray = splitArray.map((word, index) => {
    return index === 0
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const camelizedString = camelizedArray.join("");
  return camelizedString;
};

console.log(camelize("border-left-width"));
