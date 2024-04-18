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
    if (!root) return 0;
    
    const res = []

    function traverse(root, num='') {
        if (!root) return
        num+=root.val;
        if (!root.left && !root.right) {
            res.push(num);
            return;
        };
        // console.log(num)
        traverse(root.left,num);
        traverse(root.right,num);

        return

    }

    traverse(root)

    return res.reduce((accum, val) => accum + parseInt(val), 0)
};