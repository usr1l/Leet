# Problem
Given a string s, return the longest
palindromic
substring
in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

# Intuition

# Approach

# Complexity
- Time complexity:
O(n ^ 3)
- Space complexity:
O(n)
# Code
```
class Solution(object):
    def check_is_palindrome(self, s):
        return s == s[::-1]

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """

        longest_string = 1
        chars = {}
        string = str(s)
        char_string = string[0]

        for i, val in enumerate(string):

            if val not in chars:
                chars[val] = [i]
            else:
                for index in chars[val]:
                    if len(string[index:i+1]) > longest_string and self.check_is_palindrome(string[index:i+1]):
                        longest_string = len(string[index:i+1])
                        char_string = string[index:i+1]

                chars[val].append(i)

        return char_string
```
