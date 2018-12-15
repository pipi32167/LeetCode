from math import floor

class Solution(object):
    def constructRectangle(self, area):
        """
        :type area: int
        :rtype: List[int]
        """
        u = int(pow(area, 0.5))
        l = 0
        # print l, u
        for i in range(u, l, -1):
            if area % i == 0:
                j = int(area / i)
                return i >= j and [i, j] or [j, i]


if __name__ == "__main__":
    s = Solution()
    print s.constructRectangle(1)
    print s.constructRectangle(4)
