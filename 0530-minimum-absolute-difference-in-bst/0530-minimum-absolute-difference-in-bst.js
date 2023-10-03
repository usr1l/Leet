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
var getMinimumDifference = function(root) {
    let min = Infinity;
    let vals = [];

    // sort values in order in array
    function inOrderTraversal(head) {
        if (!head) return;
        inOrderTraversal(head.left);
        vals.push(head.val);
        inOrderTraversal(head.right);
    };
    inOrderTraversal(root);

    console.log(vals)

    // take subtraction values now that theyre in order
    for (let i = 0; i < vals.length - 1; i++) {
        console.log(vals[i + 1] - vals[i])
        min = Math.min(Math.abs(vals[i+1] - vals[i]), min);
    };
    return min;
};