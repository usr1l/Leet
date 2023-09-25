function isHappy(n: number): boolean {
    let repeated = new Set();
    while (n !== 1) {
        let sum = 0;
        for (let number of `${n}`) {
            sum += parseFloat(number) ** 2;
        };
        n = sum;
        if (repeated.has(n)) return false;
        repeated.add(n);
    };
    return true;
};