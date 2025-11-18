class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        tracker = dict()

        for i, val in enumerate(nums):
            if val in tracker:
                pair = [i, tracker[val]]
                return [min(pair), max(pair)]

            else:
                tracker[target - val] = i
