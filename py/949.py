import unittest


def go(A, iA, prefix, r):

    if len(prefix) == 4:
        [hour1, hour2, minute1, minute2] = prefix
        if hour1 > 2 or hour1 == 2 and hour2 > 3 or minute1 > 5:
            return
        r.append("%d%d:%d%d" % (hour1, hour2, minute1, minute2))
        return

    for i in range(len(A)):
        if iA[i]:
            continue

        prefix.append(A[i])
        iA[i] = True
        go(A, iA, prefix, r)
        prefix.pop()
        iA[i] = False


class Solution:

    def genTimes(self, A):
        iA = list(A)
        for i in range(len(iA)):
            iA[i] = False
        r = []
        go(A, iA, [], r)
        return r

    def largestTimeFromDigits(self, A):
        """
        :type A: List[int]
        :rtype: str
        """
        times = self.genTimes(A)
        if len(times) == 0:
            return ""
        times.sort()
        times.reverse()
        # print(times)
        return times[0]


class SolutionTest(unittest.TestCase):
    def test_largestTimeFromDigits(self):
        s = Solution()
        self.assertEqual(s.largestTimeFromDigits([1, 2, 3, 4]), "23:41")
        self.assertEqual(s.largestTimeFromDigits([5, 5, 5, 5]), "")


if __name__ == "__main__":
    unittest.main()
