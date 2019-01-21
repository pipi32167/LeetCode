import unittest

class Solution:
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        s = []
        i = 0
        for num in pushed:
            s.append(num)
            while len(s) > 0 and s[-1] == popped[i]:
                s.pop()
                i += 1
        return len(s) == 0


class SolutionTest(unittest.TestCase):
    def test_minAddToMakeValid(self):
        s = Solution()
        self.assertTrue(s.validateStackSequences(
            [1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
        self.assertFalse(s.validateStackSequences(
            [1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))


if __name__ == "__main__":
    unittest.main()
