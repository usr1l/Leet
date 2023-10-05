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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return root;

    const order = [];
    function traversal(head) {
        if (!head) return;
        order.push(head);
        traversal(head.left);
        traversal(head.right);
        head.left = head.right = null;
    };

    let pointer = root;
    traversal(pointer);
    pointer = root;
    for (let i = 0; i < order.length; i++) {
        order[i].right = order[i + 1] || null;
    };

    return root;
};