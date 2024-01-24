class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0
        for i in range(32):
            new_bit = (n>>i) & 1
            res = res | new_bit<<(31-i)
        return res