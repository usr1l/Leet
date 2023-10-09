/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);

    return candies.map(val => {
        if (val + extraCandies >= max) return true
        else return false;
    });
};