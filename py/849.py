class Solution:
    def maxDistToClosest(self, seats):
        """
        :type seats: List[int]
        :rtype: int
        """
        s = []
        for i in range(0, len(seats)):
            if seats[i] == 1:
                s.append(i)
        s.insert(0, -s[0])
        s.append(2 * (len(seats) - 1) - s[len(s) - 1])

        # print(s)
        m = 0
        for i in range(1, len(s)):
            dist = int((s[i] - s[i-1]) / 2)
            if m < dist:
                m = dist
        return m


s = Solution()
assert(s.maxDistToClosest([1, 0, 0, 0, 1, 0, 1]) == 2)
assert(s.maxDistToClosest([1, 0, 0, 0]) == 3)
