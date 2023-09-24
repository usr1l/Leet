function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    const res = {};

    if (words.length !== pattern.length) return false;
    
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] in res) {
            if (res[pattern[i]] !== words[i]) {
                console.log(res[pattern[i]], words[i])
                return false;
            };
        } else res[pattern[i]] = words[i];
    };

    return Object.keys(res).length === new Set(Object.values(res)).size;
};