import unittest


class Solution:
    def isMatch(self, word, pattern):
        d1 = {}
        d2 = {}
        for i in range(0, len(word)):
            c1 = word[i]
            c2 = pattern[i]
            if d1.get(c1) != None:
                if d1.get(c1) != c2:
                    return False
            elif d2.get(c2) != None:
                return False
            else:
                d1[c1] = c2
                d2[c2] = c1
        return True

    def findAndReplacePattern(self, words, pattern):
        """
        :type words: List[str]
        :type pattern: str
        :rtype: List[str]
        """
        return list(filter(lambda word: self.isMatch(word, pattern), words))


class SolutionUnittest(unittest.TestCase):
    def test_findAndReplacePattern(self):
        s = Solution()
        words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"]
        pattern = "abb"
        result = ["mee", "aqq"]
        self.assertListEqual(s.findAndReplacePattern(words, pattern), result)

if __name__ == "__main__":
    unittest.main()