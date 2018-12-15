
import unittest


def trim(s, c=" "):
    i = 0
    for k in range(0, len(s)):
        i = k
        if s[k] != c:
            if s[k] == ".":
                i -= 1
            break
    j = len(s)
    for k in range(len(s), 0, -1):
        j = k
        if s[k-1] != c:
            break
    return s[i:j]


class Solution:
    def isValid(self, S, i, j):
        s = S[i:j+1]
        if len(s) > 1 and float(s) == 0:
            return False
        return True

    def isValid2(self, e):
        e2 = float(e)
        if e2 == int(e2):
            return len(str(int(e2))) == len(e)
        else:

            return len(trim(e, "0")) == len(e)

    def gen(self, S, i, j):
        s = S[i:j+1]
        r = []
        if self.isValid2(s):
            r.append(s)
        for k in range(1, len(s)):
            e = s[0:k] + "." + s[k:]
            # print(e, self.isValid2(e))
            if self.isValid2(e):
                r.append(e)
        return r

    def ambiguousCoordinates(self, S):
        """
        :type S: str
        :rtype: List[str]
        """
        S = S[1:-1]
        r = []
        for i in range(0, len(S) - 1):
            if self.isValid(S, 0, i) and self.isValid(S, i+1, len(S) - 1):
                left = self.gen(S, 0, i)
                right = self.gen(S, i+1, len(S) - 1)
                # print("left", left)
                # print("right", right)
                for s1 in left:
                    for s2 in right:
                        r.append("(%s, %s)" % (s1, s2))

        # print(r)
        return r


class TestSolution(unittest.TestCase):
    def test_trim(self):
        self.assertEqual(trim("  1234"), "1234")
        self.assertEqual(trim("1234  "), "1234")
        self.assertEqual(trim("   1234  "), "1234")
        self.assertEqual(trim("xxx1234xxx", "x"), "1234")

    def test_gen(self):
        s = Solution()
        self.assertListEqual(s.gen("12", 0, 1), ["12", "1.2"])
        self.assertListEqual(s.gen("100", 0, 2), ["100"])
        self.assertListEqual(s.gen("001", 0, 2), ["0.01"])
        self.assertListEqual(s.gen("0", 0, 0), ["0"])
        self.assertListEqual(s.gen("000001", 0, 5), ["0.00001"])

    def test_ambiguousCoordinates(self):
        s = Solution()
        l = s.ambiguousCoordinates("(123)")
        r = ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
        l.sort(), r.sort()
        self.assertListEqual(l, r)
        l = s.ambiguousCoordinates("(00011)")
        r = ["(0.001, 1)", "(0, 0.011)"]
        l.sort(), r.sort()
        self.assertListEqual(l, r)
        l = s.ambiguousCoordinates("(0123)")
        r = ["(0, 123)", "(0, 12.3)", "(0, 1.23)",
             "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
        l.sort(), r.sort()
        self.assertListEqual(l, r)
        l = s.ambiguousCoordinates("(100)")
        r = ["(10, 0)"]
        l.sort(), r.sort()
        self.assertListEqual(l, r)
        l = s.ambiguousCoordinates("(0000001)")
        r = ["(0, 0.00001)"]
        l.sort(), r.sort()
        self.assertListEqual(l, r)


if __name__ == "__main__":
    unittest.main()
