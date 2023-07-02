class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        visited = {};
        for i, num in enumerate(nums):
            if num not in visited:
                visited[num] = 1
            else:
                return True
        
        return False