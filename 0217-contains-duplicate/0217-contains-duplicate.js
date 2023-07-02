/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    visited = {};
    for (const i in nums) {
        if (!visited[nums[i]]) {
            visited[nums[i]] = 1;
        } else {
        return true;
        };
    };

    return false;
};