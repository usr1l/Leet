class Solution:
    def rob(self, nums: List[int]) -> int:

        maxNum1, maxNum2 = 0, 0

        for n in nums:
            temp = max(maxNum1 + n, maxNum2)
            maxNum1 = maxNum2
            maxNum2 = temp

        return maxNum2
