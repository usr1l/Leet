function intToRoman(num: number): string {
    type pair = [string, number];

    let res: string = '';

    const valueMap: pair[] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    for (const [str, val] of valueMap) {
        if (num / val >= 1) {
            const multiplier: number = num / val;

            // change range to starting from 1, to account for decimals
            for (let i: number = 1; i <= multiplier; i++) {
                res += str;
            };
            num = num % val;
        };
    };

    return res;


};