# Problem
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
# Intuition

# Approach

# Complexity
- Time complexity:

- Space complexity:

# Code
```
import math

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        new_list = []
        while nums1 or nums2:
            ## first check for numbers
            if nums1:
                x = nums1[0]
                if nums2:
                    y = nums2[0]

                    ## check conditions
                    if x == y:
                        new_list.append(nums1.pop(0))
                        new_list.append(nums2.pop(0))

                    elif x < y:
                        new_list.append(nums1.pop(0))

                    elif x > y:
                        new_list.append(nums2.pop(0))

                elif not nums2:
                        new_list.append(nums1.pop(0))

            elif nums2 and not nums1:
                y = nums2.pop(0)
                new_list.append(y)

        even_or_odd = len(new_list) % 2
        if even_or_odd == 0:
            ## * 1.0 to change to floating point for decimal division
            return (new_list[len(new_list)/2 - 1] * 1.0 + new_list[len(new_list)/2]) / 2
        else:
            return new_list[len(new_list)/2]






```
