/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let pointer = head;
    let fasterPointer = head;

    // loop using restriction by fasterpointer, travels twice the speed, ends up same node confirms loop
    while (fasterPointer && fasterPointer.next) {
        pointer = pointer.next;
        fasterPointer = fasterPointer.next.next;

        if (pointer === fasterPointer) return true;
    };

    return false;
};