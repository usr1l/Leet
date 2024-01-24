# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        res = []

        prev = head
        while head.next:
            res.append(head)
            prev = head
            head = head.next
            prev.next = None

        prev = head

        while res:
            prev.next = res.pop()
            prev = prev.next

        return head
        
