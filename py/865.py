import unittest
from util_tree import *


def dfs(root, parent, d, depth):
    if not root:
        return

    root.depth = depth
    root.parent = parent
    if d["maxDepth"] == depth:
        d["result"].append(root)
    elif d["maxDepth"] < depth:
        d["maxDepth"] = depth
        d["result"] = [root]
    dfs(root.left, root, d, depth + 1)
    dfs(root.right, root, d, depth + 1)

def isAllNodesSame(nodes):
    val = nodes[0].val
    for node in nodes:
        if val != node.val:
            return False
    return True

class Solution:
    def subtreeWithAllDeepest(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        d = { "maxDepth": 0, "result": [] }
        dfs(root, None, d, 0)
        nodes = d["result"]
        if len(nodes) == 0:
            return None
        while not isAllNodesSame(nodes):
            for i in range(len(nodes)):
                nodes[i] = nodes[i].parent

        return nodes[0]


class SolutionTest(unittest.TestCase):
    def test_subtreeWithAllDeepest(self):
        s = Solution()

        root = fromListToTree([3, 5, 1, 6, 2, 0, 8, None, None, 7, 4])
        expect = [2, 7, 4]
        actual = []
        dfs_pre(s.subtreeWithAllDeepest(root), actual)
        self.assertListEqual(actual, expect)


if __name__ == "__main__":
    unittest.main()
