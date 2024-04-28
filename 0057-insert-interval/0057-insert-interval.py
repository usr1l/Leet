class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        index = 0
        res = []
        i = len(intervals)-1
        while i>=0:
            if intervals[i][0] <= newInterval[0]:
                intervals.insert(i+1, newInterval)
                break
            i-=1
        if i==-1:
            intervals.insert(0, newInterval)
        
        while index < len(intervals):
            curr_range = intervals[index][:]
            while index < len(intervals) and intervals[index][0] <= curr_range[1]:
                index+=1
                if index < len(intervals) and intervals[index][0] <= curr_range[1]:
                    if curr_range[1] < intervals[index][1]:
                        curr_range[1] = intervals[index][1]
                else:
                    break
            res.append(curr_range)

        return res or [newInterval]      

