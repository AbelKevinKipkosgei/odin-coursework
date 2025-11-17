// Methods that work with the end of the array
// last elements with "at"
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.at(-1));

// pop
console.log(fruits.pop());
console.log(fruits);

// push
fruits.push("Pear");
console.log(fruits);

//Methods that work with the beginning of the array
// shift
console.log(fruits.shift());
console.log(fruits);

// unshift
fruits.unshift("Apple");
console.log(fruits);

// push and unshift can add multiple elements at once
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

console.log(fruits);

// for...of loop
// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit);
}

// multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[2][2]);
