function canJump(nums: number[]): boolean {
    let target: number = nums.length - 1;

    for (let i: number = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= target) {
            target = i
        }
    }
    return target == 0
};