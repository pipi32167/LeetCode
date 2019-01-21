import unittest

LT = 0
EQ = 1
GT = 2

class Solution:
    def minDeletionSize(self, A):
        """
        :type A: List[str]
        :rtype: int
        """
        r = []
        for i in range(len(A)):
            A[i] = list(A[i])

        for i in range(len(A[0])):
            state = LT
            for j in range(1, len(A)):
                a1 = A[j-1][0:i+1] 
                a2 = A[j][0:i+1]
                if a1 > a2:
                    r.append(i)
                    state = GT
                    break
                elif a1 == a2:
                    state = EQ

            if state == LT:
                break

            if state == GT:
                for j in range(0, len(A)):
                    A[j][i] = ''

        return len(r)


class SolutionTest(unittest.TestCase):
    def test_minDeletionSize(self):
        s = Solution()
        self.assertEqual(s.minDeletionSize(["ca", "bb", "ac"]), 1)
        self.assertEqual(s.minDeletionSize(["xc", "yb", "za"]), 0)
        self.assertEqual(s.minDeletionSize(["zyx", "wvu", "tsr"]), 3)
        self.assertEqual(s.minDeletionSize(["xga", "xfb", "yfa"]), 1)


if __name__ == "__main__":
    unittest.main()
