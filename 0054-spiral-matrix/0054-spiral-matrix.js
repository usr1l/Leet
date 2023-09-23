/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0, bottom = matrix.length, left = 0, right = matrix[0].length;
    let res = [];

    // loop in the directions, changing top, right, bottom, left pointers as each row/column is printed out.

    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
          res.push(matrix[top][i]);
        };
        top++;

        for (let i = top; i < bottom; i++) {
          res.push(matrix[i][right - 1]);
        };
        right--;

        // check in middle to not allow repeated loops, i.e. a single row
        if (top >= bottom || left >= right) break;

        for (let i = right - 1; i > left - 1; i--) {
          res.push(matrix[bottom - 1][i]);
        };
        bottom--;

        for (let i = bottom - 1; i > top - 1; i --) {
          res.push(matrix[i][left]);
        };
        left++;
    };

    return res;
};