/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    function checkNeighbors(row: number, col: number): number {
        let count: number = 0;
        for (let i = row - 1; i < row + 2; i ++) {
            for (let j = col - 1; j < col + 2; j ++) {
                if ((i >= 0 && i < board.length) && (j < board[0].length && j >= 0) && !(i === row && j === col)) {
                    if (board[i][j] === 1 || board[i][j] === -1) count ++; 
                };
            };
        };
        return count;
    };

    for (let row = 0; row < board.length; row ++) {
        for (let col = 0; col < board[0].length; col ++) {
            const neighborCount: number = checkNeighbors(row, col);
            if ((neighborCount < 2 || neighborCount > 3) && board[row][col] === 1) {
                board[row][col] = -1;
            };

            if (neighborCount === 3 && board[row][col] === 0) {
                board[row][col] = 2;
            }; 
        };

    };

    for (let row = 0; row < board.length; row ++) {
        for (let col = 0; col < board[0].length; col ++) { 
            const currNum: number = board[row][col];
            if (currNum === 2) board[row][col] = 1;
            if (currNum === -1) board[row][col] = 0;
        };
    };
};