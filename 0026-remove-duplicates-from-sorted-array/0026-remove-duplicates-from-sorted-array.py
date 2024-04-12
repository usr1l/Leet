class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        p1 = 0
        for i in range(len(nums)):
            if nums[p1] == nums[i]:
                continue
            else:
                nums[p1+1] = nums[i]
                p1+=1
        
        return p1+1