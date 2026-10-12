const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of terms: ", (n) => {
  n = Number(n);

  let a = 0;
  let b = 1;
  let result = "";

  for (let i = 1; i <= n; i++) {
    result = result + a + " ";

    let c = a + b;
    a = b;
    b = c;
  }

  console.log("Fibonacci Series:", result);

  rl.close();
});
