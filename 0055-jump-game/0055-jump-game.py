class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        max_distance = 0

        for i in range(len(nums)):
            if i > max_distance:
                return False
            curr_reach = i + nums[i]
            max_distance = max(curr_reach, max_distance)
            if max_distance >= len(nums):
                return True

