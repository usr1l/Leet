# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        stack = [[root]]
        count = 0
        if not root:
            return 0
        while stack:
            count += 1
            level_stack = stack.pop(0)
            new_level = []
            while level_stack:
                new_node = level_stack.pop(0)
                if not new_node.left and not new_node.right:
                    return count
                if new_node.left:
                    new_level.append(new_node.left)
                if new_node.right:
                    new_level.append(new_node.right)
            stack.append(new_level)

