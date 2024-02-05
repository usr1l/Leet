class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        def check_neighbors(i, j):
            if 0<=i<len(matrix)-1:
                if matrix[i+1][j]<=target:
                    return i+1, j
            
            if 0<=j<len(matrix[0])-1:
                if matrix[i][j+1]<=target:
                    return i, j+1
            
            return False
        
        row =  0
        col = 0
        while row < len(matrix) and col < len(matrix[0]):
            if matrix[row][col] == target:
                return True
            new_coord = check_neighbors(row, col)

            if not new_coord:
                return False
            
            row = new_coord[0]
            col = new_coord[1]


