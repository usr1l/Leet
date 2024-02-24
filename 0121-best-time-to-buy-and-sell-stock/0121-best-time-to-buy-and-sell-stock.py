class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_diff=0
        lowest=prices[0]

        for i in range(len(prices)-1):
            lowest=min(lowest, prices[i])
            if prices[i+1] > prices[i]:
                max_diff = max(prices[i+1]-lowest, prices[i+1]-prices[i], max_diff)

        return max_diff
        