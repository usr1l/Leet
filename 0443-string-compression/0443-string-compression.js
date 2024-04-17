/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let p1 = 0, p2 = 0, p3 = 0;

    while (p1 < chars.length) {
        let counter = 0;
        while (chars[p2] === chars[p1]) {
            counter += 1;
            p1 += 1;
        };

        chars[p3] = chars[p2];

        if (counter >= 2) {
            let nums = `${counter}`.split("");
            for (const num of nums) {
                p3 += 1;
                chars[p3] = num;
            };

        };
        
        p3 += 1;
        
        p2 = p1;
  };

    return p3;
};