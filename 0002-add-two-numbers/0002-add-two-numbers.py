# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l3 = ListNode(0)
        carry = 0
        res = l3

        while l1 or l2 or carry:
            num1 = l1.val if l1 else 0
            num2 = l2.val if l2 else 0

            sum1 = num1 + num2 + carry
            new_node = ListNode(sum1 % 10)
            carry = sum1 // 10
            l3.next = new_node
            l3 = l3.next
            
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        
        return res.next





                
                
                


                