import unittest


class Solution:
    def repeatedNTimes(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        s = set()
        for a in A:
            if a in s:
                return a
            else:
                s.add(a)


class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()

        self.assertEqual(s.repeatedNTimes([1, 2, 3, 3]), 3)
        self.assertEqual(s.repeatedNTimes([2, 1, 2, 5, 3, 2]), 2)
        self.assertEqual(s.repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5)


if __name__ == "__main__":
    unittest.main()
