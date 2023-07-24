# Problem
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

# Intuition



# Approach



# Complexity
- Time complexity:

- Space complexity:

# Code
```
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        letters = {}
        for char in magazine:
            if char not in letters:
                letters[char] = 1
            else:
                letters[char] += 1

        for char in ransomNote:
            if char in letters:
                letters[char] -= 1

            if char not in letters or letters[char] < 0:
                return False

        return True
```
