# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        l = r = root
        l_val = r_val = 0

        while l:
            l_val += 1
            l = l.left
        
        while r:
            r_val += 1
            r = r.right

        if l_val == r_val:
            return (1<<l_val) - 1

        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
        

