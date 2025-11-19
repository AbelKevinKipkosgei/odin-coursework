let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  const copySortedArray = arr.slice().sort();
  console.log(copySortedArray);
  console.log(arr);
};

copySorted(arr);
