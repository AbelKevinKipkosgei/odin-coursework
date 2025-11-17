const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// map
const upperCats = cats.map((word) => word.toUpperCase());
console.log(upperCats);

// filter
const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
