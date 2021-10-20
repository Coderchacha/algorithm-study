const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on("line", (line) => {
  inputs = line.split(" ").map((el) => Number(el));
}).on("close", () => {
  let hour = inputs[0];
  let min = inputs[1];

  let date = new Date(2020, 1, 1, hour, min);
  date.setMinutes(date.getMinutes() - 45);

  console.log("" + date.getHours() + " " + date.getMinutes());

  process.exit();
});
