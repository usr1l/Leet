function candy(ratings: number[]): number {
    // Have two trackers, for i and i+1
    // create a new array, initialized at 0
    // Iterate through the array
    // increment based on need

    const res: number[] = new Array(ratings.length).fill(1);
    // check twice through the array, from both ends, comparing higher or lower
    for (let i: number = 0; i < ratings.length - 1; i ++) {
        if (ratings[i + 1] > ratings[i] && res[i] >= res[i + 1]) {
            // accounting for numbers that keep going up
            res[i + 1] += res[i];
        }
    }
    for (let i: number = ratings.length - 1; i > 0; i --) {
        if (ratings[i - 1] > ratings[i] && res[i - 1] <= res[i]) {
            // accounting for numbers that go down
            res[i - 1] = res[i] + 1;
        }
    }
    // console.log(res)
    return res.reduce((accum, val) => accum += val, 0);
};