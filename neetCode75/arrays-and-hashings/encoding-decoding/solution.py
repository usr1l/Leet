class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "{#}" + s

        return res

    def decode(self, s: str) -> List[str]:
        start, end = 0, 0
        counter = 0
        res = []
        while end < len(s):
            if s[end: end+3] == "{#}":
                counter = int(s[start:end])

                start = end+3
                end = start + counter

                res.append(s[start:end])

                start = end

            end += 1
        return res
