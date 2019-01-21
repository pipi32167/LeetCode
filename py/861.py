import unittest


class Solution:

    def calcScore(self, A):
        r = 0
        length = len(A[0])
        for i in range(len(A)):
            for j in range(len(A[i])):
                if A[i][j] == 1:
                    r += 2 ** (length - 1 - j)
        return r

    def matrixScore(self, A):
        """
        :type A: List[List[int]]
        :rtype: int
        """

        m = len(A)
        n = len(A[0])

        for i in range(m):
            if A[i][0] != 1:
                for j in range(n):
                    A[i][j] = 1 - A[i][j]

        for i in range(1, n):
            ones = 0
            for j in range(m):
                if A[j][i] == 1:
                    ones += 1
                    if ones >= m / 2:
                        break

            if ones >= m / 2:
                continue

            for j in range(m):
                A[j][i] = 1 - A[j][i]

        return self.calcScore(A)


class SolutionTest(unittest.TestCase):
    def test_calcScore(self):
        s = Solution()
        self.assertEqual(s.calcScore([[1, 0, 1]]), 5)
        self.assertEqual(s.calcScore([[0, 0, 1]]), 1)
        self.assertEqual(s.calcScore([[1, 0, 0]]), 4)
        self.assertEqual(s.calcScore([[1, 0, 0], [0, 0, 1]]), 5)

    # def test_flip(self):
    #     s = Solution()
    #     self.assertListEqual(s.flip([[1, 0], [0, 1]], [], set()), [
    #         [[0, 1], [0, 1]],
    #         [[1, 0], [1, 0]],
    #         [[0, 0], [1, 1]],
    #         [[1, 1], [0, 0]],
    #     ])

    def test_matrixScore(self):
        s = Solution()
        self.assertEqual(s.matrixScore(
            [[0, 1], [1, 1]]), 5)
        self.assertEqual(s.matrixScore(
            [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]), 39)
        self.assertEqual(s.matrixScore(
            [[0, 0, 1, 1], [0, 0, 0, 1], [0, 0, 1, 1], [0, 0, 0, 0], [1, 0, 0, 1]]), 65)
        for i in range(100):
            self.assertEqual(s.matrixScore([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]), 22020075)


if __name__ == "__main__":
    unittest.main()
