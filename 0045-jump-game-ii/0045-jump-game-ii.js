/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;
    let numJumps = 0;
    let currReach = 0;
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        currReach = Math.max(currReach, nums[i] + i);

        if (currReach >= nums.length - 1) {
            numJumps += 1;
            break;
        };

        if (maxReach === i) {
            maxReach = currReach;
            numJumps += 1;
        };
    };

    return numJumps;
};