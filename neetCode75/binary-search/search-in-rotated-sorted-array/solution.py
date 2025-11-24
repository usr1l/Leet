class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # base case, if the array only has one element
        if len(nums) == 1:
            return 0 if nums[0] == target else -1
        l, r = 0, len(nums) - 1

        while l < r:
            # or mid = (l + r) // 2
            mid = l + (r - l) // 2
            if nums[mid] == target:
                return mid
            if nums[r] == target:
                return r
            if nums[l] == target:
                return l

            # two scenarios, if the array is pivoted on the left or right side
            # check if mid is less than or greater than left
            if nums[mid] > nums[l]:
                if target > nums[mid] or target < nums[r]:
                    l = mid + 1
                else:
                    r = mid
            else:
                if target < nums[mid] or target > nums[l]:
                    r = mid
                else:
                    l = mid + 1

        return -1
