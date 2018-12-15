class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children


class Solution(object):
    def maxDepth(self, root, depth=0):
        """
        :type root: Node
        :rtype: int
        """
        if not root:
            return depth

        max_depth = depth + 1
        for item in root.children:
            max_depth = max(max_depth, self.maxDepth(item, depth + 1))
        return max_depth

if __name__ == "__main__":
    s = Solution()
    print s.maxDepth(None)
    print s.maxDepth(Node(0, [Node(1, [])]))