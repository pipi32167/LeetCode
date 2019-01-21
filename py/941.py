import unittest


class Solution:
    def validMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        climb = True

        for i in range(1, len(A)):
            if A[i-1] == A[i]:
                return False

            if climb:
                if A[i-1] > A[i]:
                    if i == 1:
                        return False
                    else:
                        climb = False
            else:
                if A[i-1] <= A[i]:
                    return False

        return not climb


class SolutionTest(unittest.TestCase):
    def test_validMountainArray(self):
        s = Solution()
        self.assertTrue(s.validMountainArray([0, 3, 2, 1]))
        self.assertFalse(s.validMountainArray([2, 1]))
        self.assertFalse(s.validMountainArray([3, 5, 5]))

if __name__ == "__main__":
    unittest.main()