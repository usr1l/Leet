/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let length = nums.length;
    for (let i = 0; i < length; i ++) {
        if (nums[i] > 0) {
            nums[nums[i] + length] = nums[i];
        };
    }; 

    for (let i = length + 1; i <= nums.length; i++) {
        if (nums[i] !== i - length) return i - length;
    };    
    
    return nums[length - 1] < 1 ? 1 : length;
};