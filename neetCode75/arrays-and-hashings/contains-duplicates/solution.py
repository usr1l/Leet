from typing import List

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        tracker = dict()
        for val in nums:
            if val in tracker:
                return True
            else:
                tracker[val] = True
        return False
