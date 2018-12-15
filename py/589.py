class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children


class Solution(object):
    def __init__(self, ):
        self.result = []

    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if not root:
            return self.result

        self.result.append(root.val)

        for item in root.children:
            self.preorder(item)

        return self.result

