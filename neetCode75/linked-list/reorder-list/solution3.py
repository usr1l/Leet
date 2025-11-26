# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head:
            return
        array = []
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        p1 = slow.next
        slow.next = None
        prev = None

        while p1:
            temp = p1.next
            p1.next = prev
            prev = p1
            p1 = temp

        l1, l2 = head, prev
        while l2:
            temp, temp2 = l1.next, l2.next
            l1.next = l2
            l2.next = temp
            l1, l2 = temp, temp2
