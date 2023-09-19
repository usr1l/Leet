function lengthOfLastWord(s: string): number {
    let count: number = 0;
    for (let i: number = s.length - 1; i >= 0; i --) {
        const flag: boolean = s[i].toUpperCase() !== s[i].toLowerCase();
        if (flag) {
            count ++;
        } else if (!flag && count > 0) {
            break;
        }
    };

    return count;
};