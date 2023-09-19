function romanToInt(s: string): number {
    const valueMap: {} = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        if (valueMap[s[i]] < valueMap[s[i + 1]]) {
            total -= valueMap[s[i]];
        } else if (valueMap[s[i]] >= valueMap[s[i + 1]] || !valueMap[s[i + 1]]) {
            total += valueMap[s[i]];
        };
    };

    return total;
};