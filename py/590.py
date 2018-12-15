
class Solution(object):
    def __init__(self, ):
        self.result = []

    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if not root:
            return self.result

        for item in root.children:
            self.postorder(item)

        self.result.append(root.val)

        return self.result
