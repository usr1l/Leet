# Problem
Given a string s, find the length of the longest
substring
without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



# Intuition

# Approach

# Complexity
- Time complexity:

- Space complexity:

# Code
```
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        longest_length = 0
        start = 0
        curr_counter = {}

        for i, val in enumerate(str(s)):
            if val in curr_counter and start <= curr_counter[val]:
                start = curr_counter[val] + 1
            else:
                longest_length = max(longest_length, i - start + 1)

            curr_counter[val] = i

        return longest_length
```
