const removeFromArray = function(Arr, ...args) {
    return Arr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
