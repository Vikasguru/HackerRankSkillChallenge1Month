function countHighest(high, array){
    var i = 0,
        counter = 0;

    for (i = 0; i < array.length; i++){
        if (array[i] === high){
            counter++;
        }
    }
    
    return counter;
}

function countLowest(low, array){
    var i = 0,
        counter = 0;

    for (i = 0; i < array.length; i++){
        if (array[i] === low){
            counter++;
        }
    }
    
    return counter;
}

function getLowestValue(alphaArr){
    var i = 0,
        low = -1;
    
    for (i = 0; i < alphaArr.length; i++){
        if (alphaArr[i] !== 0) {
            
           if (low === -1){
               low = alphaArr[i];
           } else if (low > alphaArr[i] ){
               low = alphaArr[i];
           }    
        }
    }
    
    return low;
}

function getHighestValue(alphaArr){
    var i = 0,
        high = 0;
    for (i = 0; i < alphaArr.length; i++){
        if (high < alphaArr[i]){
            high = alphaArr[i];
        }
    }
    
    return high;
}

function createAlphaArray(string){
    var i = 0,
        alphaArr = [];
    
    for (i = 0; i < 26; i++){
        alphaArr.push(0);
    }
    
    for (i = 0; i < string.length; i++){
        alphaArr[string.charCodeAt(i) - 97]++;
    }
    
    return alphaArr;
}

function processData(input) {
    var string = '',
        alpha = [],
        high = 0, low = 0,
        numberOfHighs = 0, numberOfLows = 0;
    
    string = input.split('\n')[0];
    alpha = createAlphaArray(string);
    high = getHighestValue(alpha);
    low = getLowestValue(alpha);
    
   // console.log(alpha);
    
    // if the difference of high and low is greater than or equal to 2,
    // string immediately fails
    if (high - low >= 2){
        if (low === 1 && countLowest(low, alpha) === 1){
            console.log('YES');
        } else {
            console.log('NO');
        }
    } else if (high === low){
        console.log('YES');
    } else {
        numberOfHighs = countHighest(high, alpha);
        numberOfLows = countLowest(low, alpha);
        
        // if we have more highs than lows, we must check number of lows
        if (numberOfHighs > numberOfLows){
            if (numberOfLows === 1){
                console.log('YES');
            } else {
                console.log('NO');
            }
        } else if (numberOfLows > numberOfHighs){
            if (numberOfHighs === 1){
                console.log('YES');
            } else {
                console.log('NO');
            }
        } else if (numberOfLows === numberOfHighs){
            if (numberOfHighs === 1){
                console.log('YES');
            }
            else {
                console.log('NO');
            }
        }
    }
    
    //nsole.log('Highest: ' + high + ' | Lowest: ' + low);
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