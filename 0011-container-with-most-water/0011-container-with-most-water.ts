function maxArea(height: number[]): number {

    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxVol = 0;

    while (leftPointer < rightPointer) {
        maxVol = Math.max(maxVol, (rightPointer - leftPointer) * Math.min(height[rightPointer], height[leftPointer]));
        if (height[rightPointer] < height[leftPointer]) {
            rightPointer --;
        } else leftPointer ++;
    };

    return maxVol;
};