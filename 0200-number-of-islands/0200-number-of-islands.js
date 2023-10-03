/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    function countIslands(row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') return;
        else {
            grid[row][col] = '0';
            countIslands(row, col - 1);
            countIslands(row, col + 1);
            countIslands(row + 1, col);
            countIslands(row - 1, col);
        };
    };
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                countIslands(row, col);
                count++;
            };
        };
    }
    return count;
};