# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l3 = ListNode(0)
        res = l3
        carry = 0

        while l1 or l2 or carry:
            val = 0
            if l1 and l2:
                val = l1.val+l2.val+carry
                l1 = l1.next
                l2 = l2.next
            
            elif l1:
                val = l1.val+carry
                l1 = l1.next
            
            elif l2:
                val = l2.val+carry
                l2 = l2.next
            
            elif carry:
                val = carry
            
            new_node = ListNode(val % 10)
            carry = val // 10
            l3.next = new_node
            l3 = l3.next
        return res.next



                
                
                


                