const fibonacci = function(place) {
    if (place < 0) return "OOPS";
    if(place < 1) return 0;
    if(place <= 2) return 1;
    let x = 1
    let y = 1
    let z = 0;
    for(let i = 3; i <= place; i++){
        z = x+y;
        x = y;
        y = z;
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
