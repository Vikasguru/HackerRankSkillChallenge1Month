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
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function counterGame(n) {
    let move = 0;
    while(n > 1) {
        let power = parseInt(Math.log2(n));
        let max = 2**power;
        if(n === max) {
            n  = parseInt(n/2);
        } else {
            n = n - max;
        }
        move++;
    }
    if(move %2 === 0) {
        return 'Richard';
    } else {
        return 'Louise';
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = counterGame(n);

        ws.write(result + '\n');
    }

    ws.end();
}
