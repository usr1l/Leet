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

        p_left=p_right=0
        pl=pr=root

        while pl:
            p_left+=1
            pl=pl.left
        
        while pr:
            p_right+=1
            pr=pr.right


        # use bitwise, because every shift doubles, check for node amount in a balanced tree
        if p_right==p_left:
            return (1<<p_right)-1
        
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)