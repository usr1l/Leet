/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length || !t.length || !s.length) return "";

    let start = 0, end = 0, strStart = 0, minLength = t.length + s.length, count = t.length;
    const mapper = Array(128).fill(0)

    for (const c of t) mapper[c.charCodeAt(0)] += 1;
    
    while (end < s.length) {
        if (mapper[s[end].charCodeAt(0)] > 0) count -= 1;
        mapper[s[end].charCodeAt(0)] -= 1;
        end += 1;

        while (count === 0) {
            if (end - start < minLength ) {
                minLength = end - start;
                strStart = start;
            };

            if (mapper[s[start].charCodeAt(0)] === 0) count += 1;
            mapper[s[start].charCodeAt(0)] += 1;
            start += 1;
        };
    };

    if (minLength === t.length + s.length) return "";

    return s.slice(strStart, strStart + minLength);
};