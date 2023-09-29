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
    // if (!root) return root;

    // invertTree(root.left);
    // invertTree(root.right);

    // const rightNode = root.right;
    // root.right = root.left;
    // root.left = rightNode;

    // return root;

    const stack = [root];

    while (stack.length) {
        const currNode = stack.pop();

        if (currNode) {
            const newNode = currNode.right;
            currNode.right = currNode.left;
            currNode.left = newNode;
            stack.push(currNode.left, currNode.right);
        };
    };

    return root;
};