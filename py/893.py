class Solution:
    def calcMap(self, s, op=lambda i: True):
        m = {}
        for i in range(0, len(s)):
            if op(i):
                m[s[i]] = m.get(s[i], 0) + 1
        return m

    def isMapEqual(self, map1, map2):
        if len(map1) != len(map2):
            return False

        for [k, v] in map1.items():
            if v != map2.get(k, 0):
                return False
        return True

    def numSpecialEquivGroups(self, A):
        """
        :type A: List[str]
        :rtype: int
        """
        groups = []
        maps1 = []
        maps2 = []
        for i in range(0, len(A)):
            map1 = self.calcMap(A[i])
            map2 = self.calcMap(A[i], lambda i: i % 2 == 0)
            hit = False
            for j in range(0, len(groups)):
                if self.isMapEqual(map1, maps1[j]) and self.isMapEqual(map2, maps2[j]):
                    hit = True
                    groups[j].append(i)
                    break

            if not hit:
                groups.append([i])
                maps1.append(map1)
                maps2.append(map2)
        return len(groups)


s = Solution()
assert(s.numSpecialEquivGroups(["a", "b", "c", "a", "c", "c"]) == 3)
assert(s.numSpecialEquivGroups(["fcrokswjnxglmjouwkht", "shlgnfbgchiiytgxmamc",
                                "hynzlifgupwmwxbrbjdq", "wkklgurjncmtfjoshxwo", "kogsokwjnjrthlfxwcmu"]) == 3)
assert(s.numSpecialEquivGroups(["aa", "bb", "ab", "ba"]) == 4)
assert(s.numSpecialEquivGroups(
    ["abc", "acb", "bac", "bca", "cab", "cba"]) == 3)
assert(s.numSpecialEquivGroups(["abcd", "cdab", "adcb", "cbad"]) == 1)
