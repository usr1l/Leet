class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left, right = 0, len(heights) - 1
        max_vol = 0

        while left < right:
            curr_vol = (right - left) * min(heights[left], heights[right])
            max_vol = max(max_vol, curr_vol)

            if heights[left] <= heights[right]:
                left += 1
            else:
                right -= 1

        return max_vol
