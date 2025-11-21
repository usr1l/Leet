class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        tracker = defaultdict(int)
        start = 0
        longest_s = 0

        for i in range(len(s)):
            curr_val = s[i]
            if curr_val in tracker:
                start = max(tracker[curr_val]+1, start)
            longest_s = max(longest_s, i - start + 1)
            tracker[s[i]] = i

        return longest_s
