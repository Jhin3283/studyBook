const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = parseInt(input);
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
});
