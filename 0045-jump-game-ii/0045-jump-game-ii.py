class Solution:
    def jump(self, nums: List[int]) -> int:
        end = len(nums) - 1
        num_jumps = 0
        curr_max_range = 0
        next_endpoint = 0

        for i in range(end):
            curr_max_range = max(curr_max_range, i+nums[i])

            if curr_max_range >= end:
                num_jumps+=1
                break
        
            if i == next_endpoint:
                num_jumps+=1
                


                next_endpoint = curr_max_range

        return num_jumps