function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];

    let nums1 = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums1.length - 2; i ++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let leftPointer = i + 1;
        let rightPointer = nums1.length - 1;

        while (leftPointer < rightPointer) {
            let sum = nums1[leftPointer] + nums1[rightPointer] + nums1[i];
            if (sum === 0) {
                res.push([nums1[i], nums1[leftPointer], nums1[rightPointer]]);
                while (leftPointer < rightPointer && nums1[leftPointer] === nums1[leftPointer + 1]) leftPointer ++;  
                while (leftPointer < rightPointer && nums1[rightPointer] === nums1[rightPointer - 1]) rightPointer --;  
                leftPointer ++;
                rightPointer --;
            } else if (sum > 0) rightPointer --;
                else leftPointer ++;
            };
    };

    return res;
};