import unittest


class Solution:
    def numberOfLines(self, widths, S):
        """
        :type widths: List[int]
        :type S: str
        :rtype: List[int]
        """
        lines = 1
        nowWidth = 0
        S = bytes(S, "ascii")
        CODE_START = bytes("a", "ascii")[0]
        for c in S:
            needWidth = widths[c - CODE_START]
            if nowWidth + needWidth > 100:
                lines += 1
                nowWidth = 0
            nowWidth += needWidth
        return [lines, nowWidth]


class SolutionTest(unittest.TestCase):
    def test_numberOfLines(self):

        s = Solution()

        widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        S = "abcdefghijklmnopqrstuvwxyz"
        self.assertListEqual(s.numberOfLines(widths, S), [3, 60])

        widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        S = "bbbcccdddaaa"
        self.assertListEqual(s.numberOfLines(widths, S), [2, 4])

if __name__ == "__main__":
    unittest.main()