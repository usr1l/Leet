/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1 ) return true;
    if (n < 1) return false;

    n = n / 2;

    return isPowerOfTwo(n);
};