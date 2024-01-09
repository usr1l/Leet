class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1: 
            return nums

        k = k % len(nums)
        def reverse_inplace(start, end):
            while start < end:
                nums[start], nums[end] = nums[end], nums[start]
                start+=1
                end-=1
        
        reverse_inplace(0, len(nums)-1)
        reverse_inplace(0, k-1)
        reverse_inplace(k, len(nums)-1)


        return nums
