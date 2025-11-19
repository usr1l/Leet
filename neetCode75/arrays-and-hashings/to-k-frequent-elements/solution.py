class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_count = defaultdict(int)
        freq = [[] for i in range(len(nums) + 1)]
        res = []

        for val in nums:
            num_count[val] += 1

        for i, val in num_count.items():
            freq[val].append(i)

        for i in range(len(nums), 0, -1):
            for j in freq[i]:
                res.append(j)

                if len(res) == k:
                    return res
