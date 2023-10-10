/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let res = 0;
    let i = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 0) {
            const prevNum = i - 1 >= 0 ? flowerbed[i - 1] : 0;
            const nextNum = i + 1 < flowerbed.length ? flowerbed[i + 1] : 0;
            if (prevNum === 0 && nextNum === 0) {
                i += 2;
                res += 1;
            } else i ++;
        } else i ++;
    };

    return res >= n;
};