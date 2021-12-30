'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {

// Reducer to Walk throught each Element in Array    
let sum = arr.reduce((a,b ) => a+b);

// Using Spread Operator and Math Max Function to add all the Array Number
let MaxVal = Math.max(...arr);

// Using Spread Operator and Math Min Function to Reduce all the Array Number
let MinVal = Math.min(...arr);

console.log((sum - MaxVal) + ' ' + (sum - MinVal));

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
