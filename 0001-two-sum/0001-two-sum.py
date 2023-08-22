class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        matches: {} = {}
        for i, num in enumerate(nums):
            if target - num in matches:
                return [matches[target - num], i]
            else:
                matches[num] = i
        
        return []