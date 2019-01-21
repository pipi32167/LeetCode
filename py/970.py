import unittest


class Solution:
    def powerfulIntegers(self, x, y, bound):
        """
        :type x: int
        :type y: int
        :type bound: int
        :rtype: List[int]
        """
        s = set()
        i = 0
        while True:
            x2 = x ** i
            hit = False
            j = 0
            while True:
                y2 = y ** j
                r = x2 + y2
                if r > bound:
                    break
                hit = r not in s
                s.add(r)
                if y == 1:
                    break
                j += 1

            if not hit or x == 1:
                break
            i += 1
        return list(s)


class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()

        self.assertListEqual(s.powerfulIntegers(
            2, 3, 10), [2, 3, 4, 5, 7, 9, 10])
        self.assertListEqual(s.powerfulIntegers(
            3, 5, 15), [2, 4, 6, 8, 10, 14])
        self.assertListEqual(s.powerfulIntegers(
            1, 2, 100), [33, 2, 3, 65, 5, 9, 17])
        self.assertListEqual(s.powerfulIntegers(
            1, 1, 2), [2])


if __name__ == "__main__":
    unittest.main()
