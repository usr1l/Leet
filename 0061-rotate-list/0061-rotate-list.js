/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    
    // if shift is 0, return original
    if (k === 0) return head;
    
    // map nodes into array, and get rid of references
    // let pointer = head;
    // let currPointer = head;
    const order = [];
    let index = 0;
    while (head) {
        order[index] = head;
        index - 1 >= 0 ? order[index - 1].next = null : null;
        index++;
        head = head.next;
    };
    
    // get new first item index
    const listLength = order.length;
    let itemIndex = (listLength - k % listLength) % listLength;
    
    // connect nodes starting from new first item index
    let pointer = new ListNode(0, null);
    let start = pointer;
    while (index > 0) {
        pointer.next = order[itemIndex];
        pointer = pointer.next;
        itemIndex = (itemIndex + 1) % listLength;
        index--;
    };
    return start.next;
};