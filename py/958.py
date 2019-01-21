import unittest
from util_tree import *

def level_iterate(root, nodes, parent=None, depth=0):

    if depth >= len(nodes):
        nodes.append([])

    if not root:
        nodes[depth].append(None)
        return

    root.parent = parent
    nodes[depth].append(root)
    level_iterate(root.left, nodes, root, depth+1)
    level_iterate(root.right, nodes, root, depth+1)

def level_iterate_flatten(root):
    r = []
    level_iterate(root, r)
    nodes = []
    for i in range(len(r)):
        for j in range(len(r[i])):
            nodes.append(r[i][j])
    
    while nodes[-1] == None:
        nodes.pop()
    return nodes

class Solution:
    def isCompleteTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        nodes = level_iterate_flatten(root)
        for i in range(1, len(nodes)):
            node = nodes[i]
            if node == None:
                return False
            parent = nodes[int((i - 1) / 2)]
            if node.parent.val != parent.val:
                return False

        return True



class SolutionTest(unittest.TestCase):
    def test_isCompleteTree(self):
        s = Solution()

        root = fromListToTree([1,2,3,4,5,6])
        self.assertTrue(s.isCompleteTree(root))

        root = fromListToTree([1,2,3,4,5,None,7])
        self.assertFalse(s.isCompleteTree(root))


if __name__ == "__main__":
    unittest.main()
