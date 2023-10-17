/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // loop through, check for positioning of root val
    while (root) {
        // if val is less than both p and q, move to right
        if (root.val < p.val && root.val < q.val) root = root.right;
        
        // if val is lgreater than both, move left
        else if (root.val > p.val && root.val > q.val) root = root.left;

        // if its in between, break, found lca
        else break;
    };
    return root;
};