import time
import unittest
import json

CODE_START = bytes("a", "ascii")[0]
CODE_END = bytes("z", "ascii")[0]

EMTPY_MAP = []
for i in range(CODE_START, CODE_END+1):
    EMTPY_MAP.append(0)

class Solution:
    def mkMap(self):
        return list(EMTPY_MAP)

    def calcMap(self, s):
        r = self.mkMap()
        s = bytes(s, "ascii")
        # print(r)
        for c in s:
            # print(c - CODE_START)
            r[c - CODE_START] += 1
        return r

    def merge(self, maps):
        r = self.mkMap()
        for m in maps:
            # print(m)
            for i in range(0, len(m)):
                r[i] = max(r[i], m[i])
        return r

    def isMatch(self, map1, map2):
        for i in range(0, len(map1)):
            if map1[i] < map2[i]:
                return False
        return True

    def wordSubsets(self, A, B):
        """
        :type A: List[str]
        :type B: List[str]
        :rtype: List[str]
        """
        now = time.time()
        mapA = list(map(self.calcMap, A))
        # print("step1", time.time() - now)
        # now = time.time()
        mapB = list(map(self.calcMap, B))
        # print("step2.1", time.time() - now)
        # now = time.time()
        mapB = self.merge(mapB)
        # print("step2.2", time.time() - now)
        # now = time.time()
        # print(mapA)
        # print(mapB)
        r = []
        for i in range(0, len(A)):
            if self.isMatch(mapA[i], mapB):
                r.append(A[i])
        # print("step3", time.time() - now)
        # now = time.time()
        return r


class SolutionTest(unittest.TestCase):
    def test_wordSubsets(self):
        s = Solution()
        A = ["amazon", "apple", "facebook", "google", "leetcode"]
        B = ["e", "o"]
        result = ["facebook", "google", "leetcode"]
        self.assertListEqual(s.wordSubsets(A, B), result)
        A = ["amazon", "apple", "facebook", "google", "leetcode"]
        B = ["l", "e"]
        result = ["apple", "google", "leetcode"]
        self.assertListEqual(s.wordSubsets(A, B), result)
        A = ["amazon", "apple", "facebook", "google", "leetcode"]
        B = ["e", "oo"]
        result = ["facebook", "google"]
        self.assertListEqual(s.wordSubsets(A, B), result)
        A = ["amazon", "apple", "facebook", "google", "leetcode"]
        B = ["lo", "eo"]
        result = ["google", "leetcode"]
        self.assertListEqual(s.wordSubsets(A, B), result)
        A = ["amazon", "apple", "facebook", "google", "leetcode"]
        B = ["ec", "oc", "ceo"]
        result = ["facebook", "leetcode"]
        self.assertListEqual(s.wordSubsets(A, B), result)
        f = open("../js/916_input2.json", "r")
        sample = json.loads(f.readlines()[0])["sample1"]
        f.close()
        A = sample["A"]
        B = sample["B"]
        result = sample["result"]
        self.assertListEqual(s.wordSubsets(A, B), result)


if __name__ == "__main__":
    unittest.main()
