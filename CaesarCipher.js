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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
   let result = '';
  
  for (let i = 0; i < s.length; i++) {

    let charCode = s[i].charCodeAt();
    // check that charCode is a lowercase letter; automatically ignores non-letters
    if (charCode > 96 && charCode < 123) {
      
      charCode += k % 26 // makes it work with numbers greater than 26 to maintain correct shift
      // if shift passes 'z', resets to 'a' to maintain looping shift
      if (charCode > 122) {
        charCode = (charCode - 122) + 96;
      // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
      } else if (charCode < 97) {
        charCode = (charCode - 97) + 123;
      }
    }

    if (charCode > 64 && charCode < 91) {
      
      charCode += k % 26
      
      if (charCode > 90) {
        charCode = (charCode - 90) + 64;
      } else if (charCode < 65) {
        charCode = (charCode - 65) + 91;
      }
    }

    result += String.fromCharCode(charCode);
  }
  return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
