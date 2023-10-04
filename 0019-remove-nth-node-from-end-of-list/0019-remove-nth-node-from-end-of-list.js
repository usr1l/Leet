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

    // // use a pointer, because sometimes head can get removed
    // let pointer = new ListNode(0, head);
    // let curr = head;

    // // map the whole list
    // let map = new Map();
    // map[`-1`] = pointer;
    // let number = 0;
    // while (curr) {
    //     map[number] = curr;
    //     curr = curr.next; 
    //     number++;
    // };

    // // index of the node and the one before it
    // let index = Object.keys(map).length - n;
    // const node1 = map[`${index - 2}`];
    // const node2 = map[`${index}`];
    // node1.next = node2 || null;

    // return pointer.next;
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
    console.log(pointer1, pointer2)
    pointer1.next = pointer2?.next || null;

    return pointer.next;

};