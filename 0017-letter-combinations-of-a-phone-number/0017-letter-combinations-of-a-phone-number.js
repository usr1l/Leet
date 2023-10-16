/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const combinations = {
        '1': '',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    const res = [];

    function backtrack(i, currStr) {
        if (currStr.length === digits.length) {
            res.push(currStr);
            return;
        };

        for (const letter of combinations[digits[i]]) {
            backtrack(i+1, currStr+letter)
        };
    };

    if (digits) backtrack(0, '');
    return res;
};