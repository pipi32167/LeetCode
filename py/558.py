import unittest


class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight

class Solution:
    def intersect(self, quadTree1, quadTree2):
        """
        :type quadTree1: Node
        :type quadTree2: Node
        :rtype: Node
        """

        if not quadTree1 and not quadTree2:
            return Node(False, True, None, None, None, None)

        if not quadTree1 and quadTree2:
            return Node(quadTree2.val, quadTree2.isLeaf, quadTree2.topLeft, quadTree2.topRight, quadTree2.bottomLeft, quadTree2.bottomRight)

        if not quadTree2 and quadTree1:
            return Node(quadTree1.val, quadTree1.isLeaf, quadTree1.topLeft, quadTree1.topRight, quadTree1.bottomLeft, quadTree1.bottomRight)

        if quadTree1 and quadTree1.isLeaf and quadTree1.val or quadTree2 and quadTree2.isLeaf and quadTree2.val:
            return Node(True, True, None, None, None, None)

        topLeft = self.intersect(
            quadTree1.topLeft, quadTree2.topLeft)
        topRight = self.intersect(
            quadTree1.topRight, quadTree2.topRight)
        bottomLeft = self.intersect(
            quadTree1.bottomLeft, quadTree2.bottomLeft)
        bottomRight = self.intersect(
            quadTree1.bottomRight, quadTree2.bottomRight)

        if topLeft.isLeaf and topRight.isLeaf and bottomLeft.isLeaf and bottomRight.isLeaf and topLeft.val == topRight.val and topLeft.val == bottomLeft.val and topLeft.val == bottomRight.val:
            return Node(topLeft.val, True, None, None, None, None)
        else:
            return Node(False, False, topLeft, topRight, bottomLeft, bottomRight)


class SolutionTest(unittest.TestCase):
    def test_intersect(self):
        s = Solution()
        self.assertIsNone(s.intersect(None, None)) 
        quadTree1 = Node(True, True, None, None, None, None)
        quadTree2 = Node(False, True, None, None, None, None)
        expect = Node(True, True, None, None, None, None)
        actual = s.intersect(quadTree1, quadTree2)
        self.assertEqual(expect.val, actual.val)
        self.assertEqual(expect.isLeaf, actual.isLeaf)
        
        quadTree1 = Node(True, False, None, None, None, None)
        quadTree1.topLeft = Node(False, False, None, None, None, None)
        quadTree2 = Node(False, True, None, None, None, None)
        expect = Node(True, True, None, None, None, None)
        actual = s.intersect(quadTree1, quadTree2)
        self.assertEqual(expect.val, actual.val)
        self.assertEqual(expect.isLeaf, actual.isLeaf)


if __name__ == "__main__":
    unittest.main()
