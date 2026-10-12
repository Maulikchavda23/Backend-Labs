const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a 2-digit number: ", (n) => {

    n = Number(n);

    let first = Math.floor(n / 10);
    let second = n % 10;

    let result = 1;

    for (let i = 1; i <= second; i++) {
        result = result * first;
    }

    console.log("First digit =", first);
    console.log("Second digit =", second);
    console.log("Result =", result);

    rl.close();
});