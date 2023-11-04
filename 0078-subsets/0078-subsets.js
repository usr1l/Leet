/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    function backTrack(start, accum) {
        // push a copy
        res.push([...accum]);

        // loop through and backtrack
        for (let i = start; i < nums.length; i ++) {
            accum.push(nums[i])
            backTrack(i + 1, accum);

            // remove item before adding next number for all instances
            accum.pop();
        };
    };

    backTrack(0, [])

    return res;
};