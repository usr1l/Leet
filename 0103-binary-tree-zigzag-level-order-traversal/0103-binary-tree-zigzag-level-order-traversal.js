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
var zigzagLevelOrder = function(root) {
    const res = [];
    if (!root) return res;
    // let right = true;

    function traversal(head, layer) {
        if (!head) return;
        if (!res[layer]) res[layer] = [head.val];
        else {
            if (layer % 2 === 0) res[layer].push(head.val);
            else res[layer].unshift(head.val);
        };

        traversal(head.left, layer + 1);
        traversal(head.right, layer + 1);
    };

    traversal(root, 0);
    return res;
};