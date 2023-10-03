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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const order = [];
    function inOrderTraversal(head) {
        if (!head) return;
        inOrderTraversal(head.left);
        order.push(head.val);
        inOrderTraversal(head.right);
    };
    inOrderTraversal(root);
    return order[k - 1];
};