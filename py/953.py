import unittest


def convert(word, order):
    return list(map(lambda c: order.index(c), list(word)))


class Solution:
    def isAlienSorted(self, words, order):
        """
        :type words: List[str]
        :type order: str
        :rtype: bool
        """
        words[0] = convert(words[0], order)
        for i in range(1, len(words)):
            word1 = words[i-1]
            word2 = words[i] = convert(words[i], order)
            if word1 > word2:
                return False
        return True


class SolutionTest(unittest.TestCase):
    def test_isAlienSorted(self):
        s = Solution()
        words = ["hello", "leetcode"]
        order = "hlabcdefgijkmnopqrstuvwxyz"
        self.assertTrue(s.isAlienSorted(words, order))
        words = ["word", "world", "row"]
        order = "worldabcefghijkmnpqstuvxyz"
        self.assertFalse(s.isAlienSorted(words, order))
        words = ["apple", "app"]
        order = "abcdefghijklmnopqrstuvwxyz"
        self.assertFalse(s.isAlienSorted(words, order))


if __name__ == "__main__":
    unittest.main()
