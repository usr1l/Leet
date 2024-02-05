class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        first_row = [1]*n
        grid = [first_row]*m

        for i in range(m-2, -1, -1):
            for j in range(n-2, -1, -1):
                grid[i][j] = grid[i+1][j] + grid[i][j+1]

        
        return grid[0][0]