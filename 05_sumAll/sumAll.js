const sumAll = function(intOne, intTwo) {
    arr = [];
    let sum = 0;

    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) return "ERROR";

    let num = Math.min(intOne, intTwo) - 1;
    console.log(num);
    let count = Math.max(intOne, intTwo);
    console.log(count);

    if (num < 0 || count < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < count; i++) {
            num++;
            arr.push(num);
            sum += arr[i];
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
