# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head:
            return
        order = []
        l1 = head
        while l1:
            order.append(l1)
            l1 = l1.next

        l, r = 0, len(order) - 1
        while l < r:
            order[l].next = order[r]
            l += 1

            if l >= r:
                break
            order[r].next = order[l]
            r -= 1

        order[l].next= None
