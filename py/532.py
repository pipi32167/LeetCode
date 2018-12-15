class Solution:
    def findPairs(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if k < 0:
            return 0
        if k == 0:
            s1 = set()
            s = set()
            for n in nums:
                if n in s1:
                    s.add(n)
                s1.add(n)
                  
            return len(s)

        s = set(nums)
        count = 0
        for n in s:
            if (n + k) in s:
                count += 1
        return count

s = Solution()
assert(s.findPairs([1, 3, 1, 5, 4], -1) == 0)
assert(s.findPairs([1, 3, 1, 5, 4], 0) == 1)
assert(s.findPairs([1, 3, 1, 5, 4], 1) == 2)
assert(s.findPairs([1, 3, 1, 5, 4], 2) == 2)
assert(s.findPairs([1, 1, 1, 1, 1], 0) == 1)