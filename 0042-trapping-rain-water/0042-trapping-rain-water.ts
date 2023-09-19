function trap(height: number[]): number {
    
    // use pointer from left and right, max peaks start at the ends, so pointers start at second and second to last indexes
    let leftPointer: number = 1;
    let rightPointer: number = height.length - 2;

    let leftMax: number = height[0];
    let rightMax: number = height[height.length - 1]; 
    let totalWater: number = 0;

    // compare height of each index with leftMax and rightMax, and use the lower value to find water at current index, increment or decrement based on higher max value, replace max values if necessary
    while (leftPointer <= rightPointer) {
        if (leftMax <= rightMax) {
            totalWater += leftMax - height[leftPointer] > 0 ? leftMax - height[leftPointer] : 0;
            leftMax = Math.max(leftMax, height[leftPointer]);
            leftPointer += 1;
        } else if (rightMax < leftMax) {
            totalWater += rightMax - height[rightPointer] > 0 ? rightMax - height[rightPointer] : 0;
            rightMax = Math.max(rightMax, height[rightPointer]);
            rightPointer -= 1;
        } 
    }
    return totalWater;
};