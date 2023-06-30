class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        ## start at the end of the list
        x = m - 1
        y = n - 1
        z = m + n - 1


        while x >= 0 and y >= 0:
            # print(nums2[y], nums1[x])
            if nums2[y] > nums1[x]:
                nums1[z] = nums2[y]
                y -= 1

            elif nums2[y] <= nums1[x]:
                nums1[z] = nums1[x]
                nums1[x] = 0
                x -= 1

            z -= 1
        
        nums1[:y + 1] = nums2[:y + 1]
        
        # if x < 0:
        #     for i, num in enumerate(nums2):
        #         nums1[i] = nums2[i]




