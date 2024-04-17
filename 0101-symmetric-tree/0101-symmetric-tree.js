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
var isSymmetric = function(root) {
    if (!root) return true;

    function traverse(root, left=false, path = []) {
        if (!root) {
            path.push(null);
            return '';
        };

        path.push(root.val);
        if (left) {

            traverse(root.left, left, path);
            traverse(root.right, left, path);
        } else {
            traverse(root.right, left=false, path);
            traverse(root.left, left=false, path);
            
        } 

        return path
    };

    const path1 = traverse(root.left, left=true);
    const path2 = traverse(root.right);

    if (path1.length !== path2.length) return false;
    for (let i = 0; i < path1.length; i ++) {
        if (path1[i] !== path2[i]) return false;
    };

    return true;
};