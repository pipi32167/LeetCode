import random

class Solution:

    def __init__(self, n_rows, n_cols):
        """
        :type n_rows: int
        :type n_cols: int
        """
        self._rows = n_rows
        self._cols = n_cols
        self._count = n_rows * n_cols
        self._ones = set()
        # self.reset()

    def flip(self):
        """
        :rtype: List[int]
        """
        while True:
            rnd = random.randrange(self._count)
            if rnd not in self._ones:
                self._ones.add(rnd)
                row = int(rnd / self._cols)
                col = rnd % self._cols
                return [row, col]

    def reset(self):
        """
        :rtype: void
        """
        self._ones = set()


# Your Solution object will be instantiated and called as such:
n_rows = 500
n_cols = 250
obj = Solution(n_rows, n_cols)
for i in range(20):
    param_1 = obj.flip()
    # print(param_1)

obj.reset()
# print(obj._list)
