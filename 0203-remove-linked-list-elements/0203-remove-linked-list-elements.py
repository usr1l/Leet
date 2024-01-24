# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        while head and head.val == val:
            head = head.next
        
        p1 = head
        while p1:
            prev = p1
            p1 = p1.next

            while p1 and p1.val==val:
                p1 = p1.next

            prev.next = p1
        
        return head


