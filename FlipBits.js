'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {

// declare variables for binary, inverse binary, and decimal result
  let lowBin = ''
  let highBin= ''
  let result = 0
// convert input decimal to binary
  while (n >= 1) {
    const rem = n % 2
    lowBin += rem
    rem === 1 ?
      n = Math.floor(n / 2) :
        n /= 2
  }
// adjust binary to 32 bits
  while (lowBin.length < 32) {
    lowBin += 0
  }
// reverse and invert each bit of binary
  for (let i = lowBin.length - 1; i >= 0; i--) {
    highBin += lowBin[i] === '0' ? '1' : '0'
  }
// convert binary to decimal output
  for (let i = 0; i < highBin.length; i++) {
    const expo = highBin.length - 1 - i
    result += highBin[i] * (2 ** expo)
  }
  return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
