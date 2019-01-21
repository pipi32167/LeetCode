import unittest


class Solution:
    def reachNumber(self, target):
        """
        :type target: int
        :rtype: int
        """
        target = abs(target)
        n = round(pow(target * 2, 0.5))
        s = n * (n + 1) / 2
        if (s - target) % 2 == 0:
            return n
        else:
            if (n + 1) % 2 == 1:
                return n+1
            else:
                return n+2


class SolutionTest(unittest.TestCase):
    def test_reachNumber(self):
        s = Solution()
        self.assertEqual(s.reachNumber(12), 7)
        self.assertEqual(s.reachNumber(5), 5)
        self.assertEqual(s.reachNumber(-1), 1)
        self.assertEqual(s.reachNumber(3), 2)
        self.assertEqual(s.reachNumber(2), 3)


if __name__ == "__main__":
    unittest.main()
