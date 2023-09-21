function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let res = nums.length + 1;
    let sum = 0;

    // go through the array and add values, if sum goes over the target, start subtracting from the other end, until its under target
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i];
        while (sum >= target) {
            res = Math.min(res, (i + 1) - left);
            sum -= nums[left];
            left ++;
        };
    };

    return res === nums.length + 1 ? 0 : res;

};