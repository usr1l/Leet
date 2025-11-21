class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {'}' : '{', ']' : '[', ')' : '('}

        for val in s:
            if val in ('(', '{', '['):
                stack.append(val)

            elif val in pairs:
                if not stack or stack.pop() != pairs[val]:
                    return False

        return True if not stack else False
