function strStr(haystack: string, needle: string): number {

    // loop through until haystack left is less than needleLength
    for (let i: number = 0; i <= haystack.length - needle.length; i ++) {

        // check using slice
        if (haystack.slice(i, needle.length + i) === needle) {
            return i;
        };
    };
    return -1;
};