class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        set_nums = set(nums)
        counted_nums = set()
        longest = 0

        for val in nums:
            if val in counted_nums:
                continue

            curr_counter = val - 1
            curr_length = 1

            while curr_counter in set_nums:
                curr_length += 1
                curr_counter -= 1

            longest = max(longest, curr_length)

            counted_nums.add(val)

        return longest
