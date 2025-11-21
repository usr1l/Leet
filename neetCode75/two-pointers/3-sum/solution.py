class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        passed = set()
        list_len = len(nums)
        res = []
        nums.sort()

        i = 0
        while i < list_len and nums[i] <= 0:
            curr_num = nums[i]
            if curr_num in passed:
                i+=1
                continue
            start, end = i+1, list_len - 1

            while start < end:
                three_sum = curr_num + nums[start] + nums[end]
                if three_sum > 0:
                    end -= 1

                elif three_sum < 0:
                    start += 1

                else:
                    res.append([curr_num, nums[start], nums[end]])
                    start += 1
                    while nums[start] == nums[start - 1] and start<end:
                        start += 1

            i+=1
            passed.add(curr_num)

        return res
