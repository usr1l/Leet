class Solution:
    def climbStairs(self, n: int) -> int:
        def climb(curr):
            if curr==n:
                return 1
            if curr>n:
                return 0

            return climb(curr+1) + climb(curr+2)
        return climb(0)
