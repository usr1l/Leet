# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeKLists(self, lists: List =[Optional[ListNode]]) -> Optional[ListNode]:

        if not lists or len(lists) == 0:
            return

        while len(lists) > 1:
            merged_lists = []

            for i in range(0, len(lists), 2):
                l1 = lists[i]
                l2 = lists[i+1] if i+1 < len(lists) else None
                merged_lists.append(self.mergeLists(l1, l2))

            lists = merged_lists

        return lists[0]

    def mergeLists(self, l1, l2):
        if not l1 and l2:
            return None
        if l1 and not l2:
            return l1

        res = pointer = ListNode()

        while l1 and l2:
            if l1.val > l2.val:
                pointer.next = l2
                l2 = l2.next
            else:
                pointer.next = l1
                l1 = l1.next

            pointer = pointer.next

        while l1 or l2:
            if l1:
                pointer.next = l1
                l1 = l1.next
            else:
                pointer.next = l2
                l2 = l2.next

            pointer = pointer.next

        return res.next
