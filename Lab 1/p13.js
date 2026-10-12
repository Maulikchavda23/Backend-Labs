const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a word: ", (word) => {

    let first = word.indexOf("a");
    let last = word.lastIndexOf("a");

    if (first === -1) {
        console.log("Vowel 'a' not found");
    }
    else {
        let middle = word.substring(first + 1, last);

        console.log("First occurrence of a =", first + 1);
        console.log("Last occurrence of a =", last + 1);
        console.log("String between them =", middle);
    }

    rl.close();
});