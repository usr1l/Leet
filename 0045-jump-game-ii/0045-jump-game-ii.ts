function jump(nums: number[]): number {
    const TARGET: number = nums.length - 1;
    let numJumps: number = 0;
    let maxRange: number = 0;
    let currEndpoint: number = 0;

    for (let i: number = 0; i < TARGET; i++) {
        maxRange = Math.max(maxRange, i + nums[i])
        if (maxRange >= TARGET) {
            numJumps += 1;
            break;
        };

        if (i == currEndpoint) {
            numJumps += 1

            if (maxRange === currEndpoint) {
                return 0
            }

            currEndpoint = maxRange
        }
    }
    return numJumps
};