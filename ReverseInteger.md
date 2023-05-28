# Problem
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

# Intuition

# Approach

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """

        if x == 0:
            return 0

        if x > 0:
            string = str(x)
            num = int(string[::-1])

        if x < 0:
            string = str(x)
            num = int(string[1:][::-1]) * -1

        if num > ((2**31) - 1) or num < (-2**31):
            return 0

        return num

```
