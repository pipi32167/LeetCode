import unittest

class Solution:
    def findLongestSubarray(self, array):
        array_len = len(array)
        memo = [-2 for i in range(array_len << 1 + 1)]
        memo[array_len] = -1
        begin, end = 0, 0
        res, count = 0, 0
        for i in range(array_len):
            is_num = ord(array[i][0]) >= ord('0') and ord(array[i][0]) <= ord('9')
            count += -1 if is_num else 1
            if memo[count + array_len] <= -2:
                memo[count + array_len] = i
            elif i - memo[count + array_len] > res:
                begin, end = memo[count + array_len] + 1, i + 1
                res = i - memo[count + array_len]
        return array[begin:end]

class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()
        self.assertEqual(s.findLongestSubarray(["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7", "H", "I", "J", "K", "L", "M"]), ["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7"])


if __name__ == "__main__":
    unittest.main()
