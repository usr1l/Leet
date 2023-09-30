/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // create a copy to cover the head
    let copy = head;

    // map out the copies to original, without adding next and random
    const map = new Map();
    
    while (copy) {
        const copyNode = new Node(copy.val);
        map.set(copy, copyNode);
        copy = copy.next;
    };

    copy = head;

    // use the nodes as keys in a map to get their copies, and iterate through another time to link the copies
    while (copy) {
        const copyNode = map.get(copy);
        copyNode.next = map.get(copy.next) || null;
        copyNode.random = map.get(copy.random) || null;
        copy = copy.next
    };

    return map.get(head);
};