function isSubsequence(s: string, t: string): boolean {
    if (!s) return true;
    let pointer = 0;
    // let count = 0;
    for (let i = 0; i < t.length; i ++) {
        if (t[i] === s[pointer]) pointer ++;
        if (pointer === s.length) return true;
    };
    return false;
};