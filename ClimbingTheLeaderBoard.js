process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function search(s, a, i, j, r) {
    //console.log(s.slice(i, j));
    if ((j-i) <= 1) {
        //console.log(i, j, s[i], s[j], r[s[i]], r[s[j]]);
        if (a>s[i]) {
            return (r[s[i]] - 1)>0?r[s[i]] - 1:1;
        } else if (a==s[i]) {
            return r[s[i]];
        } else if (a>s[j]) {
            return r[s[i]]+1;
        } else if (a==s[j]) {
            return r[s[j]]==undefined?r[s[j-1]]:r[s[j]];
        } else {
            return r[s[j]]==undefined?r[s[j-1]]+1:r[s[j]]+1;
        }
    }
    var mid = Math.floor(i+(j-i) / 2);
    //console.log(i, j, mid);
    if (scores[mid] < a) {
        return search(s, a, i, mid, r);
    } else {
        return search(s, a, mid, j, r);
    } 
}

function main() {
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    // build a map of ranks
    var ranks = new Array();
    var rank = 1;
    ranks[scores[0]] = rank;
    for(var j = 1; j < n; j++) {
        if (scores[j] != scores[j-1]) {
            rank++;
            ranks[scores[j]] = rank;
        }
    }
    //console.log(ranks);
    // binary search
    for(var j = 0; j < m; j++) {
        console.log(search(scores, alice[j], 0, scores.length, ranks));
    }
}