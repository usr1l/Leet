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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const order = [];
    function inOrderTraversal(head) {
        if (!head) return;
        inOrderTraversal(head.left);
        order.push(head.val);
        inOrderTraversal(head.right);
    };

    inOrderTraversal(root);
    for (let i = 0; i < order.length - 1; i++) {
        if (order[i + 1] - order[i] <= 0) return false;
    };

    return true;
}; 