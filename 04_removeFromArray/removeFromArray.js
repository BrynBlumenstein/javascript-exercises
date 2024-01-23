const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;