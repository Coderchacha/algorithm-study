const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0], input[1]);
function solution(A, B) {
  //B의 자리수마다 하나씩 꺼내와야 하기 때문에 일단 문자열로 바꿔준다.
  const bToString = String(B);
  const one = bToString[2];
  const ten = bToString[1];
  const hundered = bToString[0];

  console.log(A * one);
  console.log(A * ten);
  console.log(A * hundered);
  console.log(A * B);
}
