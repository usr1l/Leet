class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        def get_neighbor_min(x, y):
            val1 = grid[x+1][y]
            val2 = grid[x][y+1]
            val3 = grid[x+1][y+1]

            return min(val1, val2, val3)
         
        len1 = len(word1)
        len2 = len(word2)

        grid = [[0 for _ in range(len1+1)] for _ in range(len2+1)]
        for i in range(len2):
            grid[i][len1] = len2 - i
        for i in range(len1):
            grid[len2][i] = len1 - i
        
        for x in range(len2 - 1, -1, -1):
            for y in range(len1 - 1, -1, -1):
                if word2[x] == word1[y]:
                    grid[x][y] = grid[x+1][y+1]
                else:
                    val = get_neighbor_min(x, y) + 1
                    grid[x][y] = val
        return grid[0][0]


