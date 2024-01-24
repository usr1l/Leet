class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        len_n = len(nums)
        return ((len_n * (len_n + 1))//2)-(sum(nums))