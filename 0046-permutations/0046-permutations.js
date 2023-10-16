/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];

    function backtrack(path, currNums) {
        if (currNums.length === nums.length) {
            res.push(currNums);
            return;
        };

        for (let i = 0; i < path.length; i++) {
            backtrack([...path.slice(0, i), ...path.slice(i+1)], [...currNums, path[i]])
        };  
    };

    if (nums.length) backtrack(nums, [])

    return res;
};