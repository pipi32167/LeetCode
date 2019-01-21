import unittest


def isIn(rec, x, y):
    [x1, y1, x2, y2] = rec
    return x1 < x and y1 < y and x < x2 and y < y2

class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """
        [x11, y11, x12, y12] = rec1
        [x21, y21, x22, y22] = rec2
        x1 = max(x11, x21)
        y1 = max(y11, y21)
        x2 = min(x12, x22)
        y2 = min(y12, y22)
        x = (x1 + x2) / 2
        y = (y1 + y2) / 2
        return isIn(rec1, x, y) and isIn(rec2, x, y)


class SolutionTest(unittest.TestCase):
    def test_reverseOnlyLetters(self):
        s = Solution()
        self.assertTrue(s.isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]))
        self.assertTrue(s.isRectangleOverlap([0, 0, 2, 2], [0, 0, 2, 2]))
        self.assertTrue(s.isRectangleOverlap([0, 0, 2, 2], [0, 0, 1, 2]))
        self.assertTrue(s.isRectangleOverlap([0, 0, 2, 2], [0, 0, 2, 1]))
        self.assertFalse(s.isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]))


if __name__ == "__main__":
    unittest.main()
