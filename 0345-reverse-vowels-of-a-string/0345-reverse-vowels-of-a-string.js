/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;

    const str = s.split('');

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    while (left < right) {
        const leftVowel = vowels.includes(s[left]) ? s[left] : null;
        const rightVowel = vowels.includes(s[right]) ? s[right] : null;
        if (leftVowel && rightVowel) {
            const temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            right--;
            left++;
        } else {
            if (!leftVowel) left++;
            if (!rightVowel) right--;          
        };
    };

    return str.join('');
};