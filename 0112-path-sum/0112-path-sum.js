/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // check for head, if none, return false
    if (!root) return false;

    // if there is no right and left, then its a leaf node, check if the leftover value is equal to the current head
    if (!root.left && !root.right) return targetSum === root.val;

    // else, subtract the current root.val from the targetSum, and pass the new targetSum off
    return (hasPathSum(root.left, targetSum - root.val)) || (hasPathSum(root.right, targetSum - root.val));
};