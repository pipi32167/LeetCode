import unittest
from math import log, ceil


class Solution(object):
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        """
        :type buckets: int
        :type minutesToDie: int
        :type minutesToTest: int
        :rtype: int
        """
        rounds = minutesToTest / minutesToDie + 1
        count = ceil(log(buckets) / log(rounds))
        return int(count)


class SolutionTest(unittest.TestCase):
    def test_poorPigs(self):
        s = Solution()
        self.assertEqual(s.poorPigs(1000, 15, 60), 5)
        self.assertEqual(s.poorPigs(1, 1, 1), 0)


if __name__ == "__main__":
    unittest.main()
