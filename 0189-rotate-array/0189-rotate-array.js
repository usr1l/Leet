/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1) return nums;

    let r = k % nums.length;

    function reversal(start, end) {
        while (start < end) {
            if (nums[start] === undefined || nums[end] === undefined) return;
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++;
            end--;
        };
    };

    reversal(0, nums.length - 1);
    reversal(0, r-1);
    reversal(r, nums.length - 1)
};