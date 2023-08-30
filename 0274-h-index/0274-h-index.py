class Solution:
    def hIndex(self, citations: List[int]) -> int:
        # first the citations in reverse order
        citations.sort(reverse=True)
        
        # h-index
        h = 0

        if len(citations) == 1 and citations[0] == 0:
            return 0

        # the h index correlates to the sorted index
        for i, num in enumerate(citations):
            if num >= i+1:
                h = i+1
            if num < i:
                break;
        
        return h

            