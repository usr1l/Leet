function isIsomorphic(s: string, t: string): boolean {
    const sMatches: {} = {};
    const tMatches: {} = {};
    for (let i = 0; i < s.length; i ++) {
        if ((s[i] in sMatches && sMatches[s[i]] !== t[i]) || (t[i] in tMatches && tMatches[t[i]] !== s[i])) {
            return false;
        } else {
            sMatches[s[i]] = t[i];
            tMatches[t[i]] = s[i];
        };
    };
    return true;
};

     