function longestCommonPrefix(strs: string[]): string {
    let res: string = '';
    const minLength: number = Math.min(...strs.map((val) => val.length));
    for (let i: number = 0; i < minLength; i++) {
        const letter: string = strs[0][i];
        for (const str of strs) {
            if (str[i] !== letter) {
                return res;
            };
        };
        res += letter;
    };

    return res;
};