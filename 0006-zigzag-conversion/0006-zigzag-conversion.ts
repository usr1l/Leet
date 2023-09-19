function convert(s: string, numRows: number): string {
    let res: string = '';
    const STRLENGTH: number = s.length;
    
    // how many characters before new zigzag cycle
    const INCREMENTCYCLE: number = 2 * (numRows - 1);

    // check for 1 row
    if (numRows === 1) return s;

    // loop through characters in first cycle
    for (let i: number = 0; i < numRows; i++) {
        
        // set currIndex at i
        let currIndex: number = i;

        // characters in the middle appear twice per cycle, account for jump amount
        const jump: number = 2 * (numRows - 1 - i);

        // check conditions for middle characters
        while (currIndex < STRLENGTH) {
            res += s[currIndex];
            if (currIndex + jump < STRLENGTH && jump !== 0 && jump !== INCREMENTCYCLE) {
                res += s[currIndex + jump];
            };
            currIndex += INCREMENTCYCLE;
        };
    };

    return res;
};