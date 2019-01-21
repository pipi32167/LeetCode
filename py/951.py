import unittest
from util_tree import *


def level_iterate(root, parent, nodes, depth=0):

    if depth >= len(nodes):
        nodes.append([])

    if not root:
        return

    nodes[depth].append(root)
    root.parent = parent
    level_iterate(root.left, root, nodes, depth+1)
    level_iterate(root.right, root, nodes, depth+1)


def fromNodesToDict(nodes):
    d = {}
    for node in nodes:
        d[node.val] = node
    return d


class Solution:
    def flipEquiv(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: bool
        """
        nodes1 = []
        level_iterate(root1, None, nodes1)
        nodes2 = []
        level_iterate(root2, None, nodes2)

        if len(nodes1) != len(nodes2):
            return False

        for i in range(len(nodes1)):
            if len(nodes1[i]) != len(nodes2[i]):
                return False
            d2 = fromNodesToDict(nodes2[i])
            for node1 in nodes1[i]:
                if node1.val not in d2:
                    return False
                node2 = d2[node1.val]
                if (node1.parent and not node2.parent) or (not node1.parent and node2.parent):
                    return False
                # print(node1.parent, node2.parent) 
                if node1.parent != None and node1.parent.val != node2.parent.val:
                    return False
        return True


class SolutionTest(unittest.TestCase):
    def test_flipEquiv(self):
        s = Solution()

        root1 = fromListToTree([1, 2, 3, 4, 5, 6, None, None, None, 7, 8])
        root2 = fromListToTree(
            [1, 3, 2, None, 6, 4, 5, None, None, None, None, 8, 7])
        self.assertTrue(s.flipEquiv(root1, root2))


if __name__ == "__main__":
    unittest.main()
