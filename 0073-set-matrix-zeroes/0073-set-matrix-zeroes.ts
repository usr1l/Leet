/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                for (let row = 0; row < matrix.length; row ++) {
                    if (matrix[row][j] !== 0) matrix[row][j] = null;
                };

                for (let col = 0; col < matrix[0].length; col ++) {
                    if (matrix[i][col] !== 0) matrix[i][col] = null;
                };
            };
        };
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === null) matrix[i][j] = 0
        };
    };
};