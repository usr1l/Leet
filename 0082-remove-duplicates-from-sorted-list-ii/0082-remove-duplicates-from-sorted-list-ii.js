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

    // while both pointers are valid
    while (pointer1 && pointer2) {
        // check for duplicate values
        if (pointer2.val !== pointer1.val) {
            prev = prev.next;
            pointer2 = pointer2.next;
            pointer1 = pointer1.next;
        } else {
            // if duplicate, keep goin until not
            while (pointer1.val === pointer2.val) {
                pointer2 = pointer2.next;

                // or break if end of list
                if (!pointer2) break;
            }; 

                // repath the nodes
                const nextPointer = pointer2;
                pointer1 = nextPointer;
                prev.next = pointer1 || null;                
                pointer2 = pointer1?.next || null;
        };
    };

    return pointer.next;
};