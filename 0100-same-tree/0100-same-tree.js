/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function traverse(root, arr=[]) {
        if (!root) {
            arr.push(null);
            return ''
        };
        arr.push(root.val);
        traverse(root.left, arr);
        traverse(root.right, arr);
        return arr;
    };

    const arr1 = traverse(p) 
    const arr2 = traverse(q)
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
        };

    return true;
};