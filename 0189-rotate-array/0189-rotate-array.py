class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def new_position(val):
            return (val + k) % len(nums)

        mapper = {}

        for i in range(len(nums)):
            mapper[nums[i]] = new_position(i)

        for key in mapper:
            nums[mapper[key]] = key

        return mapper
