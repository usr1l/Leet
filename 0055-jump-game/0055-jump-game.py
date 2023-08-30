class Solution:
    def canJump(self, nums: List[int]) -> bool:
        target = len(nums) - 1

        # go in reverse order, check if each point can reach the target
        for i in range(len(nums) - 2, -1, -1):

            # move target to earliest index it can be reached from
            if nums[i] + i >= target:
                target = i

        # if target can move to 0, return True
        return True if target == 0 else False