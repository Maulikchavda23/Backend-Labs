const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (n) => {
  n = Number(n);
  let prime = true;

  if (n <= 1) {
    prime = false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  if (prime) console.log(n + " is Prime");
  else console.log(n + " is Not Prime");

  rl.close();
});
