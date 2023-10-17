/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num <= 9) return num;

    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    };

    return addDigits(sum);
};