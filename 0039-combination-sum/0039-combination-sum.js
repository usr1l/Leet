/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    function backtrack(currNums, accum, index) {
      if (accum < 0) return;
      else if (accum === 0) {
        res.push(currNums);
        return;
      };

      // need to account for index here so duplicates won't be processed, starts from the next one every time.
      for (let i = index; i < candidates.length; i++) {
        backtrack([...currNums, candidates[i]], accum - candidates[i], index++)
      };
    };
    if (candidates.length) backtrack([], target, 0);

    return res;
};  