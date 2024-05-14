class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        mark = False
        p1 = 1
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1] and mark == True:
                continue
            elif nums[i] == nums[i+1] and mark == False:
                nums[p1] = nums[i+1]
                p1+=1
                mark = True
            else:
                nums[p1] = nums[i+1]
                p1+=1
                mark = False
        return p1

