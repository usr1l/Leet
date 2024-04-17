/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftPointer = 0, rightPointer = height.length - 1, leftMax = height[leftPointer], rightMax = height[rightPointer], sum =0;

    while (leftPointer < rightPointer) {
        if (leftMax <= rightMax) {
            sum += leftMax - height[leftPointer];
            leftPointer += 1;
            leftMax = Math.max(leftMax, height[leftPointer]);
        } else {
            sum += rightMax - height[rightPointer];
            rightPointer -= 1;
            rightMax = Math.max(rightMax, height[rightPointer]);
        };
    };  
    return sum;
};