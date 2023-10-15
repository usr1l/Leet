/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];
            if (currSum === target) return currSum;
            closest = Math.abs(target - closest) > Math.abs(target - currSum) ? currSum : closest;
            if (currSum < target) left++;
            else if (currSum > target) right--; 
        };

    };
    return closest;
}; 