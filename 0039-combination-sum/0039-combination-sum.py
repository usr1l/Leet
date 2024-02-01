class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        
        def backtrack(remainder, path):
            if remainder == 0:
                p = path[:]
                p.sort()
                if p not in res:
                    res.append(p)
                return

            if remainder < 0:
                return
            print(path)
            for num in candidates:

                path.append(num)

                backtrack(remainder - num, path)

                path.pop()
            
        backtrack(target, [])
        return res
                

