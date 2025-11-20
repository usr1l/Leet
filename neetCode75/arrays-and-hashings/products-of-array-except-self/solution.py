class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1 for val in nums]
        accum = 1

        for i in range(len(nums) - 1):
            accum *= nums[i]
            res[i+1] *= accum

        accum = 1
        for i in range(len(nums)-1, 0, -1):
            accum *= nums[i]
            res[i-1] *= accum

        return res
