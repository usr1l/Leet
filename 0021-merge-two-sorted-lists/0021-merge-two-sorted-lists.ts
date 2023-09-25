/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

    // this does not create a new node for each val, instead sets a pointer to the next node
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const head: ListNode = new ListNode();
    let pointer: ListNode = head;
    while (list1 || list2) {
        if (list1 && list2) {
            if  (list1.val <= list2.val) {
                pointer.next = list1;
                pointer = pointer.next;
                list1 = list1.next;
            } else {
                pointer.next = list2;
                pointer = pointer.next;
                list2 = list2.next;
            };
        } else if (list1) {
            pointer.next = list1;
            pointer = pointer.next;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            pointer = pointer.next;
            list2 = list2.next;
        };
    };
    return head.next;
};