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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let pointer = root;

    function invert(root) {
        if (!root) return ;

        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        invert(root.left)
        invert(root.right);
    };

    invert(root)
    return pointer
};