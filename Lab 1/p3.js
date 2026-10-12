const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (n) => {
  n = Number(n);
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  console.log("Factorial =", fact);

  rl.close();
});
