function twoSum(numbers: number[], target: number): number[] {
    let rightPointer: number = numbers.length - 1;
    let leftPointer: number = 0;
    while (leftPointer < rightPointer) {
        if (numbers[rightPointer] + numbers[leftPointer] === target) {
            return [leftPointer + 1, rightPointer + 1]
        } else if (numbers[rightPointer] + numbers[leftPointer] < target) leftPointer ++;
        else rightPointer --;
    };  
};