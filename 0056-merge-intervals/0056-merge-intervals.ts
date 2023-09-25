function merge(intervals: number[][]): number[][] {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const res = [sorted[0]]
    for (let i = 1; i < sorted.length; i++) {
        let [currLow, currHigh] = sorted[i];
        let prev = res[res.length - 1];
        if (currLow <= prev[1] && currLow>= prev[0]) {4
            res[res.length - 1] = [prev[0], Math.max(currHigh, prev[1])];
        } else {
          res.push([currLow, currHigh]);
          };
    };
    return res;
};