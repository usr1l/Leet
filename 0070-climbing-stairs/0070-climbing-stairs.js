/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    function climbPath(num, accum, prev) {
        if (n === num) return accum;

        
        return climbPath(num + 1, accum + prev, accum);
    };

    return climbPath(4, 5, 3);
};