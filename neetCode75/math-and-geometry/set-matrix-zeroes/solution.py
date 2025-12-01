class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        rows = set()
        cols = set()
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    if i not in rows:
                        rows.add(i)
                    if j not in cols:
                        cols.add(j)
        for i in range(len(matrix)):
            for val in cols:
                matrix[i][val] = 0

        for i in range(len(matrix[0])):
            for val in rows:
                matrix[val][i] = 0

        return
