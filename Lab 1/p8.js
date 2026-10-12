const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter starting number: ", (start) => {
    rl.question("Enter ending number: ", (end) => {

        start = Number(start);
        end = Number(end);

        console.log("Prime numbers:");

        for (let n = start; n <= end; n++) {

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

            if (prime) {
                console.log(n);
            }
        }

        rl.close();
    });
});