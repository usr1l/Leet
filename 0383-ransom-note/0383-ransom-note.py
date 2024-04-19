class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dict1 = {}
        for item in magazine:
            if item not in dict1:
                dict1[item] = 1
            else:
                dict1[item] += 1
        for item in ransomNote:
            if item not in dict1:
                return False
            else:
                dict1[item] -= 1

            if dict1[item] < 0:
                return False
        
        return True