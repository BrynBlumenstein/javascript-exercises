const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

    if (num1 < num2) {
        from = num1;
        to = num2;
    } else {
        from = num2;
        to = num1;
    }

    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
