/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dict) dict[nums[i]]+=1;
        else dict[nums[i]] = 1;

        if (dict[nums[i]] >= Math.ceil(nums.length/2)) {
            return nums[i]
        };
    };
};