function calculate() {
  for (let i = 1; i <= 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    console.log(newResult);
  }
  console.log("\nFinished!!\n");
}

calculate();

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called: ";

for (let x = 0; x < cats.length; x++) {
  if (x === cats.length - 1) {
    myFavoriteCats += `and ${cats[x]}.`;
  } else {
    myFavoriteCats += `${cats[x]}, `;
  }
}

console.log(myFavoriteCats);
