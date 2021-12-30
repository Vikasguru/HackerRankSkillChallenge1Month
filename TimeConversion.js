'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "12:01:00";
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
const [time] = s.split(" ");
let [hours, minutes,seconds] = time.split(":");
if (hours === "12" && seconds.includes('AM')) {
hours = "00";
let sec = seconds.split('')
let digit1= sec[0]
let digit2=sec[1]
seconds = digit1 + digit2
} else if (seconds.includes('PM') && hours != "12") {
hours = parseInt(hours, 10) + 12;
let sec = seconds.split('')
let digit1= sec[0]
let digit2=sec[1]
seconds = digit1 + digit2
}else if (seconds.includes('AM') || hours === "12"){
let sec = seconds.split('')
let digit1= sec[0]
let digit2=sec[1]
seconds = digit1 + digit2
}
return `${hours}:${minutes}:${seconds}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
