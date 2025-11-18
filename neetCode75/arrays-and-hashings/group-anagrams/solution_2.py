class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for s in strs:
            c_count = [0] * 26

            for c in s:
                c_count[ord(c) - ord('a')] += 1

            res[tuple(c_count)].append(s)

        return list(res.values())
