import unittest


class Solution:
    def rebuild(self, nodes):
        if len(nodes) == 0:
            raise ValueError

        node = nodes.pop()
        if node == '#':
            return None

        root = TreeNode(node)
        root.left = self.rebuild(nodes)
        root.right = self.rebuild(nodes)
        return root

    def isValidSerialization(self, preorder):
        """
        :type preorder: str
        :rtype: bool
        """
        nodes = preorder.split(",")
        nodes.reverse()

        try:
            root = self.rebuild(nodes)
        except ValueError as err:
            return False

        return len(nodes) == 0


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None


class SolutionTest(unittest.TestCase):
    def test_isValidSerialization(self):
        s = Solution()
        self.assertTrue(s.isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"))
        self.assertFalse(s.isValidSerialization("1,#"))
        self.assertFalse(s.isValidSerialization("9,#,#,1"))


if __name__ == "__main__":
    unittest.main()
