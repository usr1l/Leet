class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        string = ''
        for i, val in enumerate(s):
            if val.isalpha():
                string += val.lower()
            if val.isdigit():
                string += val

        if string == string[::-1]:
            return True
        return False