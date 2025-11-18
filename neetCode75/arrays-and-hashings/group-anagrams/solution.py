class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for string in strs:
            sorted_string = ''.join(sorted(string))
            res[sorted_string].append(st)

        return list(res.values())
