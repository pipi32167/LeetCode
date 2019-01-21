import unittest


def mkMatrix(m, n):
    r = []
    for i in range(m):
        r.append(list(range(n)))
    return r


class Solution:
    def transpose(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        B = mkMatrix(len(A[0]), len(A))
        # print(B)
        for i in range(len(A)):
            for j in range(len(A[0])):
                B[j][i] = A[i][j]
        return B


class SolutionTest(unittest.TestCase):
    def test_transpose(self):
        s = Solution()
        A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        B = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
        self.assertListEqual(s.transpose(A), B)


if __name__ == "__main__":
    unittest.main()
