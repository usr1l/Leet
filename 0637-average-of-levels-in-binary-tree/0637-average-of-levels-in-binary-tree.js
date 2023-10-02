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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = [];
    if (!root) return res;

    function traversal(head, layer) {
        if (!head) return;
        
        if (!res[layer]) res[layer] = [head.val, 1];
        else {
            res[layer][0] += head.val;
            res[layer][1] ++;
        };
        traversal(head.left, layer + 1);
        traversal(head.right, layer + 1);
    };

    traversal(root, 0);

    for (let i = 0; i < res.length; i++) {
        res[i] = (res[i][0]/res[i][1]).toFixed(5);
    };
    return res;
};