/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // const res = [];
    // let currWord = '';
    // for (let i = 0; i < s.length; i++) {
    //     // console.log(s[i] === ' ', s[i], currWord.length, currWord.length > 0)
    //     if (s[i] === ' ' && currWord) {
    //         // console.log(currWord);
    //         res.unshift(currWord);
    //         currWord = '';

    //     } else if (s[i] === ' ') {
    //         continue;
    //     }
    //     else if (s[i] && s[i] !== ' ') {
    //         currWord += s[i];
    //     };
    // };

    // currWord ? res.unshift(currWord) : null;

    // return res.join(' ');

    return s.split(' ').filter(word => word).reverse().join(' ');
};