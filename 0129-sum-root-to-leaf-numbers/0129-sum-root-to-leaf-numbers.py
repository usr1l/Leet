# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def traverse(root, accum=0):
            if not root:
                return 0

            accum = accum * 10 + root.val
        
            if not root.left and not root.right:
                return accum
            
            return traverse(root.left, accum) + traverse(root.right, accum)

        return traverse(root)