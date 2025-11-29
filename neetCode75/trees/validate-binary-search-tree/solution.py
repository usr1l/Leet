
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def isValid(node, left, right):
            if not node:
                return True
            if node.left and node.left.val >= node.val or node.val >= left:
                return False
            if node.right and node.right.val <= node.val or node.val <= right:
                return False
            return isValid(node.left, node.val, right) and isValid(node.right, left, node.val)

        return isValid(root, float('inf'), -float('inf'))
