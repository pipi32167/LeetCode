class Solution:
    def buddyStrings(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) != len(B):
            return False

        diff = []
        m = {}
        for i in range(0, len(A)):
            if A[i] != B[i]:
                diff.append(i)
                if len(diff) > 2:
                    return False
            m[A[i]] = m.get(A[i], 0) + 1

        if len(diff) == 2:
            [i, j] = diff
            return A[i] == B[j] and A[j] == B[i]
        elif len(diff) == 0:
            for v in m.values():
                if v > 1:
                    return True
        return False


s = Solution()
assert(s.buddyStrings("ab", "ba"))
assert(not s.buddyStrings("ab", "ab"))
assert(s.buddyStrings("aa", "aa"))
