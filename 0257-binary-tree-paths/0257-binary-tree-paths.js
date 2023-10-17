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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    res = [];

    function traversal(head, str) {
        str.push(`${head.val}`);
        if (!head.right && !head.left) {
            res.push(str.join('->'));
            return;
        };

        // use spread operator for new array, don't alter original
        head.left ? traversal(head.left, [...str]) : null;
        head.right ? traversal(head.right, [...str]) : null;
    
    };

    if (root) traversal(root, []);

    return res;
};