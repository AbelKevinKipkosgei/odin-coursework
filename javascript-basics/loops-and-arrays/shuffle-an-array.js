// Fisher-Yates shuffling
let arr = [1, 2, 3, 4, 5];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    swap(array, i, j);
  }
  return array;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(shuffle(arr));
