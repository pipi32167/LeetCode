import unittest


class Solution:

    def nextCells(self, cells):
        size = len(cells)
        r = list(cells)
        for i in range(size):
            if i == 0 or i == size - 1:
                r[i] = 0
                continue
            if cells[i-1] == cells[i+1]:
                r[i] = 1
            else:
                r[i] = 0

        return r

    def toNumber(self, cells):
        
        r = 0
        for cell in cells[:-1]:
            r += cell
            r <<= 1
        r += cells[-1]
        return r

    def toCells(self, n):
        r = []
        while n > 0:
            r.append(n % 2)
            n >>= 1
        while len(r) < 8:
            r.append(0)
        r.reverse()
        return r

    def prisonAfterNDays(self, cells, N):
        """
        :type cells: List[int]
        :type N: int
        :rtype: List[int]
        """
        n = self.toNumber(cells)
        l = [n]
        # rs = [cells]
        # print(cells, n)
        start = -1
        for i in range(N):
            cells = self.nextCells(cells)
            n = self.toNumber(cells)
            # print(cells, n)
            if n in l:
                start = l.index(n)
                break
            l.append(n)
            # rs.append(cells)
        # print(rs)
        # print(l)
        # print("start: %d, len: %d, idx: %d" % (start, len(l[start:]), start + (N - start) % len(l[start:])))
        # r = self.toCells(l[N % (i + 1)])
        r = l[start + (N - start) % (len(l) - start)]
        r = self.toCells(r)
        # r = cells
        return r


class SolutionTest(unittest.TestCase):
    def test_toNumber(self):
        s = Solution()
        self.assertEqual(s.toNumber([0, 1, 0, 0, 1, 0, 1, 1]), 75)
        self.assertEqual(s.toNumber([0, 1, 0, 0, 1, 1, 0, 0]), 76)

    def test_prisonAfterNDays(self):
        s = Solution()
        self.assertListEqual(s.prisonAfterNDays(
            [0, 1, 0, 0, 1, 0, 1, 1], 4), [0,1,1,0,1,1,0,0])
        self.assertListEqual(s.prisonAfterNDays(
            [0, 1, 0, 1, 1, 0, 0, 1], 7), [0, 0, 1, 1, 0, 0, 0, 0])
        self.assertListEqual(s.prisonAfterNDays(
            [0, 1, 0, 1, 1, 0, 0, 1], 14), [0, 0, 0, 0, 1, 1, 0, 0])
        self.assertListEqual(s.prisonAfterNDays(
            [0, 1, 0, 1, 1, 0, 0, 1], 15), [0, 1, 1, 0, 0, 0, 0, 0])
            
        self.assertListEqual(s.prisonAfterNDays(
            [1, 0, 0, 1, 0, 0, 1, 0], 1000000000), [0, 0, 1, 1, 1, 1, 1, 0])


if __name__ == "__main__":
    unittest.main()
