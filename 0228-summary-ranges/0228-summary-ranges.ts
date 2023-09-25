function summaryRanges(nums: number[]): string[] {
    let index = 0;
    let numSet = new Set(nums);
    const res = [];

    while (index < nums.length) {
        let start = index;
        while (numSet.has(nums[index] + 1)) {
            index++;
        };

        if (index > start) {
            res.push(`${nums[start]}->${nums[index]}`)
            index++;
        } else if (index === start) {

        res.push(`${nums[start]}`);
        index++;
        };
    };

    return res;

};