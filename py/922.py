class Solution:
    def sortArrayByParityII(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        odds = []
        evens = []
        for i in A:
            if i % 2 == 0:
                evens.append(i)
            else:
                odds.append(i)
        r = []
        for i in range(len(A)):
            if i % 2 == 0:
                r.append(evens.pop())
            else:
                r.append(odds.pop())
        return r
