class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        s_letters = {}
        t_letters = {}
        for i in range(len(s)):
            if s[i] not in s_letters:
                s_letters[s[i]] = 1
            else:
                s_letters[s[i]] += 1
        for i in range(len(t)):
            if t[i] not in t_letters:
                t_letters[t[i]] = 1
            else:
                t_letters[t[i]] += 1

        if len(s_letters.keys()) == len(t_letters.keys()):
            for key in s_letters:
                if key not in t_letters or s_letters[key] != t_letters[key]:
                    return False
            return True
        return False 
