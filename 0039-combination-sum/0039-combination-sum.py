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

            for num in candidates:

                new_path = path[:]
                new_path.append(num)

                backtrack(remainder - num, new_path)
            
        backtrack(target, [])
        return res
                

