/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const pointer = new ListNode(0, head);
    if (!head) return head;
    let prev = pointer;
    let pointer1 = pointer.next;
    let pointer2 = pointer1.next;

    while (pointer1 && pointer2) {
        if (pointer2.val !== pointer1.val) {
            prev = prev.next;
            pointer2 = pointer2.next;
            pointer1 = pointer1.next;
        } else {
            while (pointer1.val === pointer2.val) {
                pointer2 = pointer2.next;
                if (!pointer2) break;
            }; 
                const nextPointer = pointer2;
                pointer1 = nextPointer;
                prev.next = pointer1 || null;                
                pointer2 = pointer1?.next || null;
        };
    };

    return pointer.next;
};