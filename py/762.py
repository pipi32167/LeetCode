import unittest


def countBits(num):
    count = 0
    while num > 0:
        count += num & 1
        num = num >> 1
    # print(num, count)
    return count


def maxBit(num):
    i = 0
    r = 0
    for i in range(32):
        if num & (1 << i) > 0:
            r = i
    return r


class Solution:
    def countPrimeSetBits(self, L, R):
        """
        :type L: int
        :type R: int
        :rtype: int
        """

        m = maxBit(R)
        primes = set(
            list(filter(lambda x: x <= m, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])))
        count = 0
        for i in range(L, R+1):
            bits = countBits(i)
            # print(i, bits)
            if bits in primes:
                count += 1
        return count


class SolutionTest(unittest.TestCase):
    def test_countPrimeSetBits(self):
        s = Solution()
        self.assertEqual(s.countPrimeSetBits(842, 888), 23)
        self.assertEqual(s.countPrimeSetBits(220794, 228854), 2690)
        for i in range(100):
            self.assertEqual(s.countPrimeSetBits(483556, 490153), 2531)


if __name__ == "__main__":
    unittest.main()
