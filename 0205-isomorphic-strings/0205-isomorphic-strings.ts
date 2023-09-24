function isIsomorphic(s: string, t: string): boolean {
    const sMatches: {} = {};
    const tMatches: {} = {};
    for (let i = 0; i < s.length; i++) {
        if (!sMatches[s[i]]) sMatches[s[i]] = t[i]
        else if (sMatches[s[i]] !== t[i]) return false;
    };
    for (let i = 0; i < t.length; i++) {
        if (!tMatches[t[i]]) tMatches[t[i]] = s[i]
        else if (tMatches[t[i]] !== s[i]) return false;
    }
    return Object.keys(sMatches).length === Object.keys(tMatches).length;
};

     