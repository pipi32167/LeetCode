import unittest


class Solution:
    def go(self, n, i, r):
        """
        :type i: int
        :type p: int
        :type r: List[int]
        """
        i *= 10
        for j in range(10):
            i2 = i + j
            if i2 > n:
                break
            r.append(i2)
            self.go(n, i2, r)

    def lexicalOrder(self, n):
        """
        :type n: int
        :rtype: List[int]
        """

        r = []
        for i in range(1, 10):
            if i > n:
                break
            r.append(i)
            self.go(n, i, r)
        # print(r)
        return r


class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()

        self.assertListEqual(s.lexicalOrder(1), [1])
        self.assertListEqual(s.lexicalOrder(
            13), [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9])
        s.lexicalOrder(5000000)


if __name__ == "__main__":
    unittest.main()
