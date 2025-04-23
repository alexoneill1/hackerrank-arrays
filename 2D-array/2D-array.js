// run OUTPUT_PATH=2D-array-output.txt node 2D-array.js < 2D-array-input.txt

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Write your code here
  // Write your code here
  // create an hourglass from each position
  // what is the pattern?
  // if position i = 0, then we would want to move until i = length of array
  // element arr[i][j, j+1, j+2] + arr[i+1][j+1] + arr[i+2][j, j+1, j+2]
  // append result to array
  // Math.max of the array
  let i = 0;
  let results = [];
  while (i < arr.length - 2) {
    let currentLine = i;
    let j = 0;
    while (j < arr[0].length - 2) {
      let hourGlass =
        arr[currentLine][j] +
        arr[currentLine][j + 1] +
        arr[currentLine][j + 2] +
        arr[currentLine + 1][j + 1] +
        arr[currentLine + 2][j] +
        arr[currentLine + 2][j + 1] +
        arr[currentLine + 2][j + 2];
      results.push(hourGlass);
      j += 1;
    }
    i += 1;
  }
  return Math.max(...results);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
