function canConstruct(ransomNote: string, magazine: string): boolean {
    const passed: {} = {};
    for (const letter of ransomNote) passed[letter] ? passed[letter]++ : passed[letter] = 1;
    for (const letter of magazine) passed[letter] > 1 ? passed[letter]-- : delete passed[letter];

    return !Object.keys(passed).length

};