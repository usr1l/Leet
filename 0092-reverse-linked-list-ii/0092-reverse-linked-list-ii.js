/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head) return head;

    // USE a null/placement listNode to start
    let leftPointer = new ListNode(null, head);
    let res = leftPointer;
    for (let i = 0; i < left - 1; i++) {
        leftPointer = leftPointer.next;
    };

    let rightPointer = leftPointer.next;
    // console.log(rightPointer, leftPointer)
    for (let i = 0; i < right - left; i++) {
        const nextNode = rightPointer.next;
        rightPointer.next = nextNode.next;
        // watch out for nodes with their next changed, be careful which nodes you attach
        nextNode.next = leftPointer.next;
        leftPointer.next = nextNode;
        // console.log(head)
    };
    // console.log(head)
    return res.next;
};