const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (0-999): ", (input) => {

    let n = Number(input);

    let ones = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];

    let teens = [
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    let tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    let result = "";

    if (input.trim() === "" || isNaN(n)) {
        result = "Not a number";
    }
    else if (n < 0 || n > 999) {
        result = "Out of range";
    }
    else if (n < 10) {
        result = ones[n];
    }
    else if (n < 20) {
        result = teens[n - 10];
    }
    else if (n < 100) {
        result = tens[Math.floor(n / 10)];

        if (n % 10 !== 0) {
            result += " " + ones[n % 10];
        }
    }
    else {
        result = ones[Math.floor(n / 100)] + " Hundred";

        let remainder = n % 100;

        if (remainder >= 10 && remainder < 20) {
            result += " " + teens[remainder - 10];
        }
        else if (remainder >= 20) {
            result += " " + tens[Math.floor(remainder / 10)];

            if (remainder % 10 !== 0) {
                result += " " + ones[remainder % 10];
            }
        }
        else if (remainder !== 0) {
            result += " " + ones[remainder];
        }
    }

    console.log(result);

    rl.close();
});