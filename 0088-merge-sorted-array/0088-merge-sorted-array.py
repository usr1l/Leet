class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # set 3 pointers starting from the ends
        p1, p2, p3 = m-1, n-1, m+n-1
        while p1 > -1 or p2 > -1:
            print(p1,p2,p3, nums1[p3])
            if p1>-1 and p2>-1:
                if nums1[p1] >= nums2[p2]:
                    nums1[p3] = nums1[p1]
                    p1-=1
                else:
                    nums1[p3] = nums2[p2]
                    p2-=1
            elif p1>-1:
                nums1[p3] = nums1[p1]
                p1-=1
            else:
                nums1[p3] = nums2[p2]
                p2-=1
            p3-=1
        return

