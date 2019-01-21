import unittest


class Solution:

    def minFlipsMonoIncr(self, S):
        """
        :type S: str
        :rtype: int
        """
        S = list(S)
        count0 = [0] * len(S)
        count1 = [0] * len(S)
        dp = [[0] * len(S)] * len(S)
        for i in reversed(range(len(S))):
            for j in range(i+1, len(S)):
                dp[i][j] = dp[i+1][j]
                if S[i] < S[i+1]:
                    dp[i][j] += 1

        return dp[0][-1]


class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()
        "010101010"
        self.assertEqual(s.minFlipsMonoIncr("00110"), 1)
        self.assertEqual(s.minFlipsMonoIncr("010110"), 2)
        self.assertEqual(s.minFlipsMonoIncr("00011000"), 2)
        self.assertEqual(s.minFlipsMonoIncr("0001111000"), 3)


if __name__ == "__main__":
    unittest.main()
