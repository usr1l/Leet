function isPalindrome(s: string): boolean {
    const letters: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() !== s[i].toLowerCase() || !isNaN(parseFloat(s[i]))) {
            letters.push(s[i].toLowerCase());
        };
    };

    return letters.join('') === letters.reverse().join('');
};