/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // if transposing a matrix of differing length and width, then loop through and swap as needed
    // while (matrix.length < matrix[0].length) {
    //     matrix.push(new Array(matrix[0].length).fill(undefined))
    // };
    
    // if matrix length and width are equal, first transpose, switch columns with rows:
    for (let i = 0; i < matrix.length; i++) {

        // set j at i, in order to not reswap spaces, goes into matrix by layer as j starts deeper into the matrix rows
        for (let j = i; j < matrix[0].length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        };
    };

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    };
    
};