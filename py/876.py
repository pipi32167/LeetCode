# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        length = 0
        oldHead = head
        while head:
            length += 1
            head = head.next

        mid = int(length / 2)
        i = 0
        head = oldHead
        while i < mid:
            i += 1
            head = head.next
        return head
