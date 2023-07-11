# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        arr = []
        new_node = head
        while new_node:
            arr.append(new_node.val)
            new_node = new_node.next

        index = math.ceil(len(arr)/2.0) if len(arr)%2 > 0 else (len(arr)/2) + 1
        new_node = head

        while index > 1:
            new_node = new_node.next
            index -= 1
        
        return new_node
