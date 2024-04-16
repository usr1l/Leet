/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let arr = s.split(" ");
    let res = [];
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] !== " " && arr[i] !== "") res.push(arr[i]);
    };
    return res.join(" ");
};