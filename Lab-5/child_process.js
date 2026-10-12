const child_process = require("child_process");
console.log(child_process);

child_process.exec("node -v", (error, stdout) => {
  if (error) {
    console.error("Error occured:", error.message);
    return;
  }
  console.log("Current node version:", stdout);
});

const cmd = child_process.spawn("cmd", ["/c", "dir"]);

cmd.stdout.on("data", (data) => {
  console.log(`output: ${data}`);
});
cmd.stderr.on("data", (data) => {
  console.error(`error: ${data}`);
});

console.log("Current working directory:", process.cwd());

