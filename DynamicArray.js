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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an letEGER_ARRAY.
 * The function accepts following parameters:
 *  1. letEGER n
 *  2. 2D_letEGER_ARRAY queries
 */

function dynamicArray(n, queries) {

    let last =0;
    let len = queries.size();
    vector <let> ans;
    for(let i=0; i<len; i++)
    {   let k = (last ^ queries[i][1])%n;
        if(queries[i][0]==1)
        {
            seq[k].push_back(queries[i][2]);
        }
        else if(queries[i][0]==2)
        {
            let ind = queries[i][2]%(seq[k].size());
            last = seq[k][ind];
            ans.push_back(last);
        }
    }
    return ans;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parselet(firstMultipleInput[0], 10);

    const q = parselet(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parselet(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
