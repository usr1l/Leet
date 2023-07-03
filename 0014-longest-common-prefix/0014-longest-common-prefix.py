class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        index = -1
        ans = ''
        for i in range(min([len(s) for s in strs])):
            letter = strs[0][i]
            for string in strs:
                if string[i] != letter:
                    return ans
            
            ans += letter
        return ans
            