/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 1;
    let mark = false;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            if (mark === true) continue;
            else {
                nums[p1] = nums[i+1];
                p1++;
                mark = true;
            };
        } else {
            nums[p1] = nums[i+1];
            p1++;
            mark = false;
        };
    };
    
    return p1;
};