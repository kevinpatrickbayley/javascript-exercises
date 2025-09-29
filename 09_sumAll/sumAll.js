const sumAll = function(x,y) {
    if (typeof x !== 'number' || !Number.isFinite(x) || !Number.isInteger(x) || x < 0){return 'ERROR';} 
    if (typeof y !== 'number' || !Number.isFinite(y) || !Number.isInteger(y) || y < 0){return 'ERROR';} 
    
    let arr = [];
    arr.push(x);
    arr.push(y);
    arr.sort();
    let sum = 0;
    for(i=arr[0];i<=arr[1]; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
