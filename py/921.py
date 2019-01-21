import unittest
from collections import deque


class Solution:
    def minAddToMakeValid(self, S):
        """
        :type S: str
        :rtype: int
        """
        stack = deque()
        cnt = 0
        for c in S:
            if c == '(':
                stack.append(c)
            elif c == ')':
                if len(stack) > 0 and stack[len(stack) - 1] == '(':
                    stack.popleft()
                else:
                    cnt += 1
        cnt += len(stack)
        return cnt


class SolutionTest(unittest.TestCase):
    def test_minAddToMakeValid(self):
        s = Solution()
        self.assertEqual(s.minAddToMakeValid("())"), 1)
        self.assertEqual(s.minAddToMakeValid("((("), 3)
        self.assertEqual(s.minAddToMakeValid("()"), 0)
        self.assertEqual(s.minAddToMakeValid("()))(("), 4)


if __name__ == "__main__":
    unittest.main()
