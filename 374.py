import math

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0

theNum = 1

def guess(num):
    if num > theNum:
        return -1
    elif num == theNum:
        return 0
    else: 
        return 1

# print guess(1)
# print guess(6)
# print guess(7)

class Solution(object):
    begin = None
    end = None
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        begin = self.begin or 1
        end = self.end or n
        mid = int(math.floor((begin + end) / 2))
        res = guess(mid)
        if res == 0:
            return mid
        elif res == -1:
            self.end = mid - 1
            return self.guessNumber(n)
        else:
            self.begin = mid + 1
            return self.guessNumber(n)
        
solution = Solution()
print solution.guessNumber(1)