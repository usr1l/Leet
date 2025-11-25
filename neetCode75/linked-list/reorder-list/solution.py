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
        l2 = order[0]
        l, r = 1, len(order) - 1
        while l <= r:
            l2.next = order[r]
            l2 = l2.next
            r -= 1

            if l > r:
                break
            l2.next = order[l]
            l2 = l2.next
            l += 1

        l2.next = None
