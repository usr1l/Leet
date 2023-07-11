class Solution:
    def isFascinating(self, n: int) -> bool:
        occur = {}
        num2 = n * 2 
        num3 = n * 3

        string = f"{n}{num2}{num3}"
        for i, num in enumerate(string):
            if num == "0":
                return False
            if num not in occur:
                occur[num] = 1
            else:
                return False
        return True