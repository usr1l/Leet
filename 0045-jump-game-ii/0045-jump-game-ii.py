class Solution:
    def jump(self, nums: List[int]) -> int:
        # the index we want to hit
        target = len(nums) - 1

        # number of jumps so far
        num_jumps = 0

        # the current farthest range we can go
        curr_max_range = 0

        # surpassing means making another jump
        next_endpoint = 0        

        # loop through the num list
        for i in range(target):

            # find current max jump point, and compare with current max range
            curr_max_range = max(curr_max_range, i + nums[i])

            # if we reach the target, add a jump and break the loop
            if curr_max_range >= target:
                num_jumps += 1
                break

            # if we reach the current end point, set next endpoint to the current max range
            if i == next_endpoint:
                num_jumps += 1

                # check if there is no path, if we reach curr max range and its equal to our current endpoint
                if next_endpoint >= curr_max_range:
                  return False

                # print(next_endpoint, curr_max_range)
                next_endpoint = curr_max_range

        return num_jumps


            







        
        