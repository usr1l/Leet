/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a-b)
    let maxFreq = 1;
    let index = 0;

    while (index < nums.length) {
        let freq = 1;
        let currCounter = index + 1;

        while (nums[index] === nums[currCounter]) {
            freq += 1;
            currCounter += 1;
        };

        let backCounter = index - 1;
        let moves = k;

        while (backCounter >= 0 && moves >= 0) {
            if (Math.abs(nums[index] - nums[backCounter]) <= moves) {
                freq += 1;
                moves -= Math.abs(nums[index] - nums[backCounter]);
                backCounter -= 1;
            } else break;
        };
        maxFreq = Math.max(freq, maxFreq)
        index = currCounter;
    };

    return maxFreq;
};