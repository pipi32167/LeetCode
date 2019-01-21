# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def dfs(self, root, result):
        if not root:
          return
        result.add(root.val)
        self.dfs(root.left, result)
        self.dfs(root.right, result)

    def findSecondMinimumValue(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        result = set()
        self.dfs(root, result)

        if len(result) < 2:
            return -1

        result = list(result).sort()
        return result[1]
