import unittest


class Solution:
    def reverseOnlyLetters(self, S):
        """
        :type S: str
        :rtype: str
        """
        S = list(S)
        i = 0
        j = len(S) - 1
        # print(S)
        while (i < j):
            # print(i, j)
            while not S[i].isalpha() and i < j:
                i += 1
            while not S[j].isalpha() and i < j:
                j -= 1
            if i < j:
                [S[i], S[j]] = [S[j], S[i]]
                i += 1
                j -= 1
        return "".join(S)


class SolutionTest(unittest.TestCase):
    def test_reverseOnlyLetters(self):
        s = Solution()
        self.assertEqual(s.reverseOnlyLetters("7_28]"), "7_28]")
        self.assertEqual(s.reverseOnlyLetters("ab-cd"), "dc-ba")
        self.assertEqual(s.reverseOnlyLetters(
            "a-bC-dEf-ghIj"), "j-Ih-gfE-dCba")
        self.assertEqual(s.reverseOnlyLetters(
            "Test1ng-Leet=code-Q!"), "Qedo1ct-eeLg=ntse-T!")


if __name__ == "__main__":
    unittest.main()
