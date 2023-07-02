class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        diff = 0
        lowest = prices[0]
        
        for i in range(len(prices) - 1):
            lowest = min(prices[i + 1], lowest)            
            if prices[i + 1] - prices[i] > 0:
                diff = max(prices[i + 1] - prices[i], diff, prices[i + 1] - lowest)
        
        return diff