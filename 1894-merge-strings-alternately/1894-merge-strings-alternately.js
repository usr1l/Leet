/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const word1Letters = word1.split('');
    const word2Letters = word2.split('');

    const res = [];

    while (word2Letters[0] || word1Letters[0]) {
        if (word1Letters[0] && word2Letters[0]) {
            res.push(word1Letters.shift());
            res.push(word2Letters.shift());
        } else if (word1Letters[0]) {
            res.push(word1Letters.shift());
        } else if (word2Letters[0]) {
            res.push(word2Letters.shift());
        };
    };

    return res.join('');
};