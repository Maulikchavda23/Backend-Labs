const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (n) => {
  n = Number(n);

  let original = n;
  let reverse = 0;

  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
  }

  if (original === reverse) console.log("Palindrome");
  else console.log("Not Palindrome");

  rl.close();
});
