const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
  let answer = "";

  for (let i = 1; i <= N; i++) {
    tmp = input[i].split(" ");
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
  }

  console.log(answer);
}
