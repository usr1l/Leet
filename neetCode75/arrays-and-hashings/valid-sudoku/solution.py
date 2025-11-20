class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        length = len(board)
        sq_root = int(math.sqrt(length))
        row = [set() for i in range(length)]
        col = [set() for i in range(length)]
        squares = [[set() for i in range(sq_root)] for i in range(sq_root)]

        for i in range(length):
            for j in range(length):
                curr_num = board[i][j]
                if not curr_num.isdigit():
                    continue

                square_row = i//sq_root
                square_col = j//sq_root

                if curr_num in row[i] or curr_num in col[j] or curr_num in squares[square_row][square_col]:
                    return False

                row[i].add(curr_num)
                col[j].add(curr_num)
                squares[square_row][square_col].add(curr_num)
        return True
