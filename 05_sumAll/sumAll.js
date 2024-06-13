const sumAll = function(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return 'ERROR';
    } else if (Math.min(x,y) < 0) {
        return 'ERROR';
    }

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    let sum = 0;
    for (i = x; i <= y; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
