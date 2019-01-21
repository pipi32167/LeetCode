import unittest


def popup(stack, ops, res):
    v = stack.pop()
    op = ops.pop()
    if op == "+":
        res += v
    else:
        res *= 2
    return res


class Solution:
    def scoreOfParentheses(self, S):
        """
        :type S: str
        :rtype: int
        """
        # print("scoreOfParentheses", S)
        stack = []
        ops = []
        res = -1
        for c in S:
            if c == "(":
                if res >= 1:
                    stack.append(res)
                    ops.append("+")
                elif res == 0:
                    stack.append(res)
                    ops.append("^")
                res = 0
            elif c == ")":
                if res == 0:
                    res += 1
                elif len(stack) > 0:
                    res = popup(stack, ops, res)

                while len(ops) > 0 and ops[-1] == '+':
                    res = popup(stack, ops, res)
            # print(c, stack, ops, res)

        while len(stack) > 0:
            res = popup(stack, ops, res)
            # print(stack, ops, res)

        return res


class SolutionTest(unittest.TestCase):
    def test_scoreOfParentheses(self):
        s = Solution()
        self.assertEqual(s.scoreOfParentheses("(()())()"), 5)
        self.assertEqual(s.scoreOfParentheses("(()(()))()"), 7)
        self.assertEqual(s.scoreOfParentheses("()"), 1)
        self.assertEqual(s.scoreOfParentheses("(())"), 2)
        self.assertEqual(s.scoreOfParentheses("((()))"), 4)
        self.assertEqual(s.scoreOfParentheses("(((())))"), 8)
        self.assertEqual(s.scoreOfParentheses("()()"), 2)
        self.assertEqual(s.scoreOfParentheses("()()()()()"), 5)
        self.assertEqual(s.scoreOfParentheses("(()())"), 4)
        self.assertEqual(s.scoreOfParentheses("(()(()))"), 6)


if __name__ == "__main__":
    unittest.main()
