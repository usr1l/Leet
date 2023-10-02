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
var rightSideView = function(root) {
    let res = [];
    if (!root) return res;

    // update the array with left, and then right at each node layer
    // updating rightmost node last allows only the rightmost to show
    // update array with index linked to layer
    function checkRightSide(head, layer) {
        if (!head) return;
        res[layer] = head.val;
        checkRightSide(head.left, layer+1);
        checkRightSide(head.right, layer+1);
    };

    checkRightSide(root, 0);
    return res;
};