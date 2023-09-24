function canConstruct(ransomNote: string, magazine: string): boolean {
    // const passed: {} = {};
    // for (const letter of ransomNote) passed[letter] ? passed[letter]++ : passed[letter] = 1;
    // for (const letter of magazine) passed[letter] ? passed[letter] > 1 ? passed[letter]-- : delete passed[letter] : null;

    // return !Object.keys(passed).length;

    for (const letter of magazine) {
        ransomNote = ransomNote.replace(letter, '');
    };

    return !ransomNote.length;
};