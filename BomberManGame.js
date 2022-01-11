function processData(input) {
    //Enter your code here
    var lines = input.split("\n");
    var line = lines[0];
    var elms = line.split(" ");
    var r = parseInt(elms[0]);
    var c = parseInt(elms[1]);
    var n = parseInt(elms[2]);
    var map = [];
    for(var i = 1; i <= r; i++){
        var tRow = lines[i].split("");
        var row = [];
        for(var j = 0; j < c; j++){
            if(tRow[j] === "."){
                row.push(-1);
            } else {
                row.push(3);
            }
        }
        map.push(row);
    }
    var repeat;
    if(n < 2){
        repeat = 0;
    } else if(n%2 === 0){
        repeat = 2;
    } else if ((n+1)%4 === 0){
        repeat = 3;
    } else if ((n-1)%4 === 0){
        repeat = 5;
    }
    for(var i = 2; i <= repeat; i++){
        for(var j = 0; j < r; j++){
            for(var k = 0; k < c; k++){
                if(i === map[j][k] && i%2 === 1){
                    map[j][k] = -1;
                    if(j !== 0 && map[j-1][k] < i+3 && map[j-1][k] !== i){
                        map[j-1][k] = -1;
                    }
                    if(j !== r-1 && map[j+1][k] < i+3 && map[j+1][k] !== i){
                        map[j+1][k] = -1;
                    }
                    if(k !== 0 && map[j][k-1] < i+3 && map[j][k-1] !== i){
                        map[j][k-1] = -1;
                    }
                    if(k !== c-1 && map[j][k+1] < i+3 && map[j][k+1] !== i){
                        map[j][k+1] = -1;
                    }
                } else if(i%2 === 0 && map[j][k] === -1){
                    map[j][k] = i+3;
                }
            }
        }
    }
    for(var i = 0; i < r; i++){
        var line = "";
        for(var j = 0; j < c; j++){
            if(map[i][j] > -1){
                line+="O";
            } else {
                line += ".";
            }
        }
        console.log(line);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});