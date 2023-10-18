/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (!digits.length) return [];
    let start = digits.length - 1;
    let carry = 1;
 while (carry > 0 && start >= 0) {
        if (digits[start] + 1 === 10) {
            digits[start] = 0;
            carry = 1;
        } else {
            digits[start]+=1;
            carry = 0;
        }
        start--;

    }
    if (carry) digits.unshift(1);
    return digits;
};