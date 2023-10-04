/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return;
    let count = 1;
    const pointer = new ListNode(0, head);
    let pointer1 = pointer;
    let pointer2 = head;
    let endPointer = head;

    while (endPointer) {
        endPointer = endPointer.next;
        count++;
        
        if (count >= n + 2) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        };

    };
    pointer1.next = pointer2?.next || null;

    return pointer.next;

};