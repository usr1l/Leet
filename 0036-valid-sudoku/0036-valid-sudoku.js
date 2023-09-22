/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        let res = []; 


        // loop through the puzzle and create a res array to push each element into the array, if each element is unique, every push should push unique elements
        for (let i = 0; i < 9; i ++) {
            for (let j = 0; j < 9; j ++) {
                const currElement = board[i][j];
                if (currElement !== '.') {

                    // we want to swap positions of currElement here for false duplicates, i.e. in condition where i === j
                    res.push([currElement, i], [j, currElement], [Math.floor(i / 3), Math.floor(j / 3), currElement]);
                };
            };
        };

        // use set to get rid of duplicates, if every item is unique, length is equal, and sudoku is valid
        return res.length === new Set(res.map(val => JSON.stringify(val))).size;
};