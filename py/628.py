from functools import reduce

class Solution:
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort(key=lambda a: -a)
        nums1 = nums[0:3]
        nums2 = nums[0:1]
        nums2.extend(nums[-2:])
        return max(
            reduce(lambda p, e: p * e, nums1),
            reduce(lambda p, e: p * e, nums2)
        )
        # return


s = Solution()
print(s.maximumProduct([1, 2, 3]))
print(s.maximumProduct([-4, -3, -2, -1, 50, 60]))
print(s.maximumProduct([-4, 1, 50, 60]))
