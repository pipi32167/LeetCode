import unittest


class Solution:
    def find132pattern(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if len(nums) < 3:
            return False
        before = nums[1] - nums[0]
        for i in range(2, len(nums)):
            now = nums[i] - nums[i-1]
            if before > 0 and now < 0 and nums[i-2] < nums[i]:
                # print(nums[i-2:i+1])
                return True
            before = now
        return False


class SolutionTest(unittest.TestCase):
    def test_find132pattern(self):
        s = Solution()
        self.assertTrue(s.find132pattern([3, 5, 0, 3, 4]))
        self.assertFalse(s.find132pattern([1, 0, 1, -4, -3]))
        self.assertFalse(s.find132pattern([3, 1]))
        self.assertTrue(s.find132pattern([3, 1, 4, 2]))
        self.assertFalse(s.find132pattern([1, 2, 3, 4]))
        self.assertTrue(s.find132pattern([-1, 3, 2, 0]))
        self.assertFalse(s.find132pattern(list(range(15000))))


if __name__ == "__main__":
    unittest.main()
