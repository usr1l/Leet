class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # use frequency to track how many times each character shows up in the current window
        freq = defaultdict(int)

        # longest_s for the current longest valid string
        longest_s = 0

        # use start for the leftmost index of the current string
        start = 0

        # max_freq will always have the most occurred, bc longest_s relies on maximizing max_freq and length, no need to decrement
        max_freq = 0

        for i in range(len(s)):
            # add the frequency for the character into each chart
            freq[s[i]] += 1

            # compare max_frequency with the current character
            max_freq = max(max_freq, freq[s[i]])

            # if current string needs more than the minimum amount of changes (can use if loop too)
            while 1 + i - start - max_freq > k:

                # decrement the frequency first
                freq[s[start]] -= 1

                # and then move the start over by one
                start += 1

            # finally compare the two strings for longest string
            longest_s = max(longest_s, 1 + i - start)

        return longest_s
