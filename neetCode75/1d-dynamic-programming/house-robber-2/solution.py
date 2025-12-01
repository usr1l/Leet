class Solution:
    def rob(self, nums: List[int]) -> int:


        def houses(nums):
            path1, path2 = 0, 0
            for n in nums:
                temp = max(path1+n, path2)
                path1 = path2
                path2 = temp
            return path2

        return max(nums[0], houses(nums[1:]), houses(nums[:-1]))
