# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        res, l1 = None, head

        while l1:
            new_node = ListNode(l1.val)
            new_node.next = res
            res = new_node
            l1 = l1.next

        return res
