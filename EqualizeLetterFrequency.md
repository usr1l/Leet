# Problem
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

    The frequency of a letter x is the number of times it occurs in the string.
    You must remove exactly one letter and cannot chose to do nothing.



Example 1:

Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

Example 2:

Input: word = "aazz"
Output: false
Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.

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
    def equalFrequency(self, word):
        """
        :type word: str
        :rtype: bool
        """
        if not word:
            return false

        letters = {}
        frequency = {}

        string = str(word)
        for char in string:
            letters[char] = letters.get(char, 0) + 1

        if len(letters) == 1:
            return True

        for freq in list(letters.values()):
            frequency[freq] = frequency.get(freq, 0) + 1

        if len(frequency) == 1:
            freq = list(frequency.keys())[0]
            return freq == 1

        elif len(frequency) == 2:
            freqs = list(frequency.keys())
            freqs.sort()
            return freqs[0] == 1 and frequency[freqs[0]] == 1 or freqs[1] - freqs[0] == 1 and frequency[freqs[1]] == 1

        return False

```
