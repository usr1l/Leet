# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr_pointer = head
        while curr_pointer:
            if curr_pointer.next and curr_pointer.next.val == curr_pointer.val:
                traverse_pointer = curr_pointer.next
                while traverse_pointer and traverse_pointer.val == curr_pointer.val:
                    traverse_pointer = traverse_pointer.next
                curr_pointer.next = traverse_pointer
            curr_pointer = curr_pointer.next

        return head
        