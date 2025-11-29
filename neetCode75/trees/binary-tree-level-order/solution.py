# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = []
        queue = [[root]]
        while queue:
            curr_level_nodes = queue.pop()
            curr_level_vals = []
            next_queue = []
            for node in curr_level_nodes:
                curr_level_vals.append(node.val)
                next_queue.append(node.left) if node.left else None
                next_queue.append(node.right) if node.right else None
            if curr_level_vals:
                res.append(curr_level_vals)
            if next_queue:
                queue.append(next_queue)

        return res
