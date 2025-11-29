# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root:
            return None

        if not p or not q:
            return root

        res = root
        while res:
            if p.val == res.val or q.val == res.val or p.val < res.val < q.val or q.val < res.val < p.val:
                return res

            elif p.val < res.val and q.val < res.val:
                res = res.left

            else:
                res = res.right

        return res
