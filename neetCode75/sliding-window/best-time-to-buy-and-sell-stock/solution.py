class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        lowest = prices[0]

        for i in range(len(prices)):
            lowest = min(lowest, prices[i])
            max_profit = max(max_profit, prices[i] - lowest)

        return max_profit

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        lowest = prices[0]

        for i in range(1, len(prices)):
            curr_price = prices[i]
            if curr_price >= prices[i-1]:
                max_profit = max(max_profit, prices[i]-lowest)
            else:
                lowest = min(lowest, prices[i])

        return max_profit
