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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) return res;

    function traversal(head, layer) {
        if (!head) return;

        if (!res[layer]) res[layer] = [head.val];
        else res[layer].push(head.val);

        traversal(head.left, layer + 1);
        traversal(head.right, layer + 1);
    };

    traversal(root, 0);

    return res;
};