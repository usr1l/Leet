/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];


    function backtrack(num, currNums) {
        if (currNums.length === k) {
          // when backtracking, push a copy of the array, and not the array itself, to avoid pushed array values from altering
            res.push([...currNums]);
            return;
        };

        for (let i = num; i <= n; i++) {
            currNums.push(i);
            backtrack(i + 1, currNums);
            currNums.pop();
        };
    };

    backtrack(1, [])
    return res;
};