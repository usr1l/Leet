/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);

    for (let index in candies) candies[index] = candies[index] + extraCandies >= max;

    return candies;
};