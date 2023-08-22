class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
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
            return (new_list[int(len(new_list)/2 - 1)] + new_list[int(len(new_list)/2)]) / 2.0
        else:
            return new_list[int(len(new_list)/2)]