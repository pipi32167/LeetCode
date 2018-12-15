class Solution:
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        s = 0
        for i in nums[0:k-1]:
            s += i
        m = -10000000
        for i in range(k-1, len(nums)):
            s += nums[i]
            r = s / k
            if m < r:
                m = r
            # print(i, nums[i], s, r)
            s -= nums[i-k+1]
        return m


s = Solution()
print(s.findMaxAverage([1, 12, -5, -6, 50, 3], 4))
