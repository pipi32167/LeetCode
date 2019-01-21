import unittest
from util_tree import *


def dfs(root, nodes, depth=0):
    if not root:
        return

    if depth >= len(nodes):
        nodes.append([])

    nodes[depth].append(root)
    dfs(root.left, nodes, depth+1)
    dfs(root.right, nodes, depth+1)


class CBTInserter:

    def __init__(self, root):
        """
        :type root: TreeNode
        """
        nodes = []
        dfs(root, nodes)
        self.nodes = []
        for i in range(len(nodes)):
            for j in range(len(nodes[i])):
                self.nodes.append(nodes[i][j])

    def insert(self, v):
        """
        :type v: int
        :rtype: int
        """
        node = TreeNode(v)
        self.nodes.append(node)
        idx = len(self.nodes) - 1
        parent = self.nodes[int((idx - 1) / 2)]
        if idx % 2 == 0:
            parent.right = node
        else:
            parent.left = node
        return parent.val

    def get_root(self):
        """
        :rtype: TreeNode
        """
        return self.nodes[0]


class SolutionTest(unittest.TestCase):
    def test_CBTInserter(self):
        root = fromListToTree([1])
        inserter = CBTInserter(root)
        self.assertEqual(inserter.insert(2), 1)
        expect = [1,2]
        actual = level_iterate_flatten(inserter.get_root())
        self.assertListEqual(actual, expect)

        root = fromListToTree([1,2,3,4,5,6])
        inserter = CBTInserter(root)
        self.assertEqual(inserter.insert(7), 3)
        self.assertEqual(inserter.insert(8), 4)
        expect = [1,2,3,4,5,6,7,8]
        actual = level_iterate_flatten(inserter.get_root())
        self.assertListEqual(actual, expect)


if __name__ == "__main__":
    unittest.main()
