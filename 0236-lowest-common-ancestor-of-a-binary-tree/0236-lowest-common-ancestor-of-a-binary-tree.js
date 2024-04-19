/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;

    let leftPath = lowestCommonAncestor(root.left, p, q);
    let rightPath = lowestCommonAncestor(root.right, p, q);

    if (leftPath && rightPath) return root;

    return leftPath || rightPath;
};