const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

        a = Number(a);
        b = Number(b);

        let gcd = 1;

        for (let i = 1; i <= a && i <= b; i++) {
            if (a % i === 0 && b % i === 0) {
                gcd = i;
            }
        }

        console.log("GCD =", gcd);

        rl.close();
    });
});