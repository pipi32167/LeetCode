

class Solution:
    def numComponents(self, head, G):
        """
        :type head: ListNode
        :type G: List[int]
        :rtype: int
        """
        count = 0
        s = set(G)
        hit = False
        while head:
            hit2 = head.val in s
            if not hit and hit2:
                count += 1
                s.add(head.val)
            hit = hit2
            head = head.next
        return count


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):

        r = [self.val]
        head = self.next
        while head:
            r.append(head.val)
            head = head.next
        return "%s" % r


s = Solution()


def build(l):
    head = None
    tail = None
    for i in l:
        if not head:
            head = tail = ListNode(i)
        else:
            tail.next = ListNode(i)
            tail = tail.next
    return head


l = build([0, 1, 2, 3])
# print(l)
print(s.numComponents(l, [0, 1, 3]))
