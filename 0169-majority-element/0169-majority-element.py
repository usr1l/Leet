class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mapper = {}

        for i in range(len(nums)):
            if nums[i] not in mapper:
                mapper[nums[i]] = 1
            else:
                mapper[nums[i]]+=1

            if mapper[nums[i]] >= math.ceil(len(nums)/2):
                p1 = nums[i]
                return p1
