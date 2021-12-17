const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);
function solution(N) {
  for (let i = 1; i <= N; ++i) {
    const starCnt = i;
    const spaceCnt = N - i;
    let answer = "";
    for (let i = 0; i < spaceCnt; ++i) {
      answer += " ";
    }
    for (let i = 0; i < starCnt; ++i) {
      answer += "*";
    }
    console.log(answer);
  }
}
