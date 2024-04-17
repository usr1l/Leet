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
    if (!root) return null;
    let pointer = root;

    function traversal(root, arr=[]) {
        if (!root) return null;

        arr.push(root);
        traversal(root.left, arr);
        traversal(root.right, arr);
        return arr;
    };

    const arr = traversal(root);

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].left = null;
        arr[i].right = arr[i+1]
    };

    return pointer;



};