class Solution:
    def swap(self, nums, i, j):
        t = nums[i]
        nums[i] = nums[j]
        nums[j] = t

    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        m = len(A)
        if m == 0:
            return A
        n = len(A[0])

        for i in range(0, m):
            j = 0
            k = n - 1
            while j < k:
                self.swap(A[i], j, k)
                A[i][j] = 1 - A[i][j]
                A[i][k] = 1 - A[i][k]
                j += 1
                k -= 1
            if j == k:
                A[i][j] = 1 - A[i][j]

        return A

s = Solution()
