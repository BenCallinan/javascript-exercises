// Reverse string
const reverseString = function(string) {
    const array = string.split(''); 
    const reverse = array.reverse().join("");
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
