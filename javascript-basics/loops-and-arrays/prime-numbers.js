let n = 10;

nextPrime: for (let i = 2; i <= 10; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }
  console.log(i);
}
