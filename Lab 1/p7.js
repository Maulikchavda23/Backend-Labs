const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (n) => {

    n = Number(n);

    console.log("Factors:");

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }

    rl.close();
});