# mid formulas:
# mid = (l + r) // 2
# mid = l + (r - l) // 2

class Solution:
    def findMin(self, nums: List[int]) -> int:
        if nums[0] < nums[len(nums)-1] or len(nums) == 1:
            return nums[0]

        l, r = 0, len(nums) - 1

        while l < r:
            if (1 + l + r) % 2 == 0:
                mid = ((l + r + 1) // 2) - 1
            else:
                mid = (l + r + 1) // 2
            if nums[mid] > nums[mid+1]:
                return nums[mid+1]

            if abs(nums[mid] - nums[l]) > abs(nums[mid] - nums[r]):
                r = mid
            else:
                l = mid
