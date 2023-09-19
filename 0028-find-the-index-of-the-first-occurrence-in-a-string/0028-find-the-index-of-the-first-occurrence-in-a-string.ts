function strStr(haystack: string, needle: string): number {
    const needleLength: number = needle.length;

    // loop through until haystack left is less than needleLength
    for (let i: number = 0; i <= haystack.length - needleLength; i ++) {

        // check using slice
        if (haystack.slice(i, needleLength + i) === needle) {
            return i;
        };
    };
    return -1;
};