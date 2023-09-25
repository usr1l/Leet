function longestConsecutive(nums: number[]): number {
    // use a set to collect numbers we've seen
    let numsSet = new Set(nums);
    // record longest Streak
    let longestStreak = 0;

    for (let i = 0; i < nums.length; i++) {
    
        // check if there is a number before current, if there is skip
        if (!numsSet.has(nums[i] - 1)) {

            // if not, set current number to start, and initiate new streak
            let currentStart = nums[i];
            let currentStreak = 1;

            while (numsSet.has(currentStart + 1)) { 
                currentStart++;
                currentStreak++;
            }

        // update longest streak with each loop
        longestStreak = Math.max(longestStreak, currentStreak);
        };
    };
    return longestStreak;
};

// O(n) time because numbers that aren't starts are skipped;