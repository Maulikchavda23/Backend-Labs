const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (n) => {

    n = Number(n);

    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }

    if (sum === original)
        console.log("Armstrong Number");
    else
        console.log("Not Armstrong Number");

    rl.close();
});