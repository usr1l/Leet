class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        matrix_length = len(matrix) - 1
        l = 0
        # first_switch = matrix_length - l
        # second_switch =
        while l < len(matrix) // 2:
            i = l
            while i < matrix_length - l:
                temp = matrix[l][i]
                temp, matrix[i][matrix_length-l] = matrix[i][matrix_length-l], temp
                temp, matrix[matrix_length-l][matrix_length-i] = matrix[matrix_length-l][matrix_length-i], temp
                temp, matrix[matrix_length-i][l] = matrix[matrix_length-i][l], temp
                temp, matrix[l][i] = matrix[l][i], temp
                i += 1
            l += 1

        return
