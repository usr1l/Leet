class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        longest_length = 0
        start = 0
        curr_counter = {}

        for i, num in enumerate(str(s)):
            if num in curr_counter and start <= curr_counter[num]:
                start = curr_counter[num] + 1
            else: 
                longest_length = max(longest_length, i - start + 1)
                

            # default case:
            curr_counter[num] = i
        
        return longest_length