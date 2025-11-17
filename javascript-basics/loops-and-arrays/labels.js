outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // If an empty string or canceled, break out of both loops
    if (!input) break outer;
    alert(input);
  }
}

alert("Done!");
