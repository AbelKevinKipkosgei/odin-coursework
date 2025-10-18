// Function example
function favoriteAnimal(animal) {
  return `${animal} is my favorite animal!`;
}

const message = favoriteAnimal("Horse");
console.log(message);

// Arrow function
let sum = (a, b) => a + b;
console.log(sum(159, 287));

let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

welcome();
