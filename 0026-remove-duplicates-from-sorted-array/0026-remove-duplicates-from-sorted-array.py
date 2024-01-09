class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        p1 = 1
        for i in range(len(nums) - 1):
            if nums[i] == nums[i+1]: 
                continue
            else:
                nums[p1] = nums[i + 1]
                p1+=1
        return p1