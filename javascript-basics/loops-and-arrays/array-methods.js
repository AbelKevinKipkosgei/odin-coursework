// Array methods
// Add/remove items

// splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);
console.log(arr);

let arr1 = ["I", "study", "JavaScript", "right", "now"];
arr1.splice(0, 3, "Let's", "dance");
console.log(arr1);

let arr2 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr2.splice(0, 2);
console.log(removed);

let arr3 = ["I", "study", "JavaScript"];
arr3.splice(2, 0, "complex", "language");
console.log(arr3);

// slice
let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(1, 3));
console.log(arr4.slice(-2));

// concat
let arr5 = [1, 2];
console.log(arr5.concat([3, 4, 5], 6, 7, 8, 9));

// iterate: forEach
names = ["Bilbo", "Gandalf", "Nazgul"];

names.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// searching an array
let arr6 = [1, 0, false, NaN];

// indexOf
console.log(arr6.indexOf(0));
console.log(arr6.indexOf(1));
console.log(arr6.lastIndexOf(1));
console.log(arr6.indexOf(false));
console.log(arr6.indexOf(null));

// includes
console.log(arr6.includes(1));
console.log(arr6.includes(NaN));

// find
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let user = users.find((item) => item.id == 1);
console.log(user);
console.log(user.name);

// findIndex
console.log(users.findIndex((user) => user.name == "John"));

//findLastIndex
console.log(users.findLastIndex((users) => users.name == "John"));

// filter
let users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let someUsers = users.filter((item) => item.id > 2);
console.log(someUsers);

// transform an array
// map
let namesLength = names.map((item) => item.length);
console.log(namesLength);

// sort(fn)
let numbers = [1, 2, 15, 11, 6, 5, 9, 22];
let sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);

// localCompare
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => a.localeCompare(b)));

// reverse
let arrNumbers = [1, 2, 3, 4, 5];
arrNumbers.reverse();
console.log(arrNumbers);

// split
let allNames = "Bilbo, Gandalf, Nazgul";
let arr7 = allNames.split(", ");

for (let oneName of arr7) {
  console.log(`A message to ${oneName}.`);
}

// join
let arr8 = ["Bilbo", "Gandalf", "Nazgul"];
let str1 = arr8.join(";");
console.log(str1);

// reduce
let arr9 = [1, 2, 3, 4, 5];
let result = arr9.reduce((sum, current) => sum + current, 0);
console.log(result);

// Array.isArray
console.log(Array.isArray([]));
console.log(Array.isArray({}));
