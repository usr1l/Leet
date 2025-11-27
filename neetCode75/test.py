class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

node1 = TreeNode(1)
node2 = TreeNode(1)

node1.left = TreeNode(2)
node1.right = TreeNode(3)

node2.left = TreeNode(2)
node2.right = TreeNode(3)

print(node1 == node2)  # FALSE
