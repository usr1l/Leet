class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t or len(s) < len(t):
            return ""
        
        mapper = [0] * 128
        count = len(t)
        start = 0
        end = 0
        l = float('inf')
        
        curr_start = 0

        for char in t:
            mapper[ord(char)] += 1

        while end < len(s):
            if mapper[ord(s[end])] > 0:
                count-=1

            mapper[ord(s[end])]-=1
            end+=1

            while count == 0:
                if end - start < l:
                    curr_start = start
                    l = end - start

                if mapper[ord(s[start])] == 0:
                    count+=1
                
                mapper[ord(s[start])]+=1
                start+=1

        return "" if l == float('inf') else s[start-1:end+1]



            


