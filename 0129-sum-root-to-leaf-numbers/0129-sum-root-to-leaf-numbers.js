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
 * @return {number}
 */
var sumNumbers = function(root) {
    // every time we hit a new level, the accum value is multiplied by 10, to account for new ones palce
    function traversalSum(root, accum=0) {
        if (!root) return 0;
        accum = accum * 10 + root.val;
        if (!root.right && !root.left) return accum;

        return traversalSum(root.left, accum) + traversalSum(root.right, accum);
    };

    return traversalSum(root);
};