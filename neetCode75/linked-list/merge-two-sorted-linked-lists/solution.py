# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head, l1, l2 = ListNode(), list1, list2
        res = head

        while l1 or l2:
            if l1 and l2:
                if l1.val > l2.val:
                    new_node = ListNode(l2.val)
                    l2 = l2.next
                else:
                    new_node = ListNode(l1.val)
                    l1 = l1.next

            elif l1:
                new_node = ListNode(l1.val)
                l1 = l1.next
            elif l2:
                new_node = ListNode(l2.val)
                l2 = l2.next

            head.next = new_node
            head = head.next

        return res.next
