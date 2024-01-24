class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        res = 0
        accum = 1
        for i in range(len(columnTitle)-1, -1, -1):
            res += (ord(columnTitle[i]) - 64) * accum
            accum *= 26
        return res