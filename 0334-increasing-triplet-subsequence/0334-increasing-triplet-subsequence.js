/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Infinity, b = Infinity;
    
    for (const num of nums) {
        if (num <= a) a = num;
        else if (num <= b) b = num;
        else return true;
    };

    return false;
};