import unittest


class Solution:
    def inRowCount(self, word, row):

        count = 0
        for c in word:
            if c in row:
                count += 1
        return count

    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        rows = [
            "QWERTYUIOPqwertyuiop",
            "ASDFGHJKLasdfghjkl",
            "ZXCVBNMzxcvbnm",
        ]
        r = []
        for word in words:
            for row in rows:
                count = self.inRowCount(word, row)
                if count > 0:
                    if count == len(word):
                        r.append(word)
                    break

        return r


class SolutionTest(unittest.TestCase):
    def test_findWords(self):
        s = Solution()
        self.assertListEqual(s.findWords(
            ["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"])


if __name__ == "__main__":
    unittest.main()
