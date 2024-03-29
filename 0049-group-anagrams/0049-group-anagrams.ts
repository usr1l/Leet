function groupAnagrams(strs: string[]): string[][] {
    // const res = [];
    // const usedValues = new Set();
    // for (let i = 0; i < strs.length; i++) {
    //     if (usedValues.has(i)) continue;
    //     usedValues.add(i);
    //     const currAnag = [strs[i]];
    //     for (let j = i + 1; j < strs.length; j++) {
    //         if (usedValues.has(j)) continue;
    //         else {
    //             let currWord = strs[j];

    //             // MAKE SURE TO CHECK FOR LENGTH EQUALITY WHEN DEALING WITH ANAGRAMS
    //             if (currWord.length !== strs[i].length) continue;
    //             for (const letter of strs[i]) {
    //                 currWord = currWord.replace(letter, '');
    //             };
    //             if (!currWord) {
    //                 currAnag.push(strs[j]);
    //                 usedValues.add(j);
    //             };
    //         };
    //     };
    //     res.push(currAnag);
    // };
    // return res;
    const anagrams = {};

    for (let str of strs) {

        // faster way to check for anagrams, less looping
        let currStr = str.split('').sort().join('');

        // sort the characters, and use sorted words as keys to check for anagrams
        if (!anagrams[currStr]) anagrams[currStr] = [];
        anagrams[currStr].push(str);
    };

    return Object.values(anagrams);
};