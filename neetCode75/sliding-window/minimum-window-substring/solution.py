class Solution:
    def minWindow(self, s: str, t: str) -> str:
        count, tracker = {}, {}
        for val in t:
            count[val] = 1 + count.get(val, 0)

        start = 0
        res = [0, 0]
        longest_str = float('inf')
        have, need = 0, len(count)

        for i in range(len(s)):
            curr_char = s[i]
            tracker[curr_char] = 1 + tracker.get(curr_char, 0)

            if curr_char in count and tracker[curr_char] == count[curr_char]:
                have+=1
            while have == need:
                if i - start + 1 < longest_str:
                    res = [start, i+1]
                    longest_str = i - start + 1

                tracker[s[start]] -= 1
                if s[start] in count and tracker[s[start]] < count[s[start]]:
                    have -= 1
                start += 1

        return s[res[0]: res[1]] if longest_str != float('inf') else ""
