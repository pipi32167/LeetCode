import unittest
from random import randint

def shuffle(nums):
    
    size = len(nums)
    for i in range(size):
        j = randint(0, size - 1)
        [nums[i], nums[j]] = [nums[j], nums[i]]
    return nums

class Random:
    def __init__(self, nums):
        self.rands = shuffle(nums)
        self.i = 0
    
    def next(self):
        r = self.rands[self.i]
        self.i += 1
        return r

class Solution:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.originNums = nums[:]
        self.nums = nums[:]

    def reset(self):
        """
        Resets the array to its original configuration and return it.
        :rtype: List[int]
        """
        self.nums[:] = self.originNums[:]
        return self.nums

    def shuffle(self):

        """
        Returns a random shuffling of the array.
        :rtype: List[int]
        """
        # jstart = randint(1, len(self.nums))
        # print("jstart:%d" % (jstart))
        for i in range(len(self.nums)):
            j = randint(0, len(self.nums) - 1)
            # print("i:%d, j:%d" % (i, j))
            [self.nums[i], self.nums[j]] = [self.nums[j], self.nums[i]]
        return self.nums



class SolutionTest(unittest.TestCase):
    def test(self):

        # s = Solution(list(range(100000)))
        # for i in range(10):
        #     s.shuffle()
        #     s.reset()
        s = Solution([-6,10,184])
        for i in range(100):
            print(s.shuffle())
            # print(s.reset())
            s.reset()



if __name__ == "__main__":
    unittest.main()
