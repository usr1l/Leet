/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // first fill an array with 1's
    const res = new Array(nums.length).fill(1);

    // approach from two sides, using multipliers, the mulitplier accums with each number that comes before the current
    let leftStarter = 1;
    let rightStarter = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i - 1 < 0) {
            res[i] *= leftStarter; 
        } else {
            leftStarter *= nums[i - 1];
            res[i] *= leftStarter; 
        };
    };

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + 1 >= nums.length) {
            res[i] *= rightStarter;
        } else {
            rightStarter *= nums[i + 1];
            res[i] *= rightStarter
        };
    };

    return res;
};