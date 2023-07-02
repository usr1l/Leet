/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let diff = 0
    let lowest = prices[0]

    for (let i = 0; i < prices.length - 1; i++) {
        lowest = Math.min(lowest, prices[i + 1])
        if (prices[i + 1] - prices[i] > 0) {
            diff = Math.max(diff, prices[i + 1] - prices[i], prices[i + 1] - lowest)
        };
    ;}
    
    return diff;
};